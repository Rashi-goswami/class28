class Slingshot{
     constructor(bodyA,pointB){

        var options={
            length:10,
            stiffness:0.04,
            bodyA:bodyA,
            pointB:pointB
        
        }
    this.chain=Matter.Constraint.create(options)
    
     World.add(world,this.chain)
     }
    display(){
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.pointB
       push()
       strokeWeight(6)
       stroke("green")
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       pop()
        }
    }
    fly(){
        this.chain.bodyA=null
    }
    
}


