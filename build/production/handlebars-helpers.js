const Handlebars = require('handlebars')

Handlebars.registerHelper('metaTag', (string) => {
  return JSON.stringify(string.replace(/"/g, '&quot;'))
})
