class Triangle {
  
  constructor(a, b, c) {
    this.name = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
  }

get area(){
    var s = ( this.a + this.b + this.c)/2;
    return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c)).toFixed(4);
}
   sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }

  isMakeRight(){
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

}

checkForTriangle(){ 

	  if ( ((this.a * this.a) + (this.b * this.b)) == (this.c * this.c) ){

console.log("It is a right angle triangle");

} else {

console.log("It can not be a triangle");

}

}

}

let tri = new Triangle(6, 8, 10);
tri.sayName();
console.log('The area of triangle is = ' + tri.area);
console.log(tri.isMakeRight());
console.log(tri.checkForTriangle());

class Rectangle extends Triangle {
  constructor(a, b) {
    super(a, b);
    this.name = 'Rectangle';
  }
 
 get area(){
     return this.a * this.b;
 }
  sayName() {
    console.log('Sup! My name is ', this.name + '.');
    
  }
}

let rec = new Rectangle(50, 60);
rec.sayName();
console.log('The area of Rectangle is = ', rec.area);

class Circle extends Triangle {
  constructor(radius) {
      super(radius);
     this.radius = radius;
  }
    get area(){
        return Math.PI * this.radius * this.radius;
    }
    
  
    perimeter()
    {
        return 2*Math.PI*this.radius;
    }

    diameter(){
    	return 2*this.radius;
    }
}


var c = new Circle(3);
console.log('Area of circle =', c.area.toFixed(2));
console.log('perimeter of circle =', c.perimeter().toFixed(2));
console.log('diameter  of circle =', c.diameter().toFixed(2));


