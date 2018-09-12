var getUser = (id , callback)=>{

	var user = {
		id,
		name : "vaari"
	}
	setTimeout(()=>callback(user),3000);
	console.log("after 3 seconds , you will receive object");
	
}

getUser(2, (userObject)=>
{
	console.log(userObject);
})