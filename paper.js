class paper {
	constructor(x, y, radius) {
		var options = {
			isStatic: false,
			restitution: 0.3,
			friction: 0.5,
			density: 1.2


		}
		//to update the x and y position of the ball as it moves
		this.x = x;
		this.y = y;
		this.radius = radius
		this.body = Bodies.circle(this.x, this.y, this.radius / 2, options)
		World.add(world, this.body);

	}
	display() {

		var paperpos = this.body.position;

		push()
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill("blue")
		ellipse(0, 0, this.radius, this.radius);
		pop()

	}

}