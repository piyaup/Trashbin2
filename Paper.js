class Paper{
    constructor(x,y,r){
        var options = {
           'restitution':0.3,
            'friction':0.2,
            'density':1.2,
            //'scale':0.5
            
        }
        this.image = loadImage("sprites/paper.png");
       // this.image.scale = 0.0004;
        this.body=Matter.Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add (world,this.body)
    }      
  display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push ();
     translate(pos.x,pos.y);
     imageMode(CENTER);
     image(this.image, 90, 90,90,90);
     rotate(angle);
     fill (255);
     angleMode(RADIANS);
    //  circle (this.x,this.y);
    //  ellipseMode(CENTER);
    //  ellipse(this.x, this.y);
     pop (); 

  }  
} 

