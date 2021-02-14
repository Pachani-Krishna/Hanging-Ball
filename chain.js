class Chain{
    constructor(body1,point1,offsetX,offsetY){

     this.offsetX = this.offsetX
     this.offsetY = this.offsetY
        
    var option={
     bodyA:body1,
     pointB:point1,
    pointB:{x:this.offsetX,y:this.offsetY}
     //stiffness:0.04,
    // lenth:20   
    }
    this.pointB = point1
    this.chain = Constraint.create(option)
    World.add(world,this.chain)
    }
    display(){

    
     var bodyA = this.chain.bodyA.position;
     var pointB = this.chain.pointB.position;

    strokeWeight(2);

    var Anchor1X=bodyA.x
    var Anchor1Y=bodyA.y

    var Anchor2X=pointB.x+this.offsetX
    var Anchor2Y=pointB.y+this.offsetY

     line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)     
}
}