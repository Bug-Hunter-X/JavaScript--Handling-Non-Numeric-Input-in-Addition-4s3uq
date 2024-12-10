function foo(a, b) {
  if (a === null || b === null) {
    return 0;
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or handle it in another way, throw an error, etc.
  }
  return a + b;
}
console.log(foo(5, 3)); // 8
console.log(foo(null, 5)); // 0
console.log(foo('hello', 5)); // NaN
console.log(foo(5, 'world')); // NaN