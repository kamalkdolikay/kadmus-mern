import passport from "passport";
import LocalStrategies from 'passport-local';
const LocalStrategy = LocalStrategies.Strategy;
import User from '../models/User.js';

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send(401);
}

module.exports = passport.use('login', new LocalStrategy({
        usernameField: 'user',
        passReqToCallback: true
    },
    function(req, username, password, done) {
        const userData = {
            user: username.trim(),
            pass: password.trim()
        }
        User.findOne({ username: userData.user }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username' });
            }
            if (user.password != userData.pass) {
                return done(null, false, { message: 'Incorrect password' });
            }
             done(null, user);
        });
    }
));