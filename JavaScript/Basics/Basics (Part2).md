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


# JavaScript Basics

---

## 1. `window.prompt()` – User Input Dialog

### What is `window.prompt()`?

`window.prompt()` displays a popup box that asks the user for input.

- The value entered is always a **string**.
- The user must click **OK** or **Cancel** to continue.

### Example:

```jsx
let userName = window.prompt("Enter your name:");
console.log("Hello, " + userName);

```

### Behavior:

| User Action | Output |
| --- | --- |
| Enters "John" | `Hello, John` |
| Clicks Cancel | `userName` will be `null` |

---

## 2. `.value` – Access or Modify Input Field Values

### What is `.value`?

`.value` is used to get or set the value of an HTML input field.

### Example 1: Reading Input Value

```html
<input type="text" id="nameInput" value="Default Name">
<script>
  let name = document.getElementById("nameInput").value;
  console.log(name); // Output: "Default Name"
</script>

```

### Example 2: Changing Input Value

```html
<input type="text" id="nameInput">
<button onclick="changeValue()">Set Name</button>
<script>
  function changeValue() {
    document.getElementById("nameInput").value = "Updated Name";
  }
</script>

```

**Behavior:** When the button is clicked, the text field value will change to `"Updated Name"`.

---

## 3. Type Conversion

### What is Type Conversion?

Type conversion changes a value from one data type to another.

- JavaScript automatically converts types in some cases (**implicit conversion**).
- We can also do it manually (**explicit conversion**).

### Why is Type Conversion Important?

- Prevents unexpected errors when working with different data types.
- Ensures that operations like mathematical calculations work correctly.

### Examples of Type Conversion:

| Function | Converts To | Example | Output |
| --- | --- | --- | --- |
| `Number(value)` | Number | `Number("42")` | `42` |
| `String(value)` | String | `String(100)` | `"100"` |
| `Boolean(value)` | Boolean | `Boolean(1)` | `true` |
| `parseInt(value)` | Integer | `parseInt("20px")` | `20` |
| `parseFloat(value)` | Decimal Number | `parseFloat("10.5")` | `10.5` |

### Example 1: String to Number

```jsx
let str = "123";
let num = Number(str);
console.log(num, typeof num); // Output: 123 "number"

```

### Example 2: Number to String

```jsx
let num = 50;
let str = String(num);
console.log(str, typeof str); // Output: "50" "string"

```

### Example 3: Boolean Conversion

```jsx
console.log(Boolean(0));    // Output: false
console.log(Boolean(1));    // Output: true
console.log(Boolean(""));   // Output: false
console.log(Boolean("Hi")); // Output: true

```

---

## 4. `let`, `const`, and `var` – Declaring Variables

### Difference Between `let`, `const`, and `var`

| Feature | `let` | `const` | `var` |
| --- | --- | --- | --- |
| Can be reassigned? | Yes | No | Yes |
| Must be initialized? | No | Yes | No |
| Block-scoped? | Yes | Yes | No (function-scoped) |
| Hoisted? | Yes (not initialized) | Yes (not initialized) | Yes (initialized with `undefined`) |

### 1. `let` – Used for Changeable Variables

```jsx
let age = 25;
age = 26; // Allowed
console.log(age); // Output: 26

```

### 2. `const` – Used for Fixed Values

```jsx
const PI = 3.1415;
PI = 3.14; // Error: Assignment to constant variable

```

### Exception: Objects and arrays declared with `const` can be modified.

```jsx
const person = { name: "Alice" };
person.name = "Bob"; // Allowed
console.log(person.name); // Output: Bob

```

### 3. `var` – Older Way to Declare Variables

```jsx
var city = "New York";
var city = "London"; // Allowed (but not recommended)
console.log(city); // Output: London

```

### Issue with `var`:

```jsx
if (true) {
  var test = "Hello";
}
console.log(test); // Works (but should be block-scoped)

```

---

## Conclusion

- Use `let` when the value needs to change.
- Use `const` when the value should not change.
- Avoid `var`, as it can cause unexpected behavior.
---
