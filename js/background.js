class Background {
    draw(){

        game.backgrounddImages.forEach(function(img){
            img.x -= img.speed
            image(img.src,img.x, 0,width,height)

            if(img.x <= -width) img.x = 0
        })
    }
}