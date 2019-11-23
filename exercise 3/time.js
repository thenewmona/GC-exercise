"use strict"
// function minToSecs (mins){
//     let sec =60; 
//     return (mins*sec);    
// }
// mins(4);

// declaration - parameter
//declarative
// function hourToMin (hour){
//     let min = 60;//statement
    
//     return (hour*min);//invoking the function
// }
// //calling the function 
// hourToMin(6);
// console.log(hourToMin(6));

//declaring a variable into a function
// let hourToMin = function(hour) {
// let min =60;
// return (hour*min);
// }
// console.log (hourToMin(7));

//arrow
// declaring the variable with a arrow function, fat arrow just gets rid of the word function
let hourToMin = () =>{
    let min = 1;
    let sec = 60;
    return (sec*min);
    

}
//calling the function
console.log(hourToMin());