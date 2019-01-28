const myCanvas = document.getElementById('myCanvas');
const context = myCanvas.getContext('2d');

const SIZE = 20;

const head = {
    x: 0,
    y: 0
};
let food = null; // x: y:

let dx = 0;
let dy = 0;

setInterval(main, 100); // 1000ms = 1s

function main() { // Logic
    update(); // update variables
    draw(); // draw game objects
}

function update() {
    // Update coordinates of the snake's head
    head.x += dx;
    head.y += dy;

    // Detect if snake has eaten food
    if (food && head.x === food.x && head.y === food.y) {
        food = null;
        // Increase the size of the snake
    }

    // Generate food if it doesn't already exists
    if (!food) {
        food = {
            x: getRandomX(),
            y: getRandomY()
        };
    }
}

function getRandomX() {
    // 0, 20, 40, ..., 380
    // 0, 1, 2, 3, ..., 20  x2
    return 20 * parseInt(Math.random() * 20);
}

function getRandomY() {
    // 0, 20, 40, ..., 440
    // 0, 1, 2, 3, ..., 22 x2
    return 20 * parseInt(Math.random() * 22);
}

function draw() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, myCanvas.width, myCanvas.height); // Clear context
    drawObject(head, 'lime');
    drawObject(food, 'white');
}

function drawObject(obj, color) {
    context.fillStyle = color;
    context.fillRect(obj.x, obj.y, SIZE, SIZE);
}

// 'keypress' don't activate arrows keys
document.addEventListener('keydown', moveSnake);

function moveSnake(event) {
    switch (event.key) {
        case 'ArrowUp':
            console.log('Move up');
            dx = 0;
            dy = -SIZE;
            break;
        case 'ArrowDown':
            console.log('Move down');
            dx = 0;
            dy = SIZE;
            break;
        case 'ArrowLeft':
            console.log('Move left');
            dx = -SIZE;
            dy = 0;
            break;
        case 'ArrowRight':
            console.log('Move right');
            dx = SIZE;
            dy = 0;
            break;
    }
}