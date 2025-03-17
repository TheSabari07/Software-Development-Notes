# **Understanding JavaScript Math Object**

---

## **What is the Math Object?**

- `Math` is a built-in JavaScript object that provides mathematical functions and constants.
- You **do not** need to create an instance of `Math` (it is not a constructor).
- It helps in performing calculations like rounding numbers, finding square roots, and generating random numbers.

### **Common Math Methods**
| Method | Description | Example |
|--------|------------|---------|
| `Math.abs(x)` | Returns the absolute value of `x` | `Math.abs(-5) → 5` |
| `Math.round(x)` | Rounds `x` to the nearest integer | `Math.round(4.7) → 5` |
| `Math.floor(x)` | Rounds `x` **down** to the nearest integer | `Math.floor(4.9) → 4` |
| `Math.ceil(x)` | Rounds `x` **up** to the nearest integer | `Math.ceil(4.1) → 5` |
| `Math.sqrt(x)` | Returns the square root of `x` | `Math.sqrt(25) → 5` |
| `Math.pow(x, y)` | Raises `x` to the power of `y` | `Math.pow(2, 3) → 8` |

---

## **What is `Math.random()`?**

- `Math.random()` is a function that returns a random number between **0 and 1** (excluding `1`).
- Since it always returns a decimal, we often multiply it to get numbers in a specific range.

### **Examples**
| Expression | Possible Output |
|------------|----------------|
| `Math.random()` | `0.3124`, `0.8765`, `0.0452` (Always between `0` and `1`) |
| `Math.random() * 10` | `3.124`, `8.765`, `0.452` (Between `0` and `9.9999`) |
| `Math.floor(Math.random() * 10)` | `0, 1, 2, 3, ..., 9` (Rounded down) |
| `Math.floor(Math.random() * (max - min + 1)) + min;` | Random number **within a range** |

### **Generating a Random Number Between `5` and `10`**
```js
const min = 5;
const max = 10;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
```

---

# **Understanding the `if` Statement in JavaScript**

---

## **What is an `if` Statement?**

- The `if` statement allows a program to make **decisions**.
- It checks a **condition**.
- If the condition is **true**, a block of code runs.
- If the condition is **false**, the block is skipped.

---

## **Syntax of `if` Statement**
```js
if (condition) {
    // Code to execute if condition is true
}
```
## **Example : Checking Even or Odd Number**

```js

let num = 7;

if (num % 2 === 0) {
    console.log("Even number");
}

```

**Output:**

(There is no output because `7 % 2` is not `0`, so the condition is `false`).

# **Summary**

| Concept | Explanation |
| --- | --- |
| `if` Statement | Executes code only when a condition is `true`. |
| Syntax | `if (condition) { code }` |
| Common Use Cases | Validation, decision-making, game logic, and security checks. |
| Why Use It? | To control the flow of a program based on conditions. |

---

# JavaScript Basics (Sec 2)

---

## Checked Property

The `checked` property is used with checkboxes and radio buttons to determine if they are selected.

### Syntax:
```js
document.getElementById("myCheckbox").checked;
```

### Example:

```html
<input type="checkbox" id="myCheckbox">
<button onclick="checkStatus()">Check</button>

<script>
function checkStatus() {
    let isChecked = document.getElementById("myCheckbox").checked;
    console.log("Checked:", isChecked);
}
</script>
```

---

## Ternary Operator (`? :`)

A shortcut for `if-else`, used when there is only **one condition to check**.

### Syntax:
```js
condition ? value_if_true : value_if_false;
```

### Example:
```js
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // Output: Adult
```

### When to use instead of `if-else`?

- When you have a simple condition.
- When you need short and clean code.

---

## Switch Statement

Used as an alternative to multiple `if-else` conditions.

### Syntax:
```js
switch(expression) {
    case value1:
        // Code to execute
        break;
    case value2:
        // Code to execute
        break;
    default:
        // Code if no cases match
}
```

### Example:
```js
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
```

---

## String Methods

String methods help manipulate text in JavaScript.

| Method | Description | Example |
| --- | --- | --- |
| `length` | Returns the length of a string | `"hello".length // 5` |
| `toUpperCase()` | Converts to uppercase | `"hello".toUpperCase() // "HELLO"` |
| `toLowerCase()` | Converts to lowercase | `"HELLO".toLowerCase() // "hello"` |
| `trim()` | Removes spaces from both sides | `" hello ".trim() // "hello"` |
| `replace()` | Replaces part of a string | `"hello".replace("h", "y") // "yello"` |
| `split()` | Splits a string into an array | `"a,b,c".split(",") // ["a", "b", "c"]` |

---

## String Slicing

Extracting a portion of a string.

### Syntax:
```js
string.slice(start, end);
```

### Example:
```js
let text = "JavaScript";
console.log(text.slice(0, 4));  // Output: Java
console.log(text.slice(-6));    // Output: Script
```

---

## Method Chaining

Calling multiple methods on a single value.

### Example:
```js
let result = "  hello world  ".trim().toUpperCase();
console.log(result); // Output: "HELLO WORLD"
```

---

## Logical Operators

Used for boolean logic.

| Operator | Name | Example | Output |
| --- | --- | --- | --- |
| `&&` | AND | `true && false` | `false` |
|  | OR | `true OR false` | `true` |
| `!` | NOT | `!true` | `false` |


### OR operator "||"
---

## Comparison Operators

| Operator | Name | Example | Output |
| --- | --- | --- | --- |
| `=` | Assignment | `a = 5` | Assigns 5 to `a` |
| `==` | Equal to | `5 == "5"` | `true` (only checks value) |
| `===` | Strictly equal | `5 === "5"` | `false` (checks value and type) |
| `!=` | Not equal | `5 != "5"` | `false` |
| `!==` | Strictly not equal | `5 !== "5"` | `true` |

### Difference between `==` and `===`

- `==` compares only values, allowing type conversion.
- `===` compares both values and types, without conversion.

Example:
```js
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

---

## While Loop

Repeats a block of code while a condition is `true`.

### Syntax:
```js
while (condition) {
    // Code to execute
}
```

### Example:
```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

This prints numbers from `0` to `4`. 

---



