
class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y,  options);
        
       
       
        World.add(world, this.body);
      }
      display(){
        ellipse(50,650,20,20)
        ellipse.shapeColor="white";
        
        push();
       
        translate(this.body.position.x, this.body.position.y);
       
        imageMode(CENTER);
       
        pop();
      }
    }