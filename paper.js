class Paper  {
    constructor(x, y, radius){
        var Options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density :1.2
        }
        this.body =Bodies.circle(x, y, radius, Options);
        this.radius= radius;
        World.add(world, this.body);
    }
    display(){
        //There is one problem over here I guess, the circle is not coming or appearing and i have also added 
        //it in the html file
        var pos= this.body.position;
        pos.x= mouseX;
        pos.y=mouseY;
        push();
        ellipseMode(CENTER);
        fill(255);
        ellipse(0,0,this.radius);
        pop();
    }
}