// var promiseObj = new Promise((resolve , reject)=>{
	
// 	setTimeout(()=>{
// 		resolve("hey Im vaari");
//         reject("unable to give Promises");


// 	},2500);
         
	
// });

// promiseObj.then((msg)=>{
//    console.log("Success  : " ,msg)
// }).then((errorMsg)=>{
//   console.log( "Error Message : " ,errorMsg);
// })


var asyncAdd = (a,b)=>
{
  return new Promise((resolve,reject)=>{
       if(typeof a === 'number' && typeof b === 'number')
       {
        setTimeout(()=>{
             resolve(a+b);
        },3000)
       }
       else
       {
        reject('Oops !! ONLY NUMBERS ARE ALLOWED');
       }
  })
}

/// In the following code , when first promise call is rejected then other
// call is succeeded irrespective of result come out from the previous promise
// kayde se ,the next promise should not be executed but it executed because of the two call back functions
/// passed in  successive then method which is not required 
/// we will resolve the following code by using catch() method in the 
///following code

// asyncAdd(4,"8").then((res)=>{
//   console.log("Result : " + res);
//   return asyncAdd(res,'8');
// },(errorMsg)=>{
//   console.log(errorMsg);
// }).then((res)=>{
//  console.log("Result : " + res);
// },(errorMsg)=>{
//  console.log(errorMsg);
// });


///catch method is used to for calling a callback function 
///for any of the rejection occurred in th promise 
/// it collects the rejection occurred in any of the then () method , 
/// does not allow to execute the further then method as we expected in chaining of promises

asyncAdd(4,"6").then((res)=>{
  console.log("Result-1:" + res);
  return asyncAdd(res,9);

}).then((res)=>{
  console.log("Result-2: " + res);

}).catch((errorMsg)=>{
  console.log(errorMsg);
})