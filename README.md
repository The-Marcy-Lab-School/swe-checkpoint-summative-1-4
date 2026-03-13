# Summative Checkpoint: Modules 1–4

**Table of Contents:**
- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
- [What Resources Can I Use?](#what-resources-can-i-use)
- [Submission Instructions](#submission-instructions)
- [Section 1: Short Response](#section-1-short-response)
- [Section 2: RecipeCollection Class (OOP)](#section-2-recipecollection-class-oop)
  - [Class Specification](#class-specification)
  - [Example Usage](#example-usage)
  - [Requirements](#requirements)
- [Section 3: Fetch Helpers](#section-3-fetch-helpers)
  - [API Reference](#api-reference)
  - [Functions](#functions)
    - [`getAllRecipes()`](#getallrecipes)
    - [`searchRecipes(query)`](#searchrecipesquery)
  - [Requirements](#requirements-1)
- [Section 4: DOM Helpers](#section-4-dom-helpers)
  - [`renderRecipes(recipes)`](#renderrecipesrecipes)
  - [`renderError(message)`](#rendererrormessage)
  - [Requirements](#requirements-2)
- [Section 5: main.js — Event Handling](#section-5-mainjs--event-handling)
  - [Requirements](#requirements-3)
- [Section 6: CSS Layout](#section-6-css-layout)
  - [Requirements](#requirements-4)
- [Concept Coverage](#concept-coverage)
  - [Covered](#covered)
  - [Not Covered](#not-covered)

---

## Overview

This checkpoint covers the core skills from Modules 1–4:

| Module                      | Skills Assessed                                                            |
| --------------------------- | -------------------------------------------------------------------------- |
| **Mod 1 – JS Fundamentals** | Variables/scope, loops, array HOF methods (`.filter`, `.map`, `.reduce`)   |
| **Mod 2 – OOP**             | Classes, private fields, static members, `this`, encapsulation             |
| **Mod 3 – HTML & CSS**      | Semantic HTML, CSS custom properties, Flexbox, Grid, responsive design     |
| **Mod 4 – Async & APIs**    | Fetch API, `async`/`await`, ES Modules, DOM manipulation, event delegation |

You will build a **Recipe Explorer** web app that fetches recipe data from the [DummyJSON Recipes API](https://dummyjson.com/recipes) and lets users browse, search, and filter recipes.

**The completed app should:**
- Display a grid of recipe cards fetched from the API
- Allow users to search for recipes by name
- Filter recipes by meal type (Breakfast, Lunch, Dinner, Snack) using locally stored data

---

## Setup Instructions

1. Clone the repository and navigate to this folder:

    ```bash
    cd swe-summative-checkpoint-1-4
    ```

2. Switch to a `draft` branch:

    ```bash
    git checkout -B draft
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

    Then open `http://localhost:5173` in your browser.

---

## What Resources Can I Use?

**Allowed:**
- ✅ MDN Documentation
- ✅ The Marcy Lab School GitBook
- ✅ Your notes and previous assignments
- ✅ Running code in the browser to test ideas

**Not Allowed:**
- ❌ AI tools (ChatGPT, Claude, Copilot, etc.)
- ❌ Asking classmates for solutions
- ❌ Searching for direct solutions online

**If You're Stuck:**
- Read the comments in each file carefully — they describe the expected behavior
- Use `console.log()` to debug your code
- Check the browser's DevTools console for errors
- Take a break and come back with fresh eyes

---

## Submission Instructions

**Checklist before submitting:**
- [ ] All questions in `SHORT_RESPONSE.md` are answered
- [ ] All TODOs in `src/RecipeCollection.js` are implemented
- [ ] All TODOs in `src/fetch-helpers.js` are implemented
- [ ] All TODOs in `src/dom-helpers.js` are implemented
- [ ] All TODOs in `src/main.js` are implemented
- [ ] CSS layout requirements are met (Flexbox, Grid, responsive)
- [ ] Short responses are proofread for grammar and spelling
- [ ] Remove any `console.log` statements used for debugging

**How to Submit:**

1. Commit your changes:

    ```bash
    git add -A
    git commit -m "Completed summative checkpoint"
    ```

2. Push to GitHub:

    ```bash
    git push
    ```

3. Create a pull request to merge `draft` into `main` and tag your instructor.

4. Submit the pull request link on Canvas.

---

## Section 1: Short Response

**File:** `SHORT_RESPONSE.md`

Answer all 4 questions in `SHORT_RESPONSE.md`:

| Question | Topic                          | Module |
| -------- | ------------------------------ | ------ |
| 1        | Scope                          | Mod 1  |
| 2        | Encapsulation & Private Fields | Mod 2  |
| 3        | Flexbox vs. Grid               | Mod 3  |
| 4        | Async Execution Order          | Mod 4  |

Each question is worth **6 points** (3 technical + 3 writing quality) for a total of **24 points**.

---

## Section 2: RecipeCollection Class (OOP)

**File:** `src/RecipeCollection.js`

Implement an OOP class that stores and manages a collection of recipe objects.

Recipe objects have the following shape:

```js
const pizza = {
  id: 1,
  name: 'Margherita Pizza',
  difficulty: 'Easy',
  rating: 4.6,
  mealType: ['Dinner', 'Lunch']
};
```

### Class Specification

| Member                       | Type            | Description                                                         |
| ---------------------------- | --------------- | ------------------------------------------------------------------- |
| `#recipes`                   | Private field   | Array of recipe objects in this collection *(pre-provided)*         |
| `constructor(name)`          | Constructor     | Gives the collection a name accessible as `this.name`               |
| `addRecipe(recipe)`          | Instance method | Adds a recipe object to the collection                              |
| `getAll()`                   | Instance method | Returns the recipes without exposing the private field directly     |
| `getNames()`                 | Instance method | Returns an array of just the recipe name strings                    |
| `getAverageRating()`         | Instance method | Returns the average rating rounded to 1 decimal place; `0` if empty |
| `filterByMealType(mealType)` | Instance method | Returns only recipes whose `mealType` array includes the given type |

### Example Usage

```js
const myCollection = new RecipeCollection('Weeknight Dinners');

const pizza = { id: 1, name: 'Margherita Pizza', difficulty: 'Easy', rating: 4.6, mealType: ['Dinner'] };
const pasta = { id: 2, name: 'Pasta Carbonara', difficulty: 'Medium', rating: 4.2, mealType: ['Dinner', 'Lunch'] };
const oatmeal = { id: 3, name: 'Banana Oatmeal', difficulty: 'Easy', rating: 4.8, mealType: ['Breakfast'] };

myCollection.addRecipe(pizza);
myCollection.addRecipe(pasta);
myCollection.addRecipe(oatmeal);

console.log(myCollection.getNames());                       // ['Margherita Pizza', 'Pasta Carbonara', 'Banana Oatmeal']
console.log(myCollection.getAverageRating());               // 4.5
console.log(myCollection.filterByMealType('Dinner'));       // [pizza, pasta]
```

To verify your implementation, uncomment `test()` at the bottom of `RecipeCollection.js` and run:

```bash
node src/RecipeCollection.js
```

### Requirements

- [ ] `constructor` — `this.name` is set to the given name
- [ ] `addRecipe()` — the recipe is stored in the collection
- [ ] `getAll()` — returns a copy of the recipes, not a direct reference to the private array
- [ ] `getNames()` — returns an array of recipe name strings
- [ ] `getAverageRating()` — returns the average rating rounded to 1 decimal place; returns `0` for an empty collection
- [ ] `filterByMealType()` — returns only recipes whose `mealType` array includes the given type

---

## Section 3: Fetch Helpers

**File:** `src/fetch-helpers.js`

Implement two async functions that fetch data from the DummyJSON Recipes API. These functions should have **no DOM interaction**.

Each function returns `{ data, error }`:
- On success: `{ data: <result>, error: null }`
- On failure: `{ data: null, error: <error message string> }`

### API Reference

| Endpoint                                        | Description                                   |
| ----------------------------------------------- | --------------------------------------------- |
| `https://dummyjson.com/recipes?limit=30`        | All recipes (returns `{ recipes: [...] }`)    |
| `https://dummyjson.com/recipes/:id`             | Single recipe by ID                           |
| `https://dummyjson.com/recipes/search?q=:query` | Search recipes (returns `{ recipes: [...] }`) |

### Functions

#### `getAllRecipes()`

Fetches all recipes from the API. On success, `data` is an array of recipe objects. On failure, `data` is `null` and `error` is a message string.

**What you'll need:** `async`/`await`, `fetch`, `response.ok`, `response.json()`, `try`/`catch`.

#### `searchRecipes(query)`

Fetches recipes matching the search query. On success, `data` is an array of matching recipe objects. On failure, `data` is `null` and `error` is a message string.

**What you'll need:** `async`/`await`, `fetch`, `response.ok`, `response.json()`, `try`/`catch`, template literals.

### Requirements

- [ ] `getAllRecipes()` uses `async`/`await` and fetches from the correct URL
- [ ] `getAllRecipes()` checks `response.ok` and throws on a failed response
- [ ] `getAllRecipes()` returns `{ data: recipesArray, error: null }` on success and `{ data: null, error: message }` on failure
- [ ] `searchRecipes()` uses `async`/`await` and fetches from the correct URL with the query string
- [ ] `searchRecipes()` checks `response.ok` and throws on a failed response
- [ ] `searchRecipes()` returns `{ data: recipesArray, error: null }` on success and `{ data: null, error: message }` on failure

---

## Section 4: DOM Helpers

**File:** `src/dom-helpers.js`

Implement two functions that read from and write to the DOM. These functions should have **no fetch calls**.

You can inspect `index.html` to find the relevant element IDs.

### `renderRecipes(recipes)`

After this function runs, the page should show a card for each recipe with its image, name, cuisine and difficulty, and rating. The recipe count display should also update. Open the browser and verify the grid looks correct.

```html
<ul id="recipes-list">
  <li>
    <img src="https://..." alt="Margherita Pizza">
    <h3>Margherita Pizza</h3>
    <p>Italian · Easy</p>
    <p>★ 4.6</p>
  </li>
  <!-- one <li> per recipe -->
</ul>
```

**What you'll need:** `document.querySelector`, `element.innerHTML`, `element.textContent`, `document.createElement`, `element.append`, array iteration.

### `renderError(message)`

After this function runs with a non-empty message, an error should be visible on the page. After it runs with an empty string, the error should disappear. Verify by temporarily passing a string to it in the browser console (open the browser console and type `renderError('oops')` and hit enter. Then try again with `renderError('')`).

The `#error-message` element starts with the `.hidden` class in `index.html` — toggle its visibility by adding and removing that class.

**What you'll need:** `document.querySelector`, `element.textContent`, `element.classList.add`, `element.classList.remove`.

### Requirements

- [ ] `renderRecipes()` clears `#recipes-list` and updates the recipe count before rendering
- [ ] `renderRecipes()` renders an `<img>`, `<h3>` (name), `<p>` (cuisine · difficulty), and `<p>` (★ rating) for each recipe
- [ ] `renderError()` shows the message and removes `.hidden` when the message is truthy
- [ ] `renderError()` clears the message and adds `.hidden` when the message is falsy

---

## Section 5: main.js — Event Handling

**File:** `src/main.js`

Wire everything together using imports from the other three files. The starter code provides three named function stubs and the active-state management inside `handleFilterClick`.

**Part 1:** The app needs a place to store recipes in memory after they are fetched so filtering works without re-fetching. Create a `RecipeCollection` instance before anything else runs.

**Part 2 (`main`):** When the app loads, the recipe grid should populate automatically. If the fetch fails, an error message should appear instead. Verify: open the browser — cards should appear without any user interaction.

**Part 3 (`handleSearchSubmit`):** When the search form is submitted, the grid should update to show only recipes matching the query. Verify: type "pasta" and hit Search — the results should change.

**Part 4 (`handleFilterClick`):** When a filter button is clicked, only recipes of that meal type should appear. "All" should restore the full list. The active-state highlighting is already handled — focus on updating the recipe grid. Verify: click each filter button and confirm the grid updates.

**Part 5:** Start the app and attach all event listeners so every feature works end-to-end.

**What you'll need:** `document.querySelector`, `element.addEventListener`, `event.preventDefault`, `event.target.closest`, `input.value`, `dataset.filter`.

### Requirements

- [ ] A `RecipeCollection` instance is created before any functions run
- [ ] On load, recipes are fetched, added to the collection, and rendered; an error message appears if the fetch fails
- [ ] On search submit, the grid updates with matching results; an error message appears if the fetch fails
- [ ] On filter click, the grid shows only recipes of the selected meal type; "All" restores the full list
- [ ] `main()` is called and both event listeners (`submit` on `#search-form`, `click` on `#filter-buttons`) are attached

---

## Section 6: CSS Layout

**File:** `styles.css`

`styles.css` provides a CSS reset, custom properties, and base element styles. You write all layout styles below the `TODO` comment.

Use a **mobile-first** approach: write default styles for mobile, then use `min-width` media queries to adapt for larger screens. Feel free to add additional styles to make the app visually polished!

### Requirements

- [ ] `<header>` uses Flexbox to place the title and search form side by side at all screen sizes
- [ ] `<aside>` and `#recipes-section` stack vertically by default (mobile)
- [ ] `#recipes-list` is a 1-column grid by default; each `<li>` is styled as a card (border, border-radius, padding)
- [ ] At `min-width: 768px`, `<main>` switches to a side-by-side layout and `#recipes-list` becomes a multi-column grid

---

## Concept Coverage

### Covered

**Module 1 — JS Fundamentals**
- `let` / `const` / `var` and block scope
- Array higher-order methods: `.filter()`, `.map()`, `.reduce()`

**Module 2 — OOP**
- Classes and constructors
- Private instance fields (`#`)
- Encapsulation

**Module 3 — HTML & CSS**
- Flexbox layout
- CSS Grid layout
- Responsive design with `@media` queries

**Module 4 — Async & APIs**
- `async` / `await`
- Async execution order and the event loop
- `fetch` with `response.ok` error checking
- `try` / `catch` for async error handling
- ES Modules (`import` / `export`)
- DOM manipulation (creating and appending elements)
- Event listeners and event delegation (`closest()`)
- `data-*` attributes

---

### Not Covered

**Module 1**
- Closures
- `var` hoisting in depth

**Module 2**
- Inheritance (`extends` / `super`)
- Static class members
- Prototypal inheritance

**Module 3**
- Semantic HTML
- CSS custom properties (provided, not written)
- CSS animations and transitions

**Module 4**
- `.then()` / `.catch()` Promise chaining
- `Promise.all()`
- Rendering a detail/single-item view
- `localStorage` / `sessionStorage`
