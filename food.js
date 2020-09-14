import {onSnake, growSnake} from './snake.js';
import { getRandomGridPosition } from './grid.js';

let food = {
    x: 1, y: 1
}
export const update = () => {
    // If snake is over food 
    // 1. increase snake body
    // 2. place food at a different place
    if(onSnake(food)) {
        growSnake();
        placeFood();
        // food = {x: 10, y: 20}
    }
}


export const draw = (gameBoard) => {
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
}

export const placeFood = () => {
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = getRandomGridPosition();
    }
    food = newFoodPosition;
}