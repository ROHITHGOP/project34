class Fly {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
             length:10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.pointB = pointB;
    }
    fly () {
        this.chain.bodyA=null;
    }
    display(){
        if(this.chain.bodyA){
            
            var PointA = this.chain.bodyA.position;
            var PointB = this.chain.pointB;
            push ();
            strokeWeight(0);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
            pop ();
        }
    }
}