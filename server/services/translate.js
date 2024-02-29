const { translate } = require('@vitalets/google-translate-api');

const translateText = async (payload) => {
  try {
    const { text } = payload;

    const translatedText = await translate(text, { to: 'fr' });

    return { translation: translatedText.text };
  } catch (error) {
    return { errors: [ { name: 'translation-error', message: 'Translation error occurred' } ] };
  }
};

module.exports = {
  translateText,
};
