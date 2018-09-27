const request = require('request');

const yargs = require('yargs');
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

//console.log(argv);
//console.log(process)

var encodedURL = encodeURIComponent(argv.a)

request({
	// url : "https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(argv.a),
	url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}`,
	json : true
},(error,response , body)=>{
	//console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log(body)
  if(error)
  {
  	console.log("Oops !! Unable to connect with google server ");
  	console.log("please Check URL or your internet connection");
  }
  else if(body.status === 'ZERO_RESULTS')
  {
    console.log("Oops !! Unable to find location for this address")
  }
  else if(body.status==='OK')
  {
  	console.log(`Address : ${body.results[0].formatted_address}`); // Print the HTML for the Google homepage.
  	console.log(`Longitude : ${body.results[0].geometry.location.lat}`);
  	console.log(`Latitude : ${body.results[0].geometry.location.lng}`);
  }
  else
  {
  	console.log("Oops!!!!!!!!!!");
  }
 
})














