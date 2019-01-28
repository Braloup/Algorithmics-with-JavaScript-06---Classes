class Rectangle {

  constructor(topLeftXPos, topLeftYPos, width, lenght) {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = lenght;
  }

  collides(otherRectangle) {

    if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
      this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
      this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
      this.length + this.topLeftYPos > otherRectangle.topLeftYPos) {
      return true;     // collision détectée !
    } else {
      return "No collision detected";
    }

  }

}
let rectangle1 = new Rectangle(25, 20, 150, 220);
let rectangle2 = new Rectangle(385, 375, 100, 180).collides(rectangle1);
console.log(rectangle2);  //Return no collision detected.

let rectangle3 = new Rectangle(25, 20, 150, 220);
let rectangle4 = new Rectangle(45, 65, 100, 180).collides(rectangle3);
console.log(rectangle4);  //Return true
