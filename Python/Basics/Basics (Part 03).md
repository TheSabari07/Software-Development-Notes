## **Tuple**

A **tuple** is an **ordered** and **immutable** collection of items. This means once you create a tuple, you **cannot change, add, or remove** elements.

### **Example:**

```python
python
CopyEdit
my_tuple = (1, 2, 3, "hello", 5.5)
print(my_tuple)

```

### **Key Points:**

- **Immutable** (Cannot be changed)
- Can store **different data types**
- Uses **( )** (parentheses)

---

## **List**

A **list** is an **ordered** and **mutable** collection of items. This means you **can change, add, and remove** elements.

### **Example:**

```python
python
CopyEdit
my_list = [1, 2, 3, "hello", 5.5]
print(my_list)

my_list.append(10)  # Adds 10 to the list
print(my_list)

```

### **Key Points:**

- **Mutable** (Can be changed)
- Can store **different data types**
- Uses **[ ]** (square brackets)

---

## **Array**

An **array** is a collection of **same-type** elements. Unlike lists, arrays are designed for **efficient numerical operations**.

### **Example (Using `array` module):**

```python
python
CopyEdit
import array

my_array = array.array('i', [1, 2, 3, 4])  # 'i' means integer type
print(my_array)

```

### **Key Points:**

- Stores **only one type** of data
- Faster for **mathematical operations**
- Uses **array module**

---

## **Comparison Table**

| Feature | Tuple `( )` | List `[ ]` | Array (Using `array`) |
| --- | --- | --- | --- |
| **Mutable?** | No | Yes | Yes |
| **Data Type Restriction?** | No | No | Yes |
| **Performance** | Fast | Slower than tuple | Fastest for numbers |
| **Use Case** | Fixed data | Dynamic data | Numeric operations |

---


