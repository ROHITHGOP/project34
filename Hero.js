class Hero{
    constructor(x,y,width,height){
    var options={
        restitution : 0.8,
        friction:1,
        density:1
    }
     this.image=loadImage("images/Superhero-01.png");
     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
     this.height = height;
     this.width = width;

    }

    display(){
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0, 250, 150);
        pop();
    }
}