# Python Basics

---

## **1. The `print()` Function**

The `print()` function is used to display output on the screen.

### **Syntax:**
```python
print("Hello, World!")
```

### **Example:**
```python
print("Welcome to Python!")
```
**Output:**
```
Welcome to Python!
```

---

## **2. Variables**

A variable is used to store data in memory. It acts as a container for values.

### **Example:**
```python
x = 10
name = "John"
pi = 3.14
is_active = True
```

| **Variable**  | **Value**   | **Type**    |
|--------------|------------|------------|
| x            | 10         | Integer    |
| name         | "John"     | String     |
| pi           | 3.14       | Float      |
| is_active    | True       | Boolean    |

---

## **3. Data Types**

Python has different data types:

| **Data Type**  | **Description**            | **Example**       |
|--------------|------------------------|---------------|
| Integer      | Whole numbers           | `x = 10`      |
| String       | Text data                | `name = "John"` |
| Float        | Decimal numbers          | `pi = 3.14`   |
| Boolean      | True or False values     | `is_active = True` |

### **Example:**
```python
age = 25  # Integer
name = "Alice"  # String
price = 99.99  # Float
is_logged_in = False  # Boolean
```

---

## **4. Using `print(f"{}")`**

The `print(f"{}")` statement is used for **formatted strings** (f-strings). It allows inserting variables directly inside a string.

### **Example:**
```python
name = "John"
age = 25
print(f"My name is {name} and I am {age} years old.")
```
**Output:**
```
My name is John and I am 25 years old.
```

---

## **5. Typecasting**

Typecasting is the process of converting one data type to another.

### **Why is it Important?**
- Helps in mathematical operations
- Prevents data type errors
- Ensures compatibility between different data types

### **Example:**
```python
x = "10"  # String
y = int(x)  # Convert to Integer
print(y + 5)
```
**Output:**
```
15
```

| **Function**  | **Conversion**       | **Example**       |
|--------------|----------------|---------------|
| `int()`      | String → Integer  | `int("10")`  |
| `float()`    | Integer → Float   | `float(5)`   |
| `str()`      | Number → String   | `str(123)`   |
| `bool()`     | Any → Boolean     | `bool(1)`    |

---

## **6. The `input()` Function**

The `input()` function is used to take user input.

### **Syntax:**
```python
variable = input("Enter something: ")
```

### **Example:**
```python
name = input("Enter your name: ")
print(f"Hello, {name}!")
```
**Input:**
```
Alice
```
**Output:**
```
Hello, Alice!
```

---

## **7. Identifiers**

Identifiers are the names used for variables, functions, classes, and other objects in Python. They help label data and instructions in a program.

---

### **Rules for Identifiers**

| **Rule** | **Description** |
|---------|----------------|
| **Can Contain Letters, Digits, and Underscores (`_`)** | Example: `my_variable`, `user1`, `temp_value` |
| **Cannot Start with a Digit** | Correct: `var1`, `_name` <br> Incorrect: `1var` (Invalid) |
| **Cannot Use Special Characters (`@`, `#`, `$`, etc.)** | Incorrect: `user@name`, `price#` |
| **Case-Sensitive** | `name` and `Name` are different identifiers |
| **Cannot Use Python Keywords** | Incorrect: `if = 10` (Invalid) |
| **Can Start with an Underscore (`_`), but Used for Special Cases** | `_variable`: Used for internal/private variables <br> `__var__`: Used for special methods (dunder methods) |

---

### **Example Identifiers in Python**
```python
name = "John"  # Valid identifier
_age = 25      # Valid, starts with underscore
user1 = "Alice"  # Valid, contains letters and digits

2user = "Bob"  # Invalid, starts with a digit
class = "Math"  # Invalid, uses a reserved keyword
```

---
# 8.Python Keywords

 **Keywords** are reserved words in Python that have a predefined meaning. They cannot be used as variable names, function names, or identifiers.

---

## List of Python Keywords

| Keyword   | Description |
|-----------|-------------|
| `False`   | Boolean false value |
| `None`    | Represents a null value |
| `True`    | Boolean true value |
| `and`     | Logical AND operator |
| `as`      | Used in aliasing (e.g., `import module as alias`) |
| `assert`  | Used for debugging |
| `break`   | Exits a loop early |
| `class`   | Defines a class |
| `continue` | Skips the current loop iteration |
| `def`     | Defines a function |
| `del`     | Deletes an object |
| `elif`    | Else if condition |
| `else`    | Defines an alternative block |
| `except`  | Handles exceptions |
| `finally` | Cleanup code in exceptions |
| `for`     | Loop structure |
| `from`    | Imports specific parts of a module |
| `global`  | Declares a global variable |
| `if`      | Conditional statement |
| `import`  | Imports a module |
| `in`      | Checks membership in a sequence |
| `is`      | Identity comparison |
| `lambda`  | Anonymous function |
| `nonlocal` | Modifies a variable in the outer scope |
| `not`     | Logical NOT operator |
| `or`      | Logical OR operator |
| `pass`    | Placeholder statement |
| `raise`   | Raises an exception |
| `return`  | Returns a value from a function |
| `try`     | Starts an exception block |
| `while`   | Loop structure |
| `with`    | Simplifies exception handling |
| `yield`   | Returns a generator |

---

## Rules for Using Keywords in Python

### Allowed
- Use them only for their intended purpose.
- Write them in **lowercase** (except `True`, `False`, and `None`).

### Not Allowed
- Do **not** use them as variable names.
- Do **not** modify their meaning.

---

## Example of Incorrect and Correct Usage

```python
# Incorrect
def for():  
    pass  # 'for' is a reserved keyword

# Correct
def loop_example():  
    for i in range(5):  
        print(i)
```
---
# 9.Camel Casing

 **Camel casing** is a way of writing names where the first word is in lowercase, and every following word starts with a capital letter. There are no spaces or underscores.

---

## Example of Camel Casing

| Type | Example |
|------|---------|
| Correct | `myVariableName` |
| Incorrect | `my_variable_name` (snake_case) |
| Incorrect | `Myvariablename` |

---

## Use Case

Camel casing is often used in **programming** to name:
- **Variables** → `userAge`, `totalPrice`
- **Functions** → `calculateSum()`, `getUserInfo()`
- **Class names** (in PascalCase, which is similar) → `PersonDetails`, `StudentRecord`

---

# 10.Import in Python

> **Import** is used to bring in extra code from another file or module so that you can use its functions.

---

## Example of Importing a Module

```python
import math  # Allows using math functions
print(math.sqrt(16))  # Outputs: 4.0
```

---
