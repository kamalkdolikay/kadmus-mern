import express from 'express';
import passport from '../config/passport.js'
const router = express.Router();

function validateLoginForm(payload){
    const errors = {};
    let isFormValid = true;
    let message = '';

    if(!payload || typeof payload.user !== 'string' || payload.user.trim().length === 0){
        isFormValid = false
        errors.user = 'Please provide your name'
    }

    if(!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0){
        isFormValid = false
        errors.password = 'Please provide your password'
    }

    if(!isFormValid){
        message = 'Check the form for errors'
    }

    return {
        success: isFormValid,
        message,
        errors
    }
}

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
    const validationResult = validateLoginForm(req.body)
    if(!validationResult.success){
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
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