const myCanvas =document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const SIZE = 20;

const square = {
	x: 0,
	y: 0
};

setInterval(draw, 1000); //1000ms = 1s

function draw() {
	drawObject(square);
	square.x += SIZE;
}

function drawObject(obj) {
	context.fillRect(obj.x, obj.y, SIZE, SIZE);
}

// 'keypress' don't activate arrows keys
document.addEventListener('keydown', moveSnake);

function moveSnake(event) {
	switch (event.key) {
		case 'ArrowUp':
			console.log('Move up');
			break;
		case 'ArrowDown':
			console.log('Move down');
			break;
		case 'ArrowLeft':
			console.log('Move left');
			break;
		case 'ArrowRight':
			console.log('Move right');
			break;
	}
}