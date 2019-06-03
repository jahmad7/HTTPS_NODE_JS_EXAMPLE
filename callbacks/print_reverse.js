var  getHTML = require('../http-functions');

var requestOptions = {
    host:'sytantris.github.io',
    path: '/http-examples/step1.html'
};

getHTML(requestOptions, function(html){
    console.log(html
        .split("")  //create an array of each char 
        .reverse() //reverse the index of the created array 
        .join("") //turn the newly created array back into a string 
    );
});