#commenter
A node.js package to build comments

###Installation
```sh
$ npm install commenter
```

###Usage
```Javascript
 var commenter = require('commenter');

 var comment = {
	description: "the header message",
	extra: {
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

commenter.buildBlock(comment);

/**
 * the header message
 * 
 * *traits:
 * 	 - pageable
 * 	 - searchable
 * 
 * @param  {Object}  obj  description of the object parameter
 * @param  {String}  str  description of the string parameter
 * @return  {Boolean}    Wheter the value passes
 */
```

## Documentation

**buildBlock([*txt | String/Object*])**
Encapsulate value into a block comment
- [txt] *String*
- [txt] *Object*
- - description *String*
- - extra *Object*
- - params *Array* > *Object*
- **returns** Comment string in block coment


## License
M.I.T