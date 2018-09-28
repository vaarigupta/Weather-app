var request = require("request");

var getWeather = (longitude,latitude,callback)=>{


	request({
	url:`https://api.darksky.net/forecast/5da9efc326a46e965bedb46e9744fae6/${longitude},${latitude}`,
	json:true
},(error, response,body)=>{
	//console.log(JSON.stringify(body,undefined,3));
	if(error)
	{
		///its is system related error where server is involved and its not 
		///responding and we cannot reach to the server due to internet conncetion or wrong url
		callback("Oops !!! Unable to connect with server",undefined);
	}
	else if(response.statusCode === 400)
	{

		///user makes a mistake while fetching location  like 
		// enter wrong location parameters
       callback("Oops !!! Unable to fetch weather ",undefined);
	}
	else if (!error && response.statusCode === 200) 
	{
		callback(undefined,{
			temperature:body.currently.temperature,
			apparentTemp:body.currently.apparentTemperature
		})
    

	}
	


})

}


module.exports = {
	getWeather
}

