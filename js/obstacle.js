class Obstacle {
    constructor(image){
        this.image = image
        this.x = width 
        this.y = (Math.random() * height) / 2.5
        this.width = 70
        this.height = 70
        this.velocity = random(2,5)
    
    }  

    draw(){ 
        this.x -= this.velocity

        //Rotation
        //frameRate(0);
        translate(this.x,this.y);
        rotate(this.y / 100 * PI / 2, this.x / 100 *PI);
        //rect(-6,-6,22,22);

        image(this.image, this.x, this.y,this.width,this.height)
  
    }
    
    collision(playerInfo){
        let obstacleX = this.x + this.width / 2
        let obstacleY = this.y + this.height / 2

        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2

        console.log(obstacleX,obstacleY,playerX,playerY)

        if(dist(obstacleX, obstacleY, playerX, playerY) < 50){
            playerInfo.score += 100

            console.log("collision")
            return true
        }

        else {
            
            document.querySelector("#score span").innerText = playerInfo.score
            return false
        }
    }
}