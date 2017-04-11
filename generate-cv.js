const fs = require('fs')
const pdf = require('html-pdf')
const html = fs.readFileSync('./cv.html', 'utf8')
const options = {
  filename: './cv.pdf',
  format: 'A4',
  zoomFactor: 0.5,
  border: {
    top: '20px',
    right: '20px',
    bottom: '20px',
    left: '20px'
  }
}

pdf.create(html, options).toFile((err, res) => {
  if (err) throw new Error(err)
  console.log('[ INFO ] CV PDF generated')
})
