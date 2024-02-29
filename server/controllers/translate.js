const translateService = require('../services/translate');

const translateText = async (req, res) => {
  try {
    const { body } = req;

    const data = {
      ...body,
    };

    const { errors: err, translation } = await translateService.translateText(data);

    if (translation) {
      res.setHeader('Content-Type', 'application/json');

      return res.status(200).json({ translation });
    }

    return res.badRequest('field-validation', err);
  } catch (error) {
    return res.serverError(error);
  }
};

module.exports = {
  translateText,
};
