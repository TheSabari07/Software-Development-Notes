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

> *Will update more in the coming days.*

