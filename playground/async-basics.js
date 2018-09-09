console.log("Starting app");
setTimeout(()=>{
	console.log('Intermediate work')
},2000)

setTimeout(()=>{
	console.log("Hey buddy")
},0)
console.log("Ending app");