 var commenter = require('./index.js');

 var comment = {
	description: "the header message",
	example: {
		traits: ["pageable", "searchable"]
	},
	params:[
		{
			type: "Object",
			name: "obj",
			description: "description of the object parameter"
		},{
			type: "String",
			name: "str",
			description: "description of the string parameter"
		},{
			return: true,
			type: "Boolean",
			description: "Wheter the value passes"
		}
	]
};

console.log(commenter.buildBlock(comment));

/**
 * the header message
 *
 * example:
 * 		*traits:
 * 			- pageable
 * 			- searchable
 *
 * @param  {Object} obj description of the object parameter
 * @param  {String} str description of the string parameter
 * @return {Boolean}    Wheter the value passes
 */