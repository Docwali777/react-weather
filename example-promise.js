// function getTempCallback(location, callback){
// callback(undefined, 70);
// callback("City not Found")
// }
// getTempCallback("Philadelphia", function(err, temp){
//   if(err){console.log("error", err);}
//   else{console.log("success", temp)}
// })
//
// function getTempPromise(location){
// return new Promise(function(resolve, reject){
// setTimeout(function(){resolve(79);
// reject("city not Found")}, 2000)
//
// });
// }
// getTempPromise("Annadale").then(function(temp){console.log("Promise Success", temp)}, function(err){console.log("promise err", err)});
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === "number" && typeof b === "number"){
      resolve(a+b);
    }
    else {reject("One of both of the arguments is not a number")}
  })
}
addPromise(2, 7).then(function(number){
  console.log("Addition successful", number)
}, function(err){
  console.log("Not successful: ", err)
})
addPromise(2, undefined).then(function(number){
  console.log("Addition successful", number)
}, function(err){
  console.log("Not successful: ", err)
})
