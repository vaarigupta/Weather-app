const yargs = require('yargs');
const axios = require('axios');
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

var encodedURL = encodeURIComponent(argv.address);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}`)
.then((response)=>{
	if(response.data.status === 'ZERO_RESULTS')
	{
		throw new Error('Unable to find this address')
	}
	else if (response.data.status === 'OK')
	{
     
     var latitude = response.data.results[0].geometry.location.lat;
	 var longitude = response.data.results[0].geometry.location.lng;
	 console.log(response.data.results[0].formatted_address);
	 return axios.get(`https://api.darksky.net/forecast/5da9efc326a46e965bedb46e9744fae6/${longitude},${latitude}`);
	}

}).then((response)=>{
	if(response.data.code === 400)
	{
       throw new Error("Oops !!! Unable to fetch weather ",undefined);
	}

	else if (response.data.code === 200)
	{

		var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`The actual temperature is ${temperature} but it feels like ${apparentTemperature}`);
	}

	

}).catch((errorMsg)=>{
	  if(errorMsg.code=== 'ECONNREFUSED')
	  console.log("Oops !! Unable to connect with server");
	  else
	  {
	  	console.log(errorMsg.message);
	  }
})

