import { getInputDirection } from "./input.js";

export const SNAKE_SPEED_PER_SECOND = 5;
export const EXPANSION_RATE = 1;

let newSegments = 0;
const snakeBody = [
    {x: 11, y: 11}
]

export const update = () => {
    addSegments();

    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y; 
}


export const draw = (gameBoard) => {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export const onSnake = (position, ignoreHead = false) => {
    let isOnSnake = snakeBody.some((segment, idx) => {
        if(ignoreHead && idx === 0) return false;
        if(segment.x === position.x && segment.y === position.y) {
            return true;
        }
    })
    return isOnSnake;
}

export const growSnake = () => {
    newSegments += EXPANSION_RATE;
}

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
};

export const getSnakeHead = () => {
    return snakeBody[0];
}

export const snakeIntersection = () => {
    let ignoreHead = true;
    return onSnake(getSnakeHead(), ignoreHead)
}