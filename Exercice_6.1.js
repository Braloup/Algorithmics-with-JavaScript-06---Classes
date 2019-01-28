/*
 **Create a class who instencie a circle postion and radius.
 **Create a method move who moved the circle.
 */

class Circle { // Declare class Circle.

  constructor(xPos, yPos, radius) { // let circle1 = new Circle(xPos, yPos, radius);
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }

  // Method move, for moving circle.
  move(xOffset, yOffset) {

    return "Actaul x position is: " + this.xPos + " Actual y position is " + this.yPos +
      " The new x postion after move is: " + (this.xPos + xOffset) + " The new y postion after move is: " + (this.yPos + yOffset);
  }

  //Getter who return circumference.
  get surface() {
    return Math.pow(this.radius, 2) * 3.1415;
  }

}

let circle1 = new Circle(120, 240, 35).move(100, 120); // Create circle, move it and log coordinated
console.log(circle1);

let circle2 = new Circle(120, 140, 15).surface; // Create circle and return circumference.
console.log(circle2);
