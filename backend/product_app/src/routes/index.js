const { Router } = require ('express');
const router = Router();

router.get('/test', (req, res) => {

    const data = {
        "name": "Fransisco",
        "apellido": "Perez"
    }

    res.json({data});
});

module.exports = router;