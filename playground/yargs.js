
var yargs = require('yargs');

var argv = yargs
.options(
{
	a : 
	{
		alias: "address",
		demand : true,
		describe : "For address",
		string : true
	}
})
.help()
.alias('h' , 'help')
.argv;
console.log(argv);