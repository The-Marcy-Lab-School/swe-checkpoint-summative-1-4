# Short Response Questions

Answer each question completely but concisely. Use proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or MDN, but do NOT copy and paste definitions verbatim — write answers in your own words.

You can earn up to **6 points per question** (3 points for technical content, 3 points for writing quality).

Before submitting, use a spell checker to ensure your responses are free of grammar and spelling errors.

---

### Question 1: Scope

The following code throws a `ReferenceError` at runtime. Explain **why** this error occurs. Your answer must use the word **scope**.

```js
const calculateFinalPrice = (price, hasCoupon) => {
  const taxMultiplier = 1.1;
  if (hasCoupon) {
    let finalPrice = (price - 5) * taxMultiplier;  
  } else {
    let finalPrice = price * taxMultiplier;
  }
  return finalPrice;
}

calculateFinalPrice(50, true);
```

**Your Answer:**


### Question 2: Encapsulation and Private Fields

Explain what **encapsulation** means in object-oriented programming. What does the `#` syntax do in a JavaScript class, and why is it useful?

**Your Answer:**


### Question 3: Flexbox vs. CSS Grid

Explain the difference between **Flexbox** and **CSS Grid** and provide an example of a component of a website that would use each.

**Your Answer:**


---

### Question 4: Async Execution Order

In what order will the numbers be logged when this code runs? List them and explain why they appear in that order.

```js
console.log('1');

const loadRecipe = async (id) => {
  console.log('2');
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  console.log('3');
  return data;
};

loadRecipe(1);
console.log('4');
```

**Your Answer:**


---
