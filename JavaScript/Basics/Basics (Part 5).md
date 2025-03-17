### JavaScript Concepts

---

### 1. **JavaScript Object**

An **object** is a collection of key-value pairs. It is a way to store multiple related data items in a single structure.

### Example:

```jsx
javascript
CopyEdit
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};
person.greet(); // Output: Hello, John

```

**Use Case:** Objects are used to represent real-world entities like a person, car, or product.

---

### 2. **The `this` Keyword**

The `this` keyword refers to the current object or context in which a function is executed.

### Example:

```jsx
javascript
CopyEdit
const person = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};
person.greet(); // Output: Hello, John

```

**Use Case:** `this` is often used within object methods to access or manipulate object properties.

### Why `this` doesn’t work in Arrow Functions:

In an arrow function, `this` is not bound to the function itself. Instead, it takes the value of `this` from the surrounding context.

### Example:

```jsx
javascript
CopyEdit
const person = {
  name: 'John',
  greet: () => {
    console.log('Hello, ' + this.name); // `this` refers to the global object
  }
};
person.greet(); // Output: Hello, undefined (this is global object)

```

---

### 3. **Constructor**

A **constructor** is a special function used to create and initialize objects created within a class. It is typically used when creating an instance of a class.

### Example:

```jsx
javascript
CopyEdit
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const john = new Person('John', 30);
console.log(john.name); // Output: John

```

---

### 4. **The `new` Keyword**

The `new` keyword is used to create an instance of a class or constructor function. It allocates memory and sets up the object with properties and methods.

### Example:

```jsx
javascript
CopyEdit
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.brand); // Output: Toyota

```

---

### 5. **Hoisting**

**Hoisting** is JavaScript’s default behavior of moving declarations to the top of the current scope before code execution. This applies to variables and functions.

### Example:

```jsx
javascript
CopyEdit
console.log(x); // Output: undefined (declaration is hoisted)
var x = 5;
console.log(x); // Output: 5

```

**Note:** Only declarations are hoisted, not initializations.

---

### 6. **Classes**

A **class** is a blueprint for creating objects with shared properties and methods. It is syntactic sugar over constructor functions.

### Example:

```jsx
javascript
CopyEdit
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a sound');
  }
}
const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a sound

```

**Use Case:** Classes allow you to create multiple instances with shared behavior.

---

### 7. **`toFixed()` Method**

The `toFixed()` method formats a number using fixed-point notation, rounding it to a specified number of decimal places.

### Example:

```jsx
javascript
CopyEdit
const num = 12.34567;
console.log(num.toFixed(2)); // Output: 12.35

```

**Use Case:** Used when displaying numbers in a consistent format (e.g., for currency).

---

### 8. **Static Keyword**

The **`static`** keyword is used to define methods that are called on the class itself rather than instances of the class.

### Example:

```jsx
javascript
CopyEdit
class MathUtility {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtility.add(2, 3)); // Output: 5

```

**Use Case:** Static methods are used for utility functions that don’t need object instances.

---

### 9. **Inheritance**

**Inheritance** allows one class to inherit properties and methods from another class. The subclass can extend the functionality of the superclass.

### Example:

```jsx
javascript
CopyEdit
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}
class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}
const dog = new Dog();
dog.speak(); // Output: Dog barks

```

**Use Case:** Used to create hierarchical relationships between classes.

---

### 10. **`super` Keyword**

The **`super`** keyword is used to call methods or access properties from a parent class.

### Example:

```jsx
javascript
CopyEdit
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}
class Dog extends Animal {
  speak() {
    super.speak(); // Calling parent class method
    console.log('Dog barks');
  }
}
const dog = new Dog();
dog.speak();
// Output:
// Animal makes a sound
// Dog barks

```

**Use Case:** `super` is used when you need to call or override methods from the parent class.

---

### Summary Table

| Concept | Description |
| --- | --- |
| **Object** | Collection of key-value pairs. |
| **this** | Refers to the current object or context. |
| **Constructor** | A special function to initialize objects created with a class. |
| **new** | Used to create an instance of a class or constructor function. |
| **Hoisting** | JavaScript moves declarations to the top before code execution. |
| **Class** | Blueprint for creating objects with shared methods and properties. |
| **toFixed()** | Method to format numbers with fixed-point notation. |
| **Static** | Defines methods that are called on the class itself, not on instances. |
| **Inheritance** | Allows one class to inherit properties and methods from another class. |
| **super** | Used to access methods and properties of a parent class. |

---
