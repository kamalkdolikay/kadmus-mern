import passport from "passport";
import LocalStrategies from 'passport-local';
const LocalStrategy = LocalStrategies.Strategy;
import User from '../models/User.js';

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send(401);
}

module.exports = passport.use('login', new LocalStrategy({
        usernameField: 'user',
        passReqToCallback: true
    },
    function(req, user, done) {
        return done(null, "users")
        User.find({}, function(err, user) {
            
            return done(null, user);
        });
    }
));