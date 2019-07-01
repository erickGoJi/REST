var exec = require('cordova/exec');
var PLUGIN_NAME = 'RESTBanxico';

var RESTBanxico = {
    coolMethod: function (arg0, success, error) {
        exec(success, error, 'RESTBanxico', 'coolMethod', [arg0])
    }
};

module.exports = RESTBanxico;
