
# JavaScript Basics

---

## 🔹 Error Handling

Error handling is a way to manage errors in JavaScript so that they do not stop the entire program.

| Method | Description |
|--------|-------------|
| `try`  | Tests a block of code for errors. |
| `catch` | Handles the error if one occurs. |
| `finally` | Runs code after `try` and `catch`, no matter what. |
| `throw` | Creates custom errors. |

### Example:
```js
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error.message);
} finally {
  console.log("This will always run.");
}

```

---

## 🔹 DOM (Document Object Model)

The **DOM** is a structure that represents an HTML document as a tree of objects. JavaScript can use the DOM to modify web pages dynamically.

### Example:

```html
html
CopyEdit
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello World</h1>
    <script>
      document.getElementById("title").innerText = "Changed Text";
    </script>
  </body>
</html>

```

---

## 🔹 `console.log(document)` vs `console.dir(document)`

| Command | Description |
| --- | --- |
| `console.log(document)` | Displays the entire HTML document as a tree. |
| `console.dir(document)` | Displays the document as an object with properties and methods. |

### Example:

```
js
CopyEdit
console.log(document); // Shows HTML structure
console.dir(document); // Shows document as an object

```

---

## 🔹 Element Selectors

Element selectors are used to select HTML elements using JavaScript.

| Selector | Method | Example |
| --- | --- | --- |
| By ID | `document.getElementById(id)` | `document.getElementById("title")` |
| By Class | `document.getElementsByClassName(class)` | `document.getElementsByClassName("box")` |
| By Tag | `document.getElementsByTagName(tag)` | `document.getElementsByTagName("p")` |
| Query Selector | `document.querySelector(css)` | `document.querySelector(".box")` |
| Query Selector All | `document.querySelectorAll(css)` | `document.querySelectorAll("div")` |

### Example:
```
js
CopyEdit
let title = document.getElementById("title");
title.style.color = "red";

```

