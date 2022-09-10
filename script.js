//two arguments = function, then duration in milliseconds
//save as a variable so it can be cleared later

let working = setTimeout(() => {
    console.log("listo");
},  1000)

//the opposite/to stop 
// clearTimeout(index/number of function i.e. 0,1,2,3)

let myInterval = setInterval(() => {
    console.log("what's up")
},)

clearInterval(myInterval);