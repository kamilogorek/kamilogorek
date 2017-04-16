const ghpages = require('gh-pages')
const path = require('path')

ghpages.publish(path.join(__dirname, '_site'), (err) => {
  if (err) throw new Error(err.message)
  console.log('[ Success ] Deployed successfully')
})
