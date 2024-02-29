const { translate } = require('@vitalets/google-translate-api');

const convert = async (payload) => {
  try {
    const { text } = payload;

    const { text: translatedText } = await translate(text, { to: 'fr' });

    return { doc: { text: translatedText } };
  } catch (error) {
    return { errors: [ { name: 'translation-error', message: 'Translation error occurred' } ] };
  }
};

module.exports = {
  convert,
};
