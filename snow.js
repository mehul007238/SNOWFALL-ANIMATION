class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
         this.x=x;
         this.y=y;
         this.image = loadImage("snow4.webp")
    }
    display() {
        push();
        imageMode(CENTER);
        image(this.image,0,0, 50, 50);
        pop();
    }

};
