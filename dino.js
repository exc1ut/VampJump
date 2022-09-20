class Dino {
    constructor() {
        this.r = 80;
        this.x = 30;
        this.y = canv.height - this.r;
        this.fillStyle = 'green';
        this.vy = 0;
        this.gravity = 0.3;
        this.image.src = './vampire.png';
        this.jumpAudio = new Audio('jump.wav');
    }
    image = new Image();
    
    jump() {
        this.jumpAudio.play();
        if (this.y == canv.height - this.r) {
            this.vy = -10;
        }
    }
    constrain(num, min, max) {
        const MIN = min || 1;
        const MAX = max || 20;
        const parsed = parseInt(num)
        return Math.min(Math.max(parsed, MIN), MAX)
    }
    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = this.constrain(this.y, 0, canv.height - this.r);
    }
    show() {
        ctx.fillStyle = this.fillStyle;
        ctx.drawImage(this.image, this.x, this.y, this.r, this.r);
    }
}