# JavaScript: Handling Non-Numeric Input in Addition

This repository demonstrates a common error in JavaScript and its solution. The original code attempts to add two values but fails if they're not numbers (other than null).  The solution adds comprehensive type checking to prevent runtime errors and enhance the function's robustness.

## Bug

The `bug.js` file contains the original code with the error. The `foo` function doesn't handle non-numeric inputs correctly which causes an error when it is passed non-number parameters.

## Solution

The `bugSolution.js` file provides a corrected version of the `foo` function. This version explicitly checks if the inputs are numbers using `typeof` before performing the addition, preventing errors when non-numeric values are passed as arguments.