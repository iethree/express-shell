const express = require('express');
const router = express.Router();
const log = require('logchalk');

router.get('/', (req, res, next)=>{
	log.info(req.path);
	res.send("Hello World").status(200);
});

router.get('*', (req, res, next)=>{
	log.info(req.path);
	res.send("Hello Catchall").status(200);
});

module.exports = router;
