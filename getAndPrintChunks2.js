//import the https module
var https = require('https');

var requestOptions = {
    host:'sytantris.github.io',
    path: '/http-examples/step1.html'
};


function getAndPrintHTML(options, printHTML){
     
    var data = '';

    //callback function to get  the information through a http response 
    https.get(options, function(response){
        response.setEncoding('utf8');
    
        //while recieving data 
        response.on('data', function (chunk){
            //console.log(chunk);
            data += chunk;
        });
    
        //when we have recieved all the data
        response.on('end', function(){
            printHTML(data);
    
        });
    });
}

function printHTML(html) {
    console.log(html);
}

getAndPrintHTML(requestOptions, printHTML);