export function generateRandomNumber(numberLength) {
    let number = "";
    for (let i = 0; i < numberLength; i++) {
        let n = Math.floor(Math.random() * 10);
        while (number.includes(n)) {
            n = Math.floor(Math.random() * 10);
        }
        number += n;
    }
    return number;
}