const numbers = [1,2,3,4,5,6,7,8,9];
// const part1 = numbers.slice(2,5);
const remove = numbers.splice(2,5,66,78,99,33);
console.log(remove);
console.log(numbers);

const together = numbers.join("-");
console.log(together);