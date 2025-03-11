
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
