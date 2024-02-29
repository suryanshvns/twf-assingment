const { translate } = require('@vitalets/google-translate-api');

const convert = async (payload) => {
  try {
    const { text } = payload;

    const { text: translation } = await translate(text, { to: 'fr' });

    return { doc: { translation } };
  } catch (error) {
    return { errors: [ { name: 'translation-error', message: 'Translation error occurred' } ] };
  }
};

module.exports = {
  convert,
};
