class Dustbin{
    constructor(x, y,width,height) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.height = height;
        
       
        //World.add(world, this.body);
      }
      display(){
      
        ellipse(50,650,20,20);
        push();
        translate(this.body.position.x, this.body.position.y);
       
        imageMode(CENTER);
        
        pop();
      }
    }