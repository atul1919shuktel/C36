var game,gameState = 0
var player
var form,playerCount =0
var db

function setup(){
  createCanvas(700,700)
  db = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

}