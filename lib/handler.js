var utils = require('utils-pkg');

/**
 * Write a comment block
 * 
 * @param  {String} str The string that is contained in comment block
 * @return {String}     The built comment block
 */
module.exports.writeBlock = function(str){
	var block = '/**\n';
	block += this.addAsterisks(str);
	block += ' */';

	return block;
}

/**
 * Add asterisks for each line of the string
 * 
 * @param  {String} str The normal string
 * @return {String} 	String with asterisks on each line
 */
module.exports.addAsterisks = function(str){
	var lines = str.split("\n");
	var txt   = '';

	for(var i = 0; i < lines.length; i++){
		txt += ' * ' + lines[i] + '\n';
	}

	return txt;
}

/**
 * Transform options to string values for building comment
 * 
 * @param  {Object} obj The options passed to package method
 * @return {String}     The object transformed into string in comment format
 */
module.exports.toStringOptions = function(obj){
	var txt = [];

	for(k in obj){
		if(k == "description"){
			txt[0] = obj[k];
			txt.push(''); //Push nothing to create line between sections
		}

		if(k == "extra"){
			txt = txt.concat(this.addExtras(obj[k]));
			txt.push(''); //Push nothing to create line between sections
		}

		if(k == "params")
			txt = txt.concat(this.arrayStrParams(obj[k]));
	}

	return txt.join('\n');
}

/**
 * Transform each parameter property to string parameter for comment block
 * 
 * @param  {Array} arr  The parameters passed
 * @return {Array}      Transformed parameters for comments inside a list
 */
module.exports.arrayStrParams = function(arr){
	var rtrn = '';
	var params = [];

	for (var i = 0; i < arr.length; i++){
		var obj = arr[i];

		if(obj.name)
			params.push("@param  {" + obj.type + "}  " + obj.name + "  " + obj.description);

		if(obj.return)
			params[params.length] = "@return  {" + obj.type + "}    " + obj.description;
	}

	return params;
}

/**
 * Transform extra parameters to string for block comment
 * 
 * @param  {Object} obj The object of extra description on comment
 * @return {Array} 		List of lines parsed from extra object
 */
module.exports.addExtras = function(obj){
	var lines = [];

	for(k in obj){
		if(utils.isArray(obj[k]) && obj[k].length > 0){
			lines.push("*" + k + ":");

			var arr = obj[k];

			for(var i = 0; i < arr.length; i++){
				if(utils.isString(arr[i]))
					lines.push("\t - " + arr[i]);
			}
		}
	}

	return lines;
}