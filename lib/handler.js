module.exports.writeBlock = function(str){
	var block = '/**\n';
	block += this.addAsterisks(str);
	block += ' */';

	return block;
}

module.exports.addAsterisks = function(str){
	var lines = str.split("\n");
	var txt   = '';

	for(var i = 0; i < lines.length; i++){
		txt += ' * ' + lines[i] + '\n';
	}

	return txt;
}

module.exports.toStringOptions = function(obj){
	var txt = [];

	for(k in obj){
		if(k == "description"){
			txt[0] = obj[k];
			txt.push(''); //Push nothing so it has the effect of line space
		}

		else if(k == "params")
			txt = txt.concat(this.arrayStrParams(obj[k]));
	}

	return txt.join('\n');
}

module.exports.arrayStrParams = function(arr){
	var rtrn = '';
	var params = [];

	for (var i = 0; i < arr.length; i++){
		var obj = arr[i];

		if(obj.name)
			params.push("@param  {" + obj.type + "}  " + obj.name + "  " + obj.description);
	}

	return params;
}