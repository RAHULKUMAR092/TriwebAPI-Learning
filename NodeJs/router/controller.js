const express = require('express');
const cal = require('../controller/controller');

const router = express.Router();

router.post('/add',cal.add);
router.post('/sub',cal.sub);
router.post('/prod',cal.prod);
router.post('/multi',cal.multi);


module.express = router;
