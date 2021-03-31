class Bob { 
    constructor(x, y) { 
        var options = { 
        'isStatic': false,
        restitution:1.4,    
        friction:1.1, 
        density:1.2
    }
        this.radius = 20; 
        this.body = Bodies.circle(x, y, 20, options);
            
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
        stroke("black"); 

        fill("pink"); 
        ellipse(0, 0, 35, 35); 
        pop(); 
    }
             };