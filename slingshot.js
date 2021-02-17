class Slingshot {
constructor(bodyA,pointB){
   //these are the properties while creating constraint
    var options={
     bodyA:bodyA,
     pointB:pointB,
     length:10,
     stiffness:0.04
    }
    this.pointB = pointB;
    //creating Constraint here
    this.slingshot = Constraint.create(options)
    World.add(world, this.slingshot);
}
fly(){
    this.slingshot.bodyA = null;
}
display(){
    if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        //a line is visible to show connection between bodyA and pointB 
        line(pointA.x,pointA.y,pointB.x,pointB.y);   
    }
 

}
}