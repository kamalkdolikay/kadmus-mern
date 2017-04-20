import express from 'express';
//import User from '../models/User.js';
import passport from '../config/passport.js'
const router = express.Router();

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

router.post('/login', function(req, res, next) {
    console.log(req.body)

    passport.authenticate('login', function(err, user, info) {
        if (err) { return next(err); }
        console.log("err",err)
        console.log("user",user)
        console.log("info",info)

        if (user) {
            return res.json({ token: "user" });
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