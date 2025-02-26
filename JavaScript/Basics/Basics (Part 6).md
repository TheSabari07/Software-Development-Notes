
# JavaScript Concepts

---

## 1. Getter and Setter

A **getter** is a method that retrieves (gets) a value from an object.
A **setter** is a method that updates (sets) a value in an object.

### Why use them?
| Feature | Description |
|---------|-------------|
| Encapsulation | Controls access to object properties |
| Validation | Allows validation before updating values |
| Computed Properties | Can return computed values dynamically |

### Example:
```js
const person = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // John Doe
person.fullName = "Alice Smith";
console.log(person.fullName); // Alice Smith

```

---

## 2. Destructuring

**Destructuring** is a way to extract values from arrays or objects into separate variables.

### Why use it?

| Feature | Description |
| --- | --- |
| Clean Code | Makes variable assignments easier |
| Flexibility | Extracts only required values |
| Improves Readability | Avoids repetitive property access |

### Example:

### Destructuring Arrays:

```
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3

```

### Destructuring Objects:

```
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name, age); // Alice 25

```

---

## 3. Nested Objects

A **nested object** is an object inside another object.

### Why use it?

| Feature | Description |
| --- | --- |
| Organizes Data | Groups related data together |
| Real-world Modeling | Represents complex structures like users, addresses, etc. |

### Example:

```
const student = {
  name: "Mark",
  subjects: {
    math: 90,
    science: 85
  }
};

console.log(student.subjects.math); // 90

```

---

## 4. Spread Operator (`...`)

The **spread operator (`...`)** is used to expand an array or object into individual elements.

### Why use it?

| Feature | Description |
| --- | --- |
| Copy Arrays/Objects | Creates a shallow copy |
| Merge Data | Combines arrays/objects easily |
| Pass Arguments | Useful in function calls |

### Example:

### Expanding an Array:

```
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

```

### Merging Arrays:

```
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]

```

### Copying Objects:

```
const person = { name: "Alice", age: 25 };
const newPerson = { ...person, city: "New York" };
console.log(newPerson); // { name: "Alice", age: 25, city: "New York" }

```

---

## 5. Array of Objects

An **array of objects** is a list where each item is an object.

### Why use it?

| Feature | Description |
| --- | --- |
| Stores Multiple Objects | Useful for handling multiple records |
| Iteration | Can be looped through easily |
| Data Management | Works well for APIs, databases, etc. |

### Example:

```
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 }
];

console.log(users[0].name); // John

```

```

```
