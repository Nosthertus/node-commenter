var utils = require('utils-pkg');
var handler = require('./lib/handler.js')

module.exports.buildBlock = function(cmt){
	if(utils.isObject(cmt) && utils.inKeyObject(cmt, "description")){
		var str = handler.toStringOptions(cmt);

		return handler.writeBlock(str);
	}

	if(utils.isString(cmt)){
		return handler.writeBlock(cmt);
	}
}