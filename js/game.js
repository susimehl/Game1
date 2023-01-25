class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.backgroundImage
        this.playerImage
        this.obstacles = []
        this.sweetsImage1
        this.sweetsImage
    
    }


preload(){
    this.backgroundImage = loadImage("./assets/background/giffy1-4.gif")
    this.playerImage = loadImage("./assets/player/waechter-20Picture.png")
    this.sweetsImage = loadImage("./assets/sweets/Donut.png")
    this.sweetsImage1 =loadImage("./assets/sweets/pille.png")
}

draw(){
    clear()
    image(this.backgroundImage, 0, 0, width, height, )
    this.player.draw()
    
    if(frameCount % 150 === 0 ){

        this.obstacles.push(new Obstacle(this.sweetsImage1))
    }
    this.obstacles.forEach(function (obstacle){
       obstacle.draw()
    })
    this.obstacles = this.obstacles.filter(obstacle => {
      console.log(this)   

       if(obstacle.collision(this.player)  || obstacle.x < 0 - obstacle.width){
            return false
        }
        else{  
           return true
       }
   })
}
}