function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}
const increment = outer();
increment(); 
increment(); 
increment();
console.log(increment);
