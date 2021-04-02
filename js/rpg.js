import Paddle from "/js/paddle.js";

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


context.clearRect(0,0,800,600)

//spawn a new paddle
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(context);







// context.fillStyle = "red";
// context.fillRect(20,20,100,100);
//
// context.fillStyle = "blue";
// context.fillRect(370,450,20,60);



// var character = [
//     {hitPointLevel: 10, hitPointExperience: 0},
//     //combat stats
//     {attackLevel: 1, experience: 0},
//     // strengthLevel: 1,
//     // defenceLevel: 1,
//     // rangedLevel: 1,
//     // magicLevel: 1,
//     // //non-combat related stats
//     // agilityLevel: 1,
//     // stamina: 0,
//     // mana: 0,
// ]
// function levelCalculator(character) {
//     this.experience = (this.attackLevel - 1 + 300 * 2**((this.attackLevel-1)/7)/4)
// }
// character.forEach(function(string){
//     console.log(string);
// })
