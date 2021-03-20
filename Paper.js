class Paper{
    constructor(x,y,radius){

        var options={
            restitution:0,
            friction:0,
            density:1.2
        }

        
        this.radius=radius;
        this.x= x;
        this.y = y;
        this.image = loadImage("images/paper.png");
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle; 


        push();

        
        rotate(angle);
        translate(pos.x,pos.y);
        imageMode(CENTER);  
           
        image(this.image,0,0,this.radius,this.radius);


        pop();


       
    }
}