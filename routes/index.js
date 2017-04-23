import express from 'express';
import passport from '../config/passport.js';
const router = express.Router();
import validationResult from '../config/validation.js'

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'React'
    });
});

router.get('/token', (req,res)=>{
    //const token = req.headers.authorization.split(' ')[1];
    res.send("token",req.headers)
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
    res.send("success");
});

router.get('/dashboard', (req,res) => {
    res.status(200).json({
        message: "You're authorized to se this this message"
    });
});

export default router;