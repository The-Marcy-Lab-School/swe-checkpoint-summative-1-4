# Summative Checkpoint 1–4: Grading Rubric

## Grading Summary

| Section                          | Items | Points Each | Total   |
| -------------------------------- | ----- | ----------- | ------- |
| Short Response (4 questions)     | 4     | 6           | 24      |
| RecipeCollection Class (8 TODOs) | 8     | 2           | 16      |
| Fetch Helpers (4 TODOs)          | 4     | 4           | 16      |
| DOM Helpers (3 TODOs)            | 3     | 3           | 9       |
| main.js (6 TODOs)                | 6     | 3           | 18      |
| CSS Layout (5 requirements)      | 5     | 2           | 10      |
| **TOTAL**                        |       |             | **93** |

---

## Section 1: Short Response (24 points)

**4 questions × 6 points each**

Each question is graded on two components:

### Technical Score (0–3 points)

| Score              | Criteria                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| **3 – Exemplary**  | Answers all parts completely; uses correct terminology throughout; demonstrates deep understanding |
| **2 – Proficient** | Answers most parts; mostly accurate; may have minor gaps or imprecise terminology                  |
| **1 – Developing** | Answers only some parts; significant gaps or errors; misuses terminology                           |
| **0 – Incomplete** | Does not answer the question or demonstrates fundamental misunderstanding                          |

### Writing Quality Score (0–3 points)

| Score              | Criteria                                                                            |
| ------------------ | ----------------------------------------------------------------------------------- |
| **3 – Exemplary**  | No spelling/grammar errors; markdown renders correctly; clear logical flow; concise |
| **2 – Proficient** | 1–2 minor errors; mostly clear flow; readable                                       |
| **1 – Developing** | 3–5 errors; unclear structure; hard to follow                                       |
| **0 – Incomplete** | Numerous errors that impede understanding; no clear structure                       |

---

## Section 2: RecipeCollection Class (16 points)

**8 TODOs × 2 points each**

*Note: `#recipes` and `static #totalCollections` field declarations are pre-provided in the starter file.*

| TODO | Description                                             | Full Credit                                                              |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1    | `constructor` sets `this.name` and increments counter   | Uses `RecipeCollection.#totalCollections++`                              |
| 2    | `static getTotalCollections()` returns the counter      | Returns `RecipeCollection.#totalCollections`                             |
| 3    | `addRecipe()` pushes to `#recipes`                      | Uses `this.#recipes.push(recipe)`                                        |
| 4    | `getAll()` returns a copy                               | Returns `[...this.#recipes]` or `.slice()`                               |
| 5    | `getCount()` returns length                             | Returns `this.#recipes.length`                                           |
| 6    | `getNames()` uses `.map()`                              | Correctly maps to `recipe.name`                                          |
| 7    | `getAverageRating()` uses `.reduce()`, handles empty    | Returns `0` for empty; correctly calculates average; rounds to 1 decimal |
| 8    | `filterByMealType()` uses `.filter()` and `.includes()` | Correctly checks `recipe.mealType.includes(mealType)`                    |

**Partial credit (1 point):** Correct approach but minor implementation error (off-by-one, wrong property name, etc.)

---

## Section 3: Fetch Helpers (16 points)

**4 TODOs × 4 points each**

| TODO | Description                                                                       | Full Credit                                                                                |
| ---- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1    | `fetchData(url)` — async, checks `response.ok`, returns `{ data, error }` pattern | Uses `async/await`; throws on `!response.ok`; catches errors; returns correct shape        |
| 2    | `getAllRecipes()` — fetches correct URL, extracts `recipes` array                 | Fetches `?limit=30` URL; uses `fetchData`; returns `{ data: data.recipes, error }`         |
| 3    | `getRecipeById(id)` — fetches correct URL                                         | Fetches `recipes/${id}`; uses `fetchData`; returns `{ data, error }`                       |
| 4    | `searchRecipes(query)` — uses `async/await` explicitly                            | Uses `async/await` syntax (not `.then`); fetches correct search URL; returns recipes array |

**Partial credit (2–3 points):** Correct logic but missing one requirement (e.g., forgets to check `response.ok`, uses `.then` instead of `async/await` for Q4, wrong URL)

---

## Section 4: DOM Helpers (9 points)

**3 TODOs × 3 points each**

*Note: `hideRecipeDetail()` and the show/hide panel logic inside `renderRecipeDetail()` are pre-provided in the starter file.*

| TODO | Description                                                                                             | Full Credit                                                                             |
| ---- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 1    | `renderRecipes()` — clears list, updates count, renders cards with correct content and `data-recipe-id` | All five requirements met: clear, count, img, h3, meta, rating, data attribute          |
| 2    | `renderRecipeDetail()` — populates all `#detail-*` fields                                               | All fields populated; tags/ingredients/instructions are rendered as individual elements |
| 3    | `renderError()` — shows/hides error conditionally                                                       | Handles both truthy and falsy message correctly; toggles `.hidden`                      |

---

## Section 5: main.js (18 points)

**6 TODOs × 3 points each**

| TODO | Description                                                               | Full Credit                                                                                                                   |
| ---- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 1    | Creates `RecipeCollection` instance                                       | Uses `new RecipeCollection(...)`                                                                                              |
| 2    | Loads recipes on page load — async, adds to collection, renders           | Uses async IIFE or similar; calls `addRecipe()` for each; calls `renderRecipes()`; handles error                              |
| 3    | Search form — prevents default, fetches, renders                          | `event.preventDefault()`; gets trimmed input value; calls `searchRecipes()`; handles error                                    |
| 4    | Recipe card click — event delegation, fetches detail                      | Uses `.closest('li')`; gets `data-recipe-id`; calls `getRecipeById()`; calls `renderRecipeDetail()`; handles error            |
| 5    | Close detail button — calls `hideRecipeDetail()`                          | Attaches listener to `#close-detail`; calls `hideRecipeDetail()`                                                              |
| 6    | Filter buttons — event delegation, updates active state, renders filtered | Uses `.closest('.filter-btn')`; updates active class; correctly branches on `'all'` vs. meal type; calls `filterByMealType()` |

---

## Section 6: CSS Layout (10 points)

**5 requirements × 2 points each**

| Requirement        | Full Credit                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------- |
| Header Flexbox     | `<header>` uses `display: flex` to place `<h1>` and `<form>` side by side                 |
| Main Layout        | `<main>` uses Flexbox or Grid to place `<aside>` and `#recipes-section` side by side      |
| Recipe Card Grid   | `#recipes-list` uses `display: grid` with `grid-template-columns` for multi-column layout |
| Responsive — 768px | At `max-width: 768px`, aside and content stack vertically                                 |
| Responsive — 480px | At `max-width: 480px`, recipe grid is single column                                       |
