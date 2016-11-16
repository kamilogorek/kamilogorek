var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('index.html', 'utf8')
var options = {
    filename: './cv.pdf',
    format: 'A4',
    zoomFactor: 0.5,
    border: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
    }
};

pdf.create(html, options).toFile(function(err, res) {
    if (err) return console.log(err);
    console.log(res);
});
