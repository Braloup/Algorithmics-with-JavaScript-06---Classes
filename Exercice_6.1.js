class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }

  move(xOffset, yOffset) {

<<<<<<< HEAD
    return "Actaul x position is: " + this.xPos + " Actual y position is " + this.yPos +
    " The new x postion after move is: " + (this.xPos + xOffset) + " The new y postion after move is: " + (this.yPos + yOffset);
=======
    console.log("Actaul x position is: " + this.xPos + " Actual y position is " + this.yPos);
    console.log(" The new x postion after move is: " + (this.xPos + xOffset) + " The new y postion after move is: " + (this.yPos + yOffset));
>>>>>>> fd0bd217b8d113ae1aeab377cd42d5566a05717e

  }

  get surface() {
<<<<<<< HEAD
    return Math.pow(this.radius, 2) * 3.1415;
=======
    return (Math.pow(this.radius, 2) * 3.1415).toFixed(3);
>>>>>>> fd0bd217b8d113ae1aeab377cd42d5566a05717e
  }

}

let circle1 = new Circle(120, 240, 35).move(100, 120);
<<<<<<< HEAD
console.log(circle1);
=======

>>>>>>> fd0bd217b8d113ae1aeab377cd42d5566a05717e
let circle2 = new Circle(120, 140, 15).surface;
console.log(circle2);
