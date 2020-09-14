import { getInputDirection } from "./input.js";

export const SNAKE_SPEED_PER_SECOND = 5;

const snakeBody = [
    {x: 11, y: 11},
    {x: 12, y: 11},
    {x: 13, y: 11}

]

export const update = () => {
    console.log('update snake');
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y; 
}


export const draw = (gameBoard) => {
    console.log('draw snake');
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}
