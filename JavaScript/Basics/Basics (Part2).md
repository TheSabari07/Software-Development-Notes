## JavaScript Basics for Beginners

---

### 1. `console.log()` – Print to Console

- Displays messages in the browser's console (useful for debugging).
- Example:

```js
console.log("Hello, World!");
```

- Open the **browser console** (F12 → Console tab) to see the output.

---

### 2. `window.alert()` – Show Popup Message

- Displays a **popup box** with a message.
- Example:

```js
window.alert("Welcome to my website!");
```

- The user must **click "OK"** to continue.

---

### 3. `.textContent` – Change Text Inside an Element

- Used to **get or change text** inside an HTML tag.
- Example:

```js
document.getElementById("demo").textContent = "Hello, JavaScript!";
```

- Changes the text of an element with **id="demo"**.

---

### 4. `document.getElementById()` – Select an Element by ID

- Finds an **HTML element** using its `id`.
- Example:

```js
let myElement = document.getElementById("demo");
```

- Used to **change, hide, or modify elements** in JavaScript.

---

## JavaScript Variables – Store Data

### What is a variable?

- A **container** that stores a value.
- It can be **numbers, text, or other data**.

| Syntax | Description |
|--------|-------------|
| `let x;` | Declare a variable |
| `x = 10;` | Assign a value |
| `let y = "Hello!";` | Declare & assign together |

---

### Template Literals – Insert Variables into Strings

- Use **backticks (`) and ${}`** to insert variables into a string.

```js
let name = "Sabari";
console.log(`Hello, ${name}!`);
```

**Output:** `"Hello, Sabari!"`

---

## `typeof` – Check Data Type

- `typeof` tells you the **type of value** stored in a variable.

```js
let num = 10;
console.log(typeof num); // "number"

let text = "Hello";
console.log(typeof text); // "string"
```

---

## Strings – Text in JavaScript

- A **string** is a series of characters inside **quotes** (`""` or `''`).
- Example:

```js
let message = "Hello, World!";
console.log(message);
```

- Strings can be **joined** using `+`:

```js
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);
```

---

## Boolean – True or False

- A **Boolean** can only have two values: `true` or `false`.

```js
let isJavaScriptFun = true;
console.log(isJavaScriptFun); // true
```

- Used in **conditions**:

```js
let age = 18;
console.log(age >= 18); // true
```

---

## Operators

### Arithmetic Operations

| Operator | Description |
|----------|-------------|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulus (Remainder) |
| `**` | Exponentiation (Power) |

Example:

```js
let a = 10;
let b = 2;
console.log(a + b); // 12
console.log(a - b); // 8
console.log(a * b); // 20
console.log(a / b); // 5
console.log(a % b); // 0
console.log(a ** b); // 100 (10^2)
```

---

### Augmented Assignment Operators

| Operator | Shorter way for |
|----------|-----------------|
| `+=` | `x = x + 5` |
| `-=` | `x = x - 5` |
| `*=` | `x = x * 5` |
| `/=` | `x = x / 5` |

Example:

```js
let x = 10;
x += 5; // 15
x -= 2; // 13
x *= 2; // 26
x /= 2; // 13
```

---

### Operator Precedence (Order of Execution)

- **Multiplication and Division** come before **Addition and Subtraction**.
- Use **parentheses `()`** to control execution order.

```js
let result = 10 + 5 * 2;
console.log(result); // 20 (Multiplication first)

let result2 = (10 + 5) * 2;
console.log(result2); // 30 (Parentheses first)
```

---
