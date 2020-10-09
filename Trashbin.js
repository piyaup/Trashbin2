class Trashbin{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.image = loadImage("sprites/dustbin.png");
        this.body= Bodies.rectangle(x,y,40,50,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, 650, 475,200,220);
        rectMode(CENTER);
        fill (255);
      rect (pos.x,pos.y,this.width,this.height); 
    }
}