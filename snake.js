export const SNAKE_SPEED_PER_SECOND = 1;

const snakeBody = [
    {x: 11, y: 11}
]

export const update = () => {
    console.log('update snake');
}


export const draw = (gameBoard) => {
    console.log('draw snake');
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}
