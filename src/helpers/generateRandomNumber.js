export function generateRandomNumber(numberLength) {
    //gerar uma lsita de números aleatórios de acordo com o tamanho passado, e sem repetição, com os números em string
    const numbers = [];
    while (numbers.length < numberLength) {
        const number = Math.floor(Math.random() * 10);
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    return numbers.map((number) => number.toString());
}