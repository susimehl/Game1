const game = new Game ()
//sound//
let soundFile;
// let loopStart = 0.5;
// let loopDuration = 0.2;
let soundIsPlaying = false

let mySound = new Audio("../assets/music/DeadPlanet.wav")
function preload(){
    game.preload()
    soundFile = loadSound('../assets/music/DeadPlanet.wav')
}
   
function setup (){
    let cnv = createCanvas (800,600);
    cnv.mousePressed(canvasPressed);
}

function draw (){
    // if (!soundIsPlaying) {
    //     soundFile.loop()
    //     soundIsPlaying = true
    // }
    


    game.draw()
    
}
 
function canvasPressed(){
    // mySound.play();
    //loop//
    soundFile.loop();
    background(0,200,50);
    }




function keyPressed(){
    if (keyCode === 32){
        game.player.jump()
    }
    if (keyCode === 39) {
        game.player.moveRight()
      }
      
      if (keyCode === 37) {
        game.player.moveLeft()
      }
      
      if (keyCode === 38) {
        game.player.moveUp()
      }
      
      if (keyCode === 40) {
        game.player.moveDown()
      }

     if (keyCode === 13)  {
        location.reload()
      }
}


