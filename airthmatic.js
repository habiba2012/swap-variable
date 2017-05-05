

var x = 5;
var y = 10;
var res;



function sum (){
    
        res = x + y;
        console.log(res);
    
}

function sub (){
    
        res = x - y;
        console.log(res);
    
}



function xPower(){
   res = x ** 2;
console.log(res);
    
}

function yPower(){
   res = y ** 2;
   console.log(res);
    
}


function power(){
    
var sum = (x ** 2) + (y ** 2);

 res = Math.sqrt(sum);
console.log(res);
    
}

function multiplication(){
  
    res = x * y;

   console.log(res); 
}


sum();
sub();
multiplication();
xPower();
yPower();
power();









