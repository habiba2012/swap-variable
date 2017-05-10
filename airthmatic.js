






function add (a,b){
    
        return a + b;
        
    
}

function sub (a,b){
    
        return a - b;
        
    
}



function xPower(a){
   return a ** 2;

    
}

var yPow = xPower(10);


function power(a,b){
    
//var sum = (a ** 2) + (b ** 2);
var sum = xPower(a) + xPower(b);

 return Math.sqrt(sum);

    
}

function multiplication(a,b){
  
    return a * b;

   
}



// function outPut (res){

// 	console.log(res);
// }


// var sum = outPut(x+y);

// var sub = outPut(x-y);

// var multiplication = outPut(x*y);

// var xPower = outPut(x ** 2);

// var yPower = outPut(y ** 2);


// var sum = (x ** 2) + (y ** 2);
// var power = outPut(Math.sqrt(sum));




console.log(add(5,10));
console.log(sub(5,10));

console.log(xPower(5));
console.log(yPow);
//power(5,10);
console.log(multiplication(5,10));
 console.log(power(5,10));










