
//triangle


function triangle(a,b,c) {
this.a = a;
this.b = b;
this.c = c;
this.name = 'triangle';
this.surface = function(){
var s = ( this.a + this.b + this.c)/2;
return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c)).toFixed(4);
};

this.isMakeRight = function(){
	  var opposite = this.a;
    var hypotenuse = this.c;

    var sinOfAngleX = opposite / hypotenuse; 
    var angleX = Math.asin(sinOfAngleX) * 180/Math.PI;
    //return angleX;

    if(angleX == 90){
    	console.log("It is a right angle")
    }
    else{
    	console.log("It is not a right angle and angle = " + angleX);
    }

};

this.checkForTriangle = function(){ 

	  if ( ((this.a * this.a) + (this.b * this.b)) == (this.c * this.c) ){

console.log("It is a right angle triangle");

} else {

console.log("It can not be a triangle");

}

};

function sayName(){
    console.log("Hi! I am " + this.name + ".")
}


sayName();

}


var ar = new triangle(6,8,10);
console.log('Area of Rectangle' + ar.surface());
console.log(ar.isMakeRight());
console.log(ar.checkForTriangle());







//rectangle

function rectangle(a,b){
	this.a = a;
	this.b = b;
	this.recSurface = function(){
		return this.a * this.b;
	};
}


	var rec =  new rectangle(7,9);
	console.log('Area of rectangle =' + rec.recSurface());


//circle
function circle(radius)
{
    this.radius = radius;
  
    this.surface = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };

    this.diameter = function(){
    	return 2*radius;
    }
}
var c = new circle(3);
console.log('Area of circle =', c.surface().toFixed(2));
console.log('perimeter of circle =', c.perimeter().toFixed(2));
console.log('diameter  of circle =', c.diameter().toFixed(2));



