class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }

  move(xOffset, yOffset) {

    return "Actaul x position is: " + this.xPos + " Actual y position is " + this.yPos +
      " The new x postion after move is: " + (this.xPos + xOffset) + " The new y postion after move is: " + (this.yPos + yOffset);

  }

  get surface() {
    return Math.pow(this.radius, 2) * 3.1415;
  }

}

let circle1 = new Circle(120, 240, 35).move(100, 120);
console.log(circle1);
let circle2 = new Circle(120, 140, 15).surface;
console.log(circle2);
