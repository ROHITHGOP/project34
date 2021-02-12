class Block{
    constructor(x,y,width,height){
    var options={
        restitution:0.8,
        friction:1,
        density:20,
    }
     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
     this.height = height;
     this.width = width;

    }

    display(){
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        fill("red");
        rect(0, 0, this.width, this.height);
        rotate(angle);
        pop();
    }

}