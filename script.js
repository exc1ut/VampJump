let canv = document.getElementById('canvas');
canv.width = 700;
canv.height = 300;

ctx = canv.getContext('2d');

let dino = new Dino();
let trees = [];
let img = new Image();
img.src = './vbg.png';
var audio = new Audio('audio.mp3');

audio.play();
const checkCollision = (p1x, p1y, r1, p2x, p2y, r2) => ((r1 + r2) ** 2 > (p1x - p2x) ** 2 + (p1y - p2y) ** 2)

let count = 0;
let score = 0;
window.addEventListener('keypress', (e) => {
    if (e.key == ' ') {
        dino.jump();
    }
})

let draw = () => {
    ctx.clearRect(0, 0, canv.width, canv.height);
    if (count == -(canv.width)) {
        count = 0
        ctx.drawImage(img, count--, 0, canv.width, canv.height);
        ctx.drawImage(img, count + canv.width, 0, canv.width, canv.height);
    }
    else {
        ctx.drawImage(img, count--, 0, canv.width, canv.height);
        ctx.drawImage(img, count + canv.width, 0, canv.width, canv.height);
    }
    if (Math.floor((Math.random() * 50) + 1) === 1) {
        console.log(trees[trees.length - 1]);
        if (trees.length == 0 || canv.width - trees[trees.length - 1].x > 200)
            trees.push(new Tree());
            
    }

    for (i in trees) {
        let collide = checkCollision(dino.x, dino.y, dino.r / 2, trees[i].x, trees[i].y, trees[i].r / 2);
        trees[i].move();
        trees[i].show();
        if (collide) {
            ctx.font = "bold 35px Arial";
            ctx.fillStyle = '#8a0303'
            ctx.fillText(`YOU LOSE YOUR SCROE:${score++}`, canv.width / 2 - 250, canv.height / 2);
            clearInterval(frames);
        }


    }
    ctx.font = "20px Arial";
    ctx.fillStyle = 'lightgray'
    ctx.fillText(`YOUR SCROE:${score++}`, canv.width - 200, 40);
    dino.move();
    dino.show();
}

let frames = setInterval(draw, 10)
