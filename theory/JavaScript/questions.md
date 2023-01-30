* Some JavaScript interview questions *

1. What is the difference between VAR and LET?
- `let` has block scope, which means it's gonna be garbage collected at the end of the block it's defined in. `var` instead has function scope which means it dies at the end of the function definition.
- `var` gets hoisted, `let` does not.
(check hoisted example)

2. What is the difference between == and ===
 - `==` compares values `===` compares values and types.
 The interpreter converts the value on the right to the type of the value on the left, and so string == number becomes string == string, and this is why is true.
 The stricter === instead does not do that, and always considers operands of different types to be different.
 (check comparison operator example)

3. What is the difference between `let` and `const`
 - `const` does not allow value and type re-assignment
 - `let` allows both
