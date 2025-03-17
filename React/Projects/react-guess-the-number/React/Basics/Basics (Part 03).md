
# React Basics

### Inline Styles & CSS Stylesheet

### Inline Styles
- Inline styles in React are applied directly to elements using the `style` attribute.
- It accepts an object where properties are written in camelCase.

#### Example:
```jsx
function InlineStyleExample() {
  return (
    <h1 style={{ color: 'blue', fontSize: '20px' }}>Hello, React!</h1>
  );
}
```

---

### CSS Stylesheet
- Styles are written in a separate CSS file and imported into the component.

#### Example:
**styles.css**
```css
h1 {
  color: blue;
  font-size: 20px;
}
```

**Component.js**
```jsx
import './styles.css';

function StylesheetExample() {
  return (
    <h1>Hello, React!</h1>
  );
}
```

---

## Hooks
- Hooks allow functional components to manage state and lifecycle methods.
- Introduced in React 16.8.
- Common hooks: `useState`, `useEffect`, `useContext`.

#### Example:
```jsx
import { useState } from 'react';

function HookExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---


## State in React
- `State` is used to store data that can change over time.
- In functional components, `useState` is used to manage state.

#### Example:
```jsx
import { useState } from 'react';

function StateExample() {
  const [message, setMessage] = useState("Hello!");

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("Welcome to React!")}>Change Text</button>
    </div>
  );
}
```

---

## Multiple States in Hooks
- We can use `useState` multiple times to manage different states in a component.

#### Example:
```jsx
import { useState } from 'react';

function MultipleStateExample() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(25);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}
```

---


