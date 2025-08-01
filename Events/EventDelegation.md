# 📌 Event Delegation in JavaScript

Event Delegation is a powerful and efficient DOM event-handling pattern in JavaScript. This technique allows a single event listener on a **common parent** to manage events for **multiple child elements**, even if they are added dynamically.

---

## 📖 What is Event Delegation?

Event Delegation leverages two core concepts of the **DOM**:

1. **Event Bubbling**
   - When an event occurs (e.g., `click`), it propagates from the target element **up** through its ancestors, unless stopped.
   - Example: Clicking a `<button>` inside a `<div>` triggers events on both the `<button>` and then the `<div>`.

2. **Event Object (`event.target`)**
   - The `event` object contains a property called `target` which always refers to the **original** element where the event occurred, **not** necessarily the element where the listener was attached.

✅ **Combining both concepts**, we can attach one listener to a parent and manage all children inside it.

---

## 🎯 Why Use Event Delegation?

### 1. 🚀 Performance & Memory Efficiency
- **Fewer Listeners**: Instead of hundreds of listeners for each child, use just **one** on the parent.
- **Lower Memory Usage**: Listeners consume memory — fewer listeners = better performance.
- **Faster DOM Operations**: Especially useful for large lists or repeated items.

### 2. 🔄 Handles Dynamically Added Elements
- Without delegation, new elements don’t get event handlers automatically.
- With delegation, all current and **future child elements** are automatically handled.

### 3. 🧹 Cleaner, DRYer Code
- **Single Point of Control**: Easier debugging and readability.
- **Avoids Repetition**: No need to loop and attach events to each item.

---

## 🛠 How to Implement Event Delegation

Follow these 3 steps:

### ✅ Step 1: Identify the Parent Container
Pick a static and common parent element that wraps the target child elements.

### ✅ Step 2: Attach Event Listener to the Parent
```js
const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  // We'll filter inside this callback
});
