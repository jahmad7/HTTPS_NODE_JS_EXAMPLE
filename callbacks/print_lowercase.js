var  getHTML = require('../http-functions');

var requestOptions = {
    host:'sytantris.github.io',
    path: '/http-examples/step1.html'
};

getHTML(requestOptions, function(html){
    console.log(html.toLowerCase());
});