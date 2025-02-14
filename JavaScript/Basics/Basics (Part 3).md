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

