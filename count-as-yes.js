export function countAsAYes(userInput) {
    return userInput.charAt(0).toUpperCase() === 'Y';
}
export function countAsNo(userInput) {
    return userInput.charAt(0).toUpperCase() === 'N';
}