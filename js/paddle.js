 export default class Paddle{

     constructor(gameWidth, gameHeight) {
         this.width = 150;
         this.height = 30;

         this.position = {
             //lets start in the middle of the screen
             x: gameWidth / 2 - this.width/ 2,
             //game height minus the height of the object minus how far from the bottom we want it
             y: gameHeight - this.height - 10
         };
     }

     draw(context){
         //draw the paddle
         context.fillRect(this.position.x, this.position.y, this.height, this.width);
     }
 }