//import the https module
var https = require('https');

var requestOptions = {
    host:'sytantris.github.io',
    path: '/http-examples/step1.html'
};

//callback function to get  the information through a http response 
https.get(requestOptions, function(response){
    response.setEncoding('utf8');

    //while recieving data 
    response.on('data', function (data){

    });

    //when we have recieved all the data
    response.on('end', function(){
        console.log("resonse stream has ended");
    });
});