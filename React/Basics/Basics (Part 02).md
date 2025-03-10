
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

