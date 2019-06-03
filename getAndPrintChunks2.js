//import the https module
var https = require('https');

var requestOptions = {
    host:'sytantris.github.io',
    path: '/http-examples/step1.html'
};


function getAndPrintHTML(options){
     
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
            return data;
    
        });
    });
}


var syntanris = getAndPrintHTML(requestOptions);

console.log(syntanris);