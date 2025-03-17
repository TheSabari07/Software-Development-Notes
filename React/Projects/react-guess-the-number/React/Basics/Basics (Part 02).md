
#  React Basics: Props, Conditional Rendering, Lists, and Keys

---

##  What are Props in React?

**Props (short for "Properties")** are used to pass data from a parent component to a child component. Props are **read-only**, meaning a child component cannot modify them.

###  Example of Props
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Sabari" />;
}

```

Here, the `name` prop is passed from `App` to `Greeting`, which then displays it.

---

## What is Conditional Rendering?

Conditional rendering allows a component to display different content based on a condition.

### Example of Conditional Rendering

```jsx
jsx
CopyEdit
function WelcomeMessage(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}

function App() {
  return <WelcomeMessage isLoggedIn={true} />;
}

```

If `isLoggedIn` is `true`, it shows "Welcome back!". Otherwise, it shows "Please log in."

---

## What is a List in React?

A **list** in React is an array of elements rendered dynamically using `.map()`.

### Example of a List

```jsx
jsx
CopyEdit
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <ul>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  );
}

```

This will render:

- Alice
- Bob
- Charlie

---

## What are List Keys?

A **key** is a unique identifier used to help React track and update list items efficiently. Without keys, React may re-render items incorrectly.

### Example with Keys

```jsx
jsx
CopyEdit
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

```

Here, `key={index}` ensures each list item has a unique identity.

---

**Summary Table**

| Concept | Explanation |
| --- | --- |
| **Props** | Pass data from parent to child component |
| **Conditional Rendering** | Show different content based on conditions |
| **List** | Render multiple elements dynamically |
| **List Keys** | Unique identifiers for list items |

---
