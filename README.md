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
- [Section 3: Fetch Helpers](#section-3-fetch-helpers)
  - [API Reference](#api-reference)
  - [Functions](#functions)
    - [`fetchData(url)`](#fetchdataurl)
    - [`getAllRecipes()`](#getallrecipes)
    - [`getRecipeById(id)`](#getrecipebyidid)
    - [`searchRecipes(query)` ← Must use async/await](#searchrecipesquery--must-use-asyncawait)
- [Section 4: DOM Helpers](#section-4-dom-helpers)
  - [Key DOM Elements](#key-dom-elements)
  - [Functions](#functions-1)
    - [`renderRecipes(recipes)`](#renderrecipesrecipes)
    - [`renderRecipeDetail(recipe)`](#renderrecipedetailrecipe)
    - [`hideRecipeDetail()`](#hiderecipedetail)
    - [`renderError(message)`](#rendererrormessage)
- [Section 5: main.js — Event Handling](#section-5-mainjs--event-handling)
  - [Part 1: Create a RecipeCollection Instance](#part-1-create-a-recipecollection-instance)
  - [Part 2: Initialize on Page Load](#part-2-initialize-on-page-load)
  - [Part 3: Search Form](#part-3-search-form)
  - [Part 4: Recipe Card Click (Event Delegation)](#part-4-recipe-card-click-event-delegation)
  - [Part 5: Close Detail Panel](#part-5-close-detail-panel)
  - [Part 6: Meal Type Filter (Event Delegation)](#part-6-meal-type-filter-event-delegation)
- [Section 6: CSS Layout](#section-6-css-layout)
  - [Requirements](#requirements)

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
- Show full recipe details when a card is clicked
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
- Read the JSDoc comments in each file carefully — they describe exactly what each function should do
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

This class demonstrates encapsulation using private fields and static properties.

### Class Specification

| Member                         | Type                 | Description                                                               |
| ------------------------------ | -------------------- | ------------------------------------------------------------------------- |
| `#recipes`                     | Private field        | Array of recipe objects in this collection *(pre-provided)*               |
| `#totalCollections`            | Private static field | Count of all `RecipeCollection` instances created *(pre-provided)*        |
| `constructor(name)`            | Constructor          | Sets `this.name`; increments static counter                               |
| `static getTotalCollections()` | Static method        | Returns the value of `#totalCollections`                                  |
| `addRecipe(recipe)`            | Instance method      | Adds a recipe object to `#recipes`                                        |
| `getAll()`                     | Instance method      | Returns a shallow copy of `#recipes`                                      |
| `getCount()`                   | Instance method      | Returns the number of recipes                                             |
| `getNames()`                   | Instance method      | Uses `.map()` — returns an array of recipe name strings                   |
| `getAverageRating()`           | Instance method      | Uses `.reduce()` — returns average rating (1 decimal place); `0` if empty |
| `filterByMealType(mealType)`   | Instance method      | Uses `.filter()` + `.includes()` — returns recipes matching the meal type |

### Example Usage

```js
const myCollection = new RecipeCollection('Weeknight Dinners');

const pizza = { id: 1, name: 'Margherita Pizza', difficulty: 'Easy', rating: 4.6, mealType: ['Dinner'] };
const pasta = { id: 2, name: 'Pasta Carbonara', difficulty: 'Medium', rating: 4.2, mealType: ['Dinner', 'Lunch'] };
const oatmeal = { id: 3, name: 'Banana Oatmeal', difficulty: 'Easy', rating: 4.8, mealType: ['Breakfast'] };

myCollection.addRecipe(pizza);
myCollection.addRecipe(pasta);
myCollection.addRecipe(oatmeal);

console.log(myCollection.getCount());                       // 3
console.log(myCollection.getNames());                       // ['Margherita Pizza', 'Pasta Carbonara', 'Banana Oatmeal']
console.log(myCollection.getAverageRating());               // 4.5
console.log(myCollection.filterByMealType('Dinner'));       // [pizza, pasta]

const anotherCollection = new RecipeCollection('Quick Meals');
console.log(RecipeCollection.getTotalCollections());        // 2
```

You can manually test by uncommenting the test code at the bottom of `RecipeCollection.js` and running:

```bash
node src/RecipeCollection.js
```

---

## Section 3: Fetch Helpers

**File:** `src/fetch-helpers.js`

Implement four async functions that fetch data from the DummyJSON Recipes API. These functions should have **no DOM interaction**.

All functions should return a `{ data, error }` object:
- On success: `{ data: <result>, error: null }`
- On failure: `{ data: null, error: <error message string> }`

### API Reference

| Endpoint                                        | Description                                   |
| ----------------------------------------------- | --------------------------------------------- |
| `https://dummyjson.com/recipes?limit=30`        | All recipes (returns `{ recipes: [...] }`)    |
| `https://dummyjson.com/recipes/:id`             | Single recipe by ID                           |
| `https://dummyjson.com/recipes/search?q=:query` | Search recipes (returns `{ recipes: [...] }`) |

### Functions

#### `fetchData(url)`

The base helper used by all other functions.

```
- async/await syntax
- If response.ok is false, throw a new Error
- On success: return { data: jsonData, error: null }
- On failure (catch block): return { data: null, error: error.message }
```

#### `getAllRecipes()`

```
- Fetches: https://dummyjson.com/recipes?limit=30
- The API returns: { recipes: [...], total, skip, limit }
- Return: { data: recipesArray, error }
```

#### `getRecipeById(id)`

```
- Fetches: https://dummyjson.com/recipes/{id}
- Return: { data: recipeObject, error }
```

#### `searchRecipes(query)` ← Must use async/await

```
- Fetches: https://dummyjson.com/recipes/search?q={query}
- Must use async/await (not .then/.catch)
- Return: { data: recipesArray, error }
```

---

## Section 4: DOM Helpers

**File:** `src/dom-helpers.js`

Implement four functions that read from and write to the DOM. These functions should have **no fetch calls**.

### Key DOM Elements

All elements are already in `index.html`:

| ID                     | Element     | Purpose                                    |
| ---------------------- | ----------- | ------------------------------------------ |
| `#recipes-list`        | `<ul>`      | Recipe cards rendered here                 |
| `#recipe-count`        | `<span>`    | Number of recipes shown                    |
| `#recipes-section`     | `<section>` | Contains list heading + list               |
| `#recipe-detail`       | `<section>` | Full recipe detail panel                   |
| `#detail-image`        | `<img>`     | Recipe photo                               |
| `#detail-name`         | `<h2>`      | Recipe name                                |
| `#detail-meta`         | `<p>`       | Prep time, cook time, servings, difficulty |
| `#detail-rating`       | `<p>`       | Rating and review count                    |
| `#detail-tags`         | `<div>`     | Tag badges                                 |
| `#detail-ingredients`  | `<ul>`      | Ingredient list                            |
| `#detail-instructions` | `<ol>`      | Instruction steps                          |
| `#error-message`       | `<p>`       | Error text                                 |

### Functions

#### `renderRecipes(recipes)`

Clears `#recipes-list` and renders a card `<li>` for each recipe:
- `data-recipe-id` attribute set to `recipe.id`
- `<img>` with `src` and `alt`
- `<h3>` with recipe name
- `<p>` with cuisine and difficulty, e.g. `"Italian · Easy"`
- `<p>` with rating, e.g. `"★ 4.6"`
- Updates `#recipe-count` with `recipes.length`

#### `renderRecipeDetail(recipe)`

Shows the detail panel for one recipe:
- Removes `.hidden` from `#recipe-detail`
- Adds `.hidden` to `#recipes-section`
- Populates all `#detail-*` elements

Format for `#detail-meta`:
> `Prep: 20min | Cook: 30min | Servings: 4 | Easy`

Format for `#detail-rating`:
> `★ 4.6 (98 reviews)`

#### `hideRecipeDetail()`

Adds `.hidden` to `#recipe-detail` and removes `.hidden` from `#recipes-section`.

#### `renderError(message)`

- Truthy message: set text content, remove `.hidden`
- Falsy message: clear text, add `.hidden`

---

## Section 5: main.js — Event Handling

**File:** `src/main.js`

Wire everything together using imports from the other three files.

### Part 1: Create a RecipeCollection Instance

```js
const collection = new RecipeCollection('All Recipes');
```

### Part 2: Initialize on Page Load

Use an async IIFE (`(async () => { ... })()`) to:
1. Call `getAllRecipes()`
2. On error: call `renderError(error)`
3. On success: add each recipe to the collection, then call `renderRecipes(collection.getAll())`

### Part 3: Search Form

On `#search-form` submit:
1. `event.preventDefault()`
2. Get trimmed value from `#search-input`
3. Call `searchRecipes(query)`
4. On error: `renderError(error)`. On success: `renderRecipes(data)`

### Part 4: Recipe Card Click (Event Delegation)

On `#recipes-list` click:
1. `event.target.closest('li')` — return early if null
2. Get `data-recipe-id` from the card element
3. Call `getRecipeById(id)`
4. On success: `renderRecipeDetail(data)`

### Part 5: Close Detail Panel

On `#close-detail` click: call `hideRecipeDetail()`

### Part 6: Meal Type Filter (Event Delegation)

On `#filter-buttons` click:
1. `event.target.closest('.filter-btn')` — return early if null
2. Remove `active` class from all `.filter-btn` elements, add it to the clicked button
3. If `data-filter === 'all'`: `renderRecipes(collection.getAll())`
4. Otherwise: `renderRecipes(collection.filterByMealType(filter))`

---

## Section 6: CSS Layout

**File:** `styles.css`

`styles.css` provides a CSS reset, custom properties, and base element styles. You write all layout styles below the `TODO` comment.

### Requirements

1. **Header Flexbox** — Use Flexbox on the `<header>` so the `<h1>` and search `<form>` are side by side (title on the left, form on the right).

2. **Main Layout** — Use Flexbox or CSS Grid on `<main>` so the `<aside>` (filter sidebar) and `#recipes-section` sit side by side.

3. **Recipe Card Grid** — Use `display: grid` with `grid-template-columns` on `#recipes-list` for a multi-column card layout.

4. **Responsive — 768px** — At `max-width: 768px`, the aside and content area should stack vertically.

5. **Responsive — 480px** — At `max-width: 480px`, the recipe card grid should be a single column.

Feel free to add additional styles to make the app visually polished!
