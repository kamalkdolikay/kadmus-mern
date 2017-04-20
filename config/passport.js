import passport from "passport";
import LocalStrategies from 'passport-local';
const LocalStrategy = LocalStrategies.Strategy;
import User from '../models/User.js';

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send(401);
}

module.exports = passport.use('login', new LocalStrategy({
        usernameField: 'user'
    },
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username' });
            }
            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
             done(null, user);
        });
    }
));