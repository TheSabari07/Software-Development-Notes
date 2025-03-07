
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

# 🔹 DOM Navigation in JavaScript  

---

## What is DOM Navigation?  

DOM navigation allows JavaScript to move through the **HTML document tree** and access different elements. It helps in selecting, modifying, and traversing elements dynamically.

---

## 🔹 Parent, Child, and Sibling Elements  

| Property | Description | Example |
|----------|-------------|---------|
| `parentNode` | Gets the **parent** of an element. | `element.parentNode` |
| `childNodes` | Returns a **NodeList** of all child nodes (including text, comments). | `element.childNodes` |
| `children` | Returns a **collection of child elements** (ignores text, comments). | `element.children` |
| `firstChild` | Gets the **first child** (includes text, comments). | `element.firstChild` |
| `firstElementChild` | Gets the **first child element** (ignores text, comments). | `element.firstElementChild` |
| `lastChild` | Gets the **last child** (includes text, comments). | `element.lastChild` |
| `lastElementChild` | Gets the **last child element** (ignores text, comments). | `element.lastElementChild` |
| `nextSibling` | Gets the **next node** (can be text or comment). | `element.nextSibling` |
| `nextElementSibling` | Gets the **next element** (ignores text, comments). | `element.nextElementSibling` |
| `previousSibling` | Gets the **previous node** (can be text or comment). | `element.previousSibling` |
| `previousElementSibling` | Gets the **previous element** (ignores text, comments). | `element.previousElementSibling` |

---

## 🔹 Example: Navigating the DOM  

### Sample HTML:
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="container">
      <p>First paragraph</p>
      <p id="second">Second paragraph</p>
      <p>Third paragraph</p>
    </div>
    <script>
      let secondPara = document.getElementById("second");

      console.log(secondPara.parentNode); // Gets the parent <div>
      console.log(secondPara.previousElementSibling); // Gets first <p>
      console.log(secondPara.nextElementSibling); // Gets third <p>
    </script>
  </body>
</html>

```
---


# JavaScript Events and NodeList

## Mouse Events

Mouse events are actions triggered by the user's mouse actions.
These events help detect when a user clicks, moves, or interacts with a webpage using a mouse.

### Common Mouse Events

| Event | Description |
|-------|------------|
| `click` | Triggered when a user clicks an element |
| `dblclick` | Triggered when a user double-clicks an element |
| `mousedown` | Triggered when the mouse button is pressed |
| `mouseup` | Triggered when the mouse button is released |
| `mousemove` | Triggered when the mouse moves over an element |
| `mouseenter` | Triggered when the mouse enters an element |
| `mouseleave` | Triggered when the mouse leaves an element |

### Example

```js
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});
```

---

## Key Events

Key events detect when a user presses or releases a key on the keyboard.

These events are useful for handling user input.

### Common Key Events

| Event | Description |
| --- | --- |
| `keydown` | Triggered when a key is pressed |
| `keyup` | Triggered when a key is released |
| `keypress` | Triggered when a key is pressed and released (deprecated) |

### Example

```
js
CopyEdit
document.addEventListener("keydown", function(event) {
    console.log("Key Pressed: " + event.key);
});

```

---

## Hide/Show HTML Elements

We can use JavaScript to hide or show elements dynamically.

### Example

```html
html
CopyEdit
<button onclick="hideElement()">Hide</button>
<button onclick="showElement()">Show</button>
<p id="text">This is a paragraph.</p>

<script>
function hideElement() {
    document.getElementById("text").style.display = "none";
}

function showElement() {
    document.getElementById("text").style.display = "block";
}
</script>

```

---
