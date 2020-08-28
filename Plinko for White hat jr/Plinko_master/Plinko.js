class Plinko {
        constructor(x, y, radius) {
          var options = {
            isStatic : true,
              'restitution':0.3,
              'friction':0.5,
              'density':1.2
          }
          this.r = radius;
          this.body = Bodies.circle(x, y, this.r, options);
        
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;

          // for (var j = 40; j <= width; j = j + 50){

          //   plinkos.push(new Plinko(j, 75));
          // }

          // for (var j = 15; j <= width-10; j = j + 50){

          //   plinkos.push(new Plinko(j, 175));
          // }

          // if (frameCount%90 === 0){

          //   plinkos.push(new Plinko(random(width/2-10, width/2+10), 10, 10));
          // }

          push();
          translate(pos.x, pos.y);
          rotate(angle);
          ellipseMode(RADIUS);
          fill(255);
          ellipse(0, 0, this.r, this.r);
          pop();
    }
}