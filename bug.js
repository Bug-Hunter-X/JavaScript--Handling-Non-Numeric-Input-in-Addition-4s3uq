function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This handles null values
  }
  return a + b; // This causes an error if a or b is not a number
}