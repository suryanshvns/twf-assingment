const translateService = require('../services/translate');

const convert = async (req, res) => {
  try {
    const { body } = req;

    const { errors: err, doc } = await translateService.convert(body);

    if (doc) {
      const { translation } = doc;

      return res.getRequest({ translation });
    }

    return res.badRequest('field-validation', err);
  } catch (error) {
    return res.serverError(error);
  }
};

module.exports = {
  convert,
};
