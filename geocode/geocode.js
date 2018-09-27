
const request = require('request');
var geocodeAddress = (address , callback)=>
{

var encodedURL = encodeURIComponent(address);

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
    callback("Oops !! Unable to connect with google server ",undefined);
    callback("please Check URL or your internet connection",undefined);
  }
  else if(body.status === 'ZERO_RESULTS')
  {
    callback("Oops !! Unable to find location for this address",undefined);
  }
  else if(body.status==='OK')
  {
    callback(undefined,{

      Address: body.results[0].formatted_address,
      Longitude : body.results[0].geometry.location.lat,
      Latitude : body.results[0].geometry.location.lng

    })
  }
  else
  {
    console.log("Oops!!!!!!!!!!");
  }
 
})

}

module.exports =
{
  geocodeAddress
}
