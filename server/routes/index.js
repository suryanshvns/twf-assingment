const express = require('express');

const router = express.Router();
const pingRoutes = require('./ping');
const healthCheckRoutes = require('./health-check');
const translateText = require('./translate');

pingRoutes(router);
healthCheckRoutes(router);
translateText(router);

module.exports = router;
