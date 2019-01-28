/*
 **This code is a class with a constructor who make a 2D rectanglle with a constructor .
 **The class have a method who tcheck if two rectangle collide or not.
 **If he collide, the method return true.
 **Else, the method return "No collision detected".
 **Generate 1000 rectangle and verify for each one if it colise or not.
 */

class Rectangle {

  constructor(topLeftXPos, topLeftYPos, width, lenght) { // Constructor who make a rectangle.
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = lenght;
  }

  collides(otherRectangle) {

    if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&  // This code verify the collission between two rectangle.
      this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
      this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
      this.length + this.topLeftYPos > otherRectangle.topLeftYPos) {
      return true; // collision détectée !
    } else {
      return "No collision detected";
    }

  }

}

  let allRectangle = [];

  for (let i = 1000; i > 0; i--) {
    let rectangle = new Rectangle((Math.floor(Math.random() * 10000)), (Math.floor(Math.random() * 10000)),
      (Math.floor(Math.random() * 300)), (Math.floor(Math.random() * 150)));
      allRectangle.push(rectangle);
  }

console.log(allRectangle);
