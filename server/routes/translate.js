const { convert } = require('../controllers/translate');

module.exports = (router) => {
  router.post('/translate', convert);
};
