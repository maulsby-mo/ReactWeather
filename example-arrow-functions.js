var names = ['Marlon', 'Camar', 'MQorri'];

// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name)=>{
//   console.log('arrowFunc', name);
// })
//
// names.forEach((name)=>console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Marlon'));


// var person = {
//   name: 'Marlon',
//   greet: function(){
//     names.forEach( (name) =>{
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();


// Challenge Area
var add = (a,b) => {
  return a + b;
}
// add Statement
var add = (a, b) =>a+b;

// add Expression

console.log(add(1, 3));
console.log(add(0, 9));
