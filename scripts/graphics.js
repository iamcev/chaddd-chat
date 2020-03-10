function updateSize () {
	canvas.width = innerWidth * devicePixelRatio;
	canvas.height = innerHeight * devicePixelRatio;
	canvas.style.width = innerWidth + 'px';
	canvas.style.height = innerHeight + 'px';
}
updateSize();
window.addEventListener('resize', updateSize);


function render() {
	var t = performance.now();
	deltaTime = t - lastT;
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
	
	for (var i = 0; i < players.length; i++) {
		ctx.beginPath();
		ctx.arc(players[i].x * devicePixelRatio, players[i].y * devicePixelRatio, 30 * devicePixelRatio, 0, 2 * Math.PI);
		ctx.stroke();
	}
	
	if (input.keys.w) {
		me.y -= speed * deltaTime;
	}
	if (input.keys.a) {
		me.x -= speed * deltaTime;
	}
	if (input.keys.s) {
		me.y += speed * deltaTime;
	}
	if (input.keys.d) {
		me.x += speed * deltaTime;
	}
	
	requestAnimationFrame(render);
	
	lastT = t;
}

var lastT = performance.now();

render();