const { translateText } = require('../controllers/translate');

module.exports = (router) => {
  router.post('/translate', translateText);
};
