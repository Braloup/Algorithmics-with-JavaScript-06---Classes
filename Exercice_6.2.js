/*
 **This code is a class with a constructor who make a 2D rectanglle with a constructor .
 **The class have a method who tcheck if two rectangle collide or not.
 **If he collide, the method return true.
 **Else, the method return "No collision detected".
 */

class Rectangle {

  constructor(topLeftXPos, topLeftYPos, width, lenght) { //Constructor who make a rectangle.
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = lenght;
  }

  collides(otherRectangle) {

    if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width && // This code verify the collission between two rectangle.
      this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
      this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
      this.length + this.topLeftYPos > otherRectangle.topLeftYPos) {
      return true; // collision détectée !
    } else {
      return "No collision detected";
    }

  }

}
let rectangle1 = new Rectangle(25, 20, 150, 220); // Create rectangle1.
let rectangle2 = new Rectangle(385, 375, 100, 180).collides(rectangle1); // Create rectangle2 and verify if is collide or not with rectangle1.
console.log(rectangle2); //Return no collision detected.

let rectangle3 = new Rectangle(25, 20, 150, 220); // Create rectangle3.
let rectangle4 = new Rectangle(45, 65, 100, 180).collides(rectangle3); // Create rectangle2 and verify if is collide or not with rectangle1.
console.log(rectangle4); //Return true
