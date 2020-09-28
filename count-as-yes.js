export function countAsYes(userInput) {
    return userInput.chartAt(0).toUpperCase() === 'Y';
}