import express from 'express';
import passport from '../config/passport.js';
const router = express.Router();
import validationResult from '../config/validation.js'

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
    const validate = validationResult(req.body)
    if(!validate.success){
        return res.status(400).json({
            success: false,
            message: validate.message,
            errors: validate.errors
        })
    }
    passport.authenticate('login', function(err, user, info) {
        if (err) { return next(err); }

        if (user) {
            return res.json({ token: user.generateJWT() });
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