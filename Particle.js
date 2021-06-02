class Particle{

constructor(){
    var options={
        restitution: 1,
        friction: 0,
        isStatic:false
    }

    this.r=10;
    this.body = Bodies.circle(random(0,800),20,this.r,options)
    this.color=color(random(0,255) , random(0,255) , random(255));
    World.add(world,this.body);

}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x , pos.y);
    rotate(angle);
    rotate(angle);
    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(0,0,10,10);
    pop()

}












}