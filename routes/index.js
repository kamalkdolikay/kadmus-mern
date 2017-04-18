import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'React'
    });
});

router.post('/login', (req, res) => {
    console.log("req", req.body)
    res.send("success")
})

export default router;