class Tree {
    constructor(){
        this.r = 50
        this.x = canv.width;
        this.y = canv.height - this.r - 20;
        this.vx = 4;
        this.image.src = './enemy.png';
    }
    image = new Image();
    move(){
        this.x -= this.vx;
    }
    show(){
        ctx.drawImage(this.image,this.x,this.y,this.r,this.r);
    }
}