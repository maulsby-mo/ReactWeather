// // takes location and returns the temperature (Asynchronous)
// //Using callbacks
// function getTempCallback(location, callback){
// callback(undefined, 78);
// callback('City not found');
// }
//
// getTempCallback('Kansas City', function(err, temp){
//   if(err){
//     console.log('error', err);
//   }else {
//     console.log('success', temp);
//   }
// });
//
//
// //Using Promises
// function getTempPromise(location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//   }, 1000);
// });
// }
//
// getTempPromise('Kansas City').then(function (temp){
//   console.log ('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });

// Challenge Area
function addPromise(a,b){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        if(typeof a == 'number' && typeof b == 'number')
        {resolve(a+b);}else{
        reject('A & B need to be Numbers');}
      }, 1000);
    });
}

addPromise(4, 5).then(function(total){
  console.log('promise success', total);
}, function(err){
  console.log('promise error', err);
});

addPromise('test', 5).then(function(total){
  console.log('promise success', total);
}, function(err){
  console.log('promise error', err);
});
