var express = require('express');
var router = express.Router();


router.get('/', (req,res)=>{
    res.sendFile(__dirname+'/public'+'/matched.html');
});

module.exports = router;