# React Basics Overview

---

## What is React?

React is a **JavaScript library** for building **user interfaces**. It is used to create fast and interactive web applications.

---

## Who Created React?

| Creator | Year | Organization |
| --- | --- | --- |
| Jordan Walke | 2013 | Facebook (Now Meta) |

---

## Why Use React?

React is popular because it:

- Makes building UIs easy with **components**
- Improves performance using a **virtual DOM**
- Supports **one-way data flow**, making state management predictable
- Allows **reusable components**, reducing repeated code
- Is backed by a **large community**

---

## Key Features of React

| Feature | Description |
| --- | --- |
| Components | Reusable UI elements |
| JSX | HTML-like syntax in JavaScript |
| Virtual DOM | Faster updates to the UI |
| Props | Pass data between components |
| State | Manage component-specific data |
| Hooks | Use state and lifecycle methods in function components |

---


## Setting Up React

To start a new React project, you can use:

```
npx create-react-app my-app
cd my-app
npm start

```

Or manually add React to an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="<https://unpkg.com/react@18/umd/react.development.js>"></script>
    <script src="<https://unpkg.com/react-dom@18/umd/react-dom.development.js>"></script>
</head>
<body>
    <div id="root"></div>
    <script>
        const element = React.createElement('h1', {}, 'Hello, React!');
        ReactDOM.createRoot(document.getElementById('root')).render(element);
    </script>
</body>
</html>

```

---

## Understanding JSX

JSX allows you to write HTML-like syntax in JavaScript.

Example:

```jsx
const element = <h1>Hello, React!</h1>;

```

---

## Components in React

There are two types of components:

| Type | Example |
| --- | --- |
| **Function Component** | `function App() { return <h1>Hello</h1>; }` |
| **Class Component** | `class App extends React.Component { render() { return <h1>Hello</h1>; } }` |

Example of a functional component:

```jsx
function Welcome() {
    return <h1>Hello, React!</h1>;
}

```
