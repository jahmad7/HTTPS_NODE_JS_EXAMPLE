//import the https module
var https = require('https');
var data = '';

var requestOptions = {
    host:'sytantris.github.io',
    path: '/http-examples/step1.html'
};

 

//callback function to get  the information through a http response 
https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    //while recieving data 
    response.on('data', function (chunk){
        //console.log(chunk);
        data += chunk;
        console.log("NEXT");

    });

    //when we have recieved all the data
    response.on('end', function(){
        console.log(data);

    });
});
