var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('index.html', 'utf8')
var options = {
    filename: './cv.pdf',
    format: 'A4',
    border: {
        top: '60px',
        bottom: '60px'
    }
};

pdf.create(html, options).toFile(function(err, res) {
    if (err) return console.log(err);
    console.log(res);
});
