let box = document.getElementById('box');
let player = document.getElementById('player');
let boxWidth = box.offsetWidth;
let boxHeight = box.offsetHeight;

let bullets = [];
let monsters = [];

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 37:
        moveLeft();
        if (player.offsetLeft < 0) {
            player.style.left = 0 + 'px';
            // console.log("end");
        }
            break;
        case 39:
            moveRight();
            if (player.offsetLeft > box.offsetWidth - player.offsetWidth) {
                player.style.left = boxWidth - player.offsetWidth + 'px';
            }
                break;
        case 32:
            createBullet();
            break;
    }
});

class Bullet {
    el;
    
    constructor() {
        this.el = document.createElement('div');

        this.el.classList.add("bullet");
        box.appendChild(this.el);

        this.el.style.backgroundColor = this.color;
        this.el.style.left = (player.offsetLeft+player.offsetWidth/2)+'px';
        this.el.style.top = (player.offsetTop)+'px';
    }

    moveBullet(index) {
        this.el.style.top = (this.el.offsetTop - 20) + 'px';
        if (this.el.offsetTop < 0) {
            box.removeChild(this.el);
            bullets.splice(index, 1);
        }
    }
}

class Monster {
    el;

    constructor() {
        this.el = document.createElement('div');
        this.el.classList.add("monster");
        box.appendChild(this.el);

        this.el.style.left = Math.floor(Math.random() * box.offsetWidth)+'px';
        this.el.style.top = Math.floor(Math.random() * box.offsetHeight/2)+'px';
    }

}

function moveLeft() {
    player.style.left = parseInt(player.offsetLeft) - 10 + 'px';
}

function moveRight() {
    player.style.left = parseInt(player.offsetLeft) + 10 + 'px';
}

function createBullet() {
    let newBullet = new Bullet();
    bullets.push(newBullet);
}

function createMonster() {
    let newMonster = new Monster();
    monsters.push(newMonster);
}
createMonster();

setInterval(function(){
    for(var i=0; i<bullets.length; i++) {
        bullets[i].moveBullet(i);
    }
}, 100);