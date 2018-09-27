const request = require('request');
request({
	url : "https://maps.googleapis.com/maps/api/geocode/json?address=%20shahdara",
	json : true
},(error,response , body)=>{
	//console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(body)
  console.log(`Address : ${body.results[0].formatted_address}`); // Print the HTML for the Google homepage.
  console.log(`Longitude : ${body.results[0].geometry.location.lat}`)
  console.log(`Latitude : ${body.results[0].geometry.location.lng}`)
})














