import { SNAKE_SPEED_PER_SECOND, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood} from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
let gameOver = false;
// Game loop.
function main(currentTime) {
    if(gameOver) {
        if(confirm('You lose. Press Ok to continue')) {
            window.location = '/';
        } else {
            return;
        }
    }
    requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    let howOftenToRefresh = 1 / SNAKE_SPEED_PER_SECOND; // if snake speed is 2, refesh 2 times in a second. (refresh snake speed times a second)

    // Don't update/draw when secondsSinceLastRender is less than SNAKE_SPEED_PER_SECOND.
    if(secondsSinceLastRender < howOftenToRefresh) {
        return;
    }

    lastRenderTime = currentTime;

    update();
    draw();
}

requestAnimationFrame(main);


const update = () => {
    updateSnake();
    updateFood();
    checkDeath();
}


const draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}