import { SNAKE_SPEED_PER_SECOND, update as updateSnake, draw as drawSnake } from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
// Game loop.
function main(currentTime) {
    requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    let howOftenToRefresh = 1 / SNAKE_SPEED_PER_SECOND; // if snake speed is 2, refesh 2 times in a second. (refresh snake speed times a second)

    // Don't update/draw when secondsSinceLastRender is less than SNAKE_SPEED_PER_SECOND.
    if(secondsSinceLastRender < howOftenToRefresh) {
        return;
    }

    lastRenderTime = currentTime;
    console.log(secondsSinceLastRender, howOftenToRefresh);

    update();
    draw();
}

requestAnimationFrame(main);


const update = () => {
    updateSnake(gameBoard);
}


const draw = () => {
    drawSnake(gameBoard);
}