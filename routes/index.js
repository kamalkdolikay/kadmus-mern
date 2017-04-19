import express from 'express';
import User from '../models/User.js';
//import passport from '../config/passport.js'
const router = express.Router();

import passport from "passport";
import LocalStrategies from 'passport-local';
const LocalStrategy = LocalStrategies.Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('login', new LocalStrategy({
        usernameField: 'user'
    },
    function(username,password, done) {
        console.log("user", username)
        User.findOne({ username: username }, function(err, user) {
            if (err) {  done(err); }
            if (!user) {
                 done(null, false, { alert: 'Incorrect username' });
            }
            
             done(null, user);
        });
    }
));

/* GET index page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'React'
    });
});

router.get('/posts', (req,res)=>{
    User.find({}, function(err,docs){
        console.log(docs)
        res.send(docs)
    })
})

/*router.post('/login', (req, res) => {
    console.log("req", req.body)
    res.send("success")
})*/

router.post('/login', function(req, res, next) {
    console.log(req.body)

    passport.authenticate('login', function(err, user, info) {
        if (err) { return next(err); }
        console.log("user",user)
        console.log("info",info)

        if (user) {
            return res.json({ token: "user.generateJWT()" });
        } else {
            return res.status(401).json(info);
        }
    })(req, res, next);
});

router.post('/signup', (req, res) => {
    console.log("req", req.body)
    res.send("success");
})

export default router;