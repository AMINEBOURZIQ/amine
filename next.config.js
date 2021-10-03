// importer la configuration next-i18next pour ne pas l'écrire partout
const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  i18n,
};
