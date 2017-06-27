// Factorial (!)

function factorial(num) {
// 2 or 1 both work
  if(num === 2) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(4));