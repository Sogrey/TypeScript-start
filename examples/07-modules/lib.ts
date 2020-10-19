export function printString(str: string): void {
    console.log(`打印输出 ${str}`);
}

let arr = [1, 2, 3, 4];
let newArr = arr.filter( item => item % 2 !== 0);
console.log(newArr); // [1, 3];