//import the https module
var https = require('https');


function printHTML(html) {
    console.log(html);
}


module.exports = function getHTML(options, callback) {
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
            callback(data);
    
        });
    });
};