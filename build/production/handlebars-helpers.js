const Handlebars = require('handlebars')

Handlebars.registerHelper('json', (string) => {
  return JSON.stringify(string)
})