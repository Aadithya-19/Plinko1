class Particle {
    
    constructor(x, y, radius) {
      var options = {
        
          'restitution':0.3,
      }
      this.r = radius;
      this.body = Bodies.circle(x, y, this.r, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);
    }
    display(){  
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      fill(this.color);
      ellipse(0, 0, 10, 10);
      pop();

      
}
}