const Handlebars = require('handlebars')
const slugify = require('slugify')

Handlebars.registerHelper('metaTag', (string) => {
  return JSON.stringify(string.replace(/"/g, '&quot;'))
})

Handlebars.registerHelper('slugify', slugify)