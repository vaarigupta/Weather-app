// const request = require('request');

// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js');
// const argv = yargs
//    .options({
//    	a :
// 	   	{
// 		   	alias:'address',
// 		   	demand : true,
// 		   	describe:'finding location for the given address'
// 	    }
// 			}
//    	).alias('h','help')
// .argv;

// //console.log(argv);
// //console.log(process)

// geocode.geocodeAddress(argv.a,(errorMessage ,result)=>{
// 	if(errorMessage)
// 	{
// 		console.log(errorMessage);
// 	}
// 	else
// 	{
// 		console.log(JSON.stringify(result,undefined,2));
// 	}

// });


var request = require("request");

request({
	url:"https://api.darksky.net/forecast/5da9efc326a46e965bedb46e9744fae6/37.09024,-95.712891",
	json:true
},(error, response,body)=>{
	//console.log(JSON.stringify(body,undefined,3));
	if(error)
	{
		///its is system related error where server is involved and its not 
		///responding and we cannot reach to the server due to internet conncetion or wrong url
		console.log("Oops !!! Unable to connect with server");
	}
	else if(response.statusCode === 400)
	{

		///user makes a mistake while fetching location  like 
		// enter wrong location parameters
       console.log("Oops !!! Unable to fetch weather ");
	}
	else if (!error && response.statusCode === 200) 
	{
    console.log(`Temperature - ${body.currently.temperature}`);
	console.log(`Humidity - ${body.currently.humidity}`);
	console.log(`Pressure - ${body.currently.pressure}`);


	}
	


})


//api key -  5da9efc326a46e965bedb46e9744fae6





// var encodedURL = encodeURIComponent(argv.a)

// request({
// 	// url : "https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(argv.a),
// 	url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}`,
// 	json : true
// },(error,response , body)=>{
// 	//console.log('error:', error); // Print the error if one occurred
//   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   //console.log(body)
//   if(error)
//   {
//   	console.log("Oops !! Unable to connect with google server ");
//   	console.log("please Check URL or your internet connection");
//   }
//   else if(body.status === 'ZERO_RESULTS')
//   {
//     console.log("Oops !! Unable to find location for this address")
//   }
//   else if(body.status==='OK')
//   {
//   	console.log(`Address : ${body.results[0].formatted_address}`); // Print the HTML for the Google homepage.
//   	console.log(`Longitude : ${body.results[0].geometry.location.lat}`);
//   	console.log(`Latitude : ${body.results[0].geometry.location.lng}`);
//   }
//   else
//   {
//   	console.log("Oops!!!!!!!!!!");
//   }
 
// })














