
# JavaScript Basics

---

## ClassList

`classList` is a property of an element that helps to manage its CSS classes. It allows adding, removing, toggling, and checking for classes.

### Methods

| Method       | Description |
|-------------|------------|
| `add()`     | Adds a class to the element. |
| `remove()`  | Removes a class from the element. |
| `toggle()`  | Adds the class if it is not present, removes it if it is. |
| `contains()` | Checks if the class exists in the element. |

### Example

```js
let element = document.querySelector("#box");
element.classList.add("highlight"); // Adds 'highlight' class
element.classList.remove("hidden"); // Removes 'hidden' class
element.classList.toggle("active"); // Toggles 'active' class
console.log(element.classList.contains("highlight")); // Checks if 'highlight' exists
```

---

## Promises

A Promise in JavaScript is used to handle asynchronous operations. It represents a value that may be available now, later, or never.

### States of a Promise

| State       | Description |
|------------|------------|
| `pending`  | The operation is in progress. |
| `fulfilled` | The operation completed successfully. |
| `rejected` | The operation failed. |

### Example

```js
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

myPromise
    .then(result => console.log(result)) // Runs if resolved
    .catch(error => console.log(error)); // Runs if rejected
```

---

---

## Async and Await

`async` and `await` are used to work with Promises in a simpler way.

### Key Points

- `async` makes a function return a Promise.
- `await` pauses the execution until the Promise is resolved.

### Example

```js
async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
}

fetchData();
```

In this example, `await` ensures that `fetch()` and `response.json()` complete before proceeding.
---
