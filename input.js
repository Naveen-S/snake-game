let inputDirection = { x: 0, y: 0};
let previousDirection = { x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowUp': {
            // If previous direction was up/down, you can't go up/down again. You only have right/left option.
            if(previousDirection.y !== 0) return;
            inputDirection = { x: 0, y: -1}
            break;
        }
        case 'ArrowDown': {
            if(previousDirection.y !== 0) return;
            inputDirection = { x: 0, y: 1}
            break;
        }
        case 'ArrowRight': {
            if(previousDirection.x !== 0) return;
            inputDirection = { x: 1, y: 0}
            break;
        }
        case 'ArrowLeft': {
            if(previousDirection.x !== 0) return;
            inputDirection = { x: -1, y: 0}
            break;
        }
    }
})
export const getInputDirection = () => {
    // Previous direction to track if snake doesn't move 180 deg, ie if its moving up it can't immediately move down, similarly if its moving right it can't immediately move left. 
    previousDirection = inputDirection;
    return inputDirection;
}