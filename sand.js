class Sand{
 constructor(x,y){   
var sand_option = {
restitution:1.3,
friction:5,
density:6    
}    
sand = Bodies.circle(x,y,10,sand_option)
World.add(world,sand)
 }

disply(){
ellipseMode(RADIUS)
fill ("brown")
strokeWeight(5)
stroke("red")
ellipse(sand.position.x,sand.position.y,20)    
}
}