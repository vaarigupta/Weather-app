const request = require('request');

var geocodeAddress = (address)=>{

var encodedURL = encodeURIComponent(address);

return new Promise((resolve,reject)=>{

  request({
  url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}`,
  json : true
},(error , response , body)=>{
   if(error)
  {
    reject("Oops !! Unable to connect with google server ");
   
  }
  else if(body.status === 'ZERO_RESULTS')
  {
    reject("Oops !! Unable to find location for this address");
  }
  else if(body.status==='OK')
  {
    resolve({

      address: body.results[0].formatted_address,
      longitude : body.results[0].geometry.location.lat,
      latitude : body.results[0].geometry.location.lng

    })
  }
  

})

})


}



geocodeAddress("11111111").then((res)=>{
  console.log(JSON.stringify(res,undefined,2));

}).catch((errorMsg)=>{

console.log(errorMsg);
})