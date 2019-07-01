var exec = require('cordova/exec');
var PLUGIN_NAME = 'RESTBanxico';

var RESTBanxico = {
    coolMethod: function (arg0, success, error) {
        exec(success, error, 'RESTBanxico', 'coolMethod', [arg0])
    },
    sendPost: function(endPoint,requestbody){
        exec(success,error,'sendPost',[endPoint,requestbody]);   
    }
};

module.exports = RESTBanxico;
