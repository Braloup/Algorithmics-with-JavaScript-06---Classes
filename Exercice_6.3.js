/*
 **This code is a class with a constructor who make a 2D rectanglle with a constructor .
 **The class have a method who tcheck if two rectangle collide or not.
 **If he collide, the method return true.
 **Else, the method return "No collision detected".
 **Generate 1000 rectangle and verify for each one if it colise or not.
 */

class Rectangle {

  constructor(topLeftXPos, topLeftYPos, width, lenght) { // let rectangle1 = new Rectangle(topLeftXPos, topLeftYPos, width, lenght));

    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = lenght;
  }

// This code verify the collission between two rectangle.
  collides(otherRectangle) {

    if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
      this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
      this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
      this.length + this.topLeftYPos > otherRectangle.topLeftYPos) {
      return true; // If collision detected.

    } else {
      return "No collision detected";
    }
  }

}

let allRectangle = []; //Declare global array where function createRectangle push all rectangle.

// Function who create 1000 random rectangle.
let createRectangle = () => {

  for (let i = 1000; i > 0; i--) {

    let rectangle = new Rectangle((Math.floor(Math.random() * 1000)), (Math.floor(Math.random() * 1000)), // Class Rectangle with random paramatre.
      (Math.floor(Math.random() * 300)), (Math.floor(Math.random() * 150)));
    allRectangle.push(rectangle);
  }
  return allRectangle;
}
createRectangle()

let collidesAll = [];

for (let i = 0; i < allRectangle.length - 1; i++) { //Each rectangle is compared to all the others and returns its status.
  for (let j = 0; j < allRectangle.length - 1; j++) {
    console.log(allRectangle[i].collides(allRectangle[0]));
  }
}
