const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const argv = yargs
   .options({
   	a :
	   	{
		   	alias:'address',
		   	demand : true,
		   	describe:'finding location for the given address'
	    }
			}
   	).alias('h','help')
.argv;