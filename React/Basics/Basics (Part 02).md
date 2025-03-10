
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

