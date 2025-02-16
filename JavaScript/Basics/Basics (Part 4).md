
# JavaScript Basics

## For Loop
A `for` loop repeats a block of code **a specific number of times**.

### Syntax:
```js
for (initialization; condition; update) {
    // Code to execute
}

```

### Example:

```
for (let i = 0; i < 5; i++) {
    console.log(i);
}

```

**Output:**

```
0
1
2
3
4

```

| Component | Description |
| --- | --- |
| `let i = 0;` | Initialize loop variable `i` |
| `i < 5;` | Runs as long as `i` is less than `5` |
| `i++` | Increases `i` by `1` in each iteration |

---

## Continue and Break Statements

### Continue Statement

Skips the current iteration and moves to the next.

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skips when i = 3
    }
    console.log(i);
}

```

**Output:**

```
1
2
4
5

```

### Break Statement

Stops the loop immediately when a condition is met.

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stops when i = 3
    }
    console.log(i);
}

```

**Output:**

```
1
2

```

---

## Generating Random Numbers

Formula for a random integer between `min` and `max`:

```
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

```

| Component | Description |
| --- | --- |
| `Math.random()` | Generates a random decimal between 0 and 1 |
| `Math.floor(...)` | Rounds down to the nearest integer |
| `+ min` | Adjusts range to start from `min` |

### Example:

```
let randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(randomNum); // Outputs a number between 1 and 10

```

---

## Functions

A function is a block of code that performs a specific task.

### Syntax:

```
function functionName(parameters) {
    // Code to execute
}

```

### Example:

```
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Sabari"));

```

**Output:**

```
Hello, Sabari

```

Why Use Functions?



Reusability


Clean Code


Reduces Repetition


---

## Variable Scope

Scope determines where a variable can be accessed.

### Types of Scope

| Type | Description |
| --- | --- |
| **Global Scope** | Variable is accessible anywhere in the script. |
| **Local Scope** | Variable is only accessible inside a function or block. |

### Global Scope Example

```
let globalVar = "I am global";
function test() {
    console.log(globalVar);
}
test();
console.log(globalVar);

```

**Output:**

```
I am global
I am global

```

### Local Scope Example

```
function test() {
    let localVar = "I am local";
    console.log(localVar);
}
test();
console.log(localVar); // Error: localVar is not defined

```

---

## Arrays

An array stores multiple values in a single variable.

### Syntax:

```
let arrayName = [value1, value2, value3];

```

### Example:

```
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);
console.log(fruits.length);

```

**Output:**

```
Apple
3

```

### Common Array Methods

| Method | Description |  |
| --- | --- | --- |
| `push(value)` | Adds a value to the end of an array |  |
| `pop()` | Removes the last element from an array |  |
| `shift()` | Removes the first element from an array |  |
| `unshift(value)` | Adds a value to the beginning of an array |  |
| `splice(index, count)` | Removes or replaces elements |  |
| `slice(start, end)` | Returns a portion of the array |  |
| `indexOf(value)` | Finds the index of a value |  |
| `includes(value)` | Checks if an array contains a value |  |

```

```
---
