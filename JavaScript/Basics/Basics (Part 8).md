
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

