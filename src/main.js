/**
 * main.js — App Orchestration & Event Handling
 *
 * This file imports from all other modules and wires the app together.
 * Keep this file focused on event listeners and initialization logic.
 * Do NOT put fetch logic or DOM rendering logic directly in this file.
 */

import { RecipeCollection } from './RecipeCollection.js';
import { getAllRecipes, getRecipeById, searchRecipes } from './fetch-helpers.js';
import { renderRecipes, renderRecipeDetail, hideRecipeDetail, renderError } from './dom-helpers.js';

// =============================================
// Part 1: Create a RecipeCollection Instance
// =============================================
// TODO 1: Create a new RecipeCollection with the name "All Recipes".
// Store it in a variable so you can use it throughout the file.



// =============================================
// Part 2: Initialize — Load All Recipes on Page Load
// =============================================
// TODO 2: Call getAllRecipes() to fetch the initial list of recipes.
//   - If there is an error, call renderError() with the error message.
//   - If successful:
//       1. Call renderError('') to clear any previous error.
//       2. Add each recipe to your RecipeCollection using addRecipe().
//       3. Call renderRecipes() with the full list of recipes.
//
// Hint: You can use an immediately invoked async arrow function:
//   (async () => { ... })();



// =============================================
// Part 3: Search Form
// =============================================
// TODO 3: Add a 'submit' event listener to the #search-form element.
//   - Prevent the default form submission behavior.
//   - Get the trimmed value from #search-input.
//   - Call searchRecipes(query) with the search query.
//   - If there is an error, call renderError() with the error message.
//   - If successful:
//       1. Call renderError('') to clear any previous error.
//       2. Call renderRecipes() with the search results.



// =============================================
// Part 4: Recipe Card Click — Event Delegation
// =============================================
// TODO 4: Add a 'click' event listener to the #recipes-list element.
//   - Use event.target.closest('li') to find the clicked recipe card.
//   - If no <li> was clicked, return early.
//   - Get the recipe ID from the element's data-recipe-id attribute.
//   - Call getRecipeById(id) to fetch the full recipe details.
//   - If there is an error, call renderError() with the error message.
//   - If successful, call renderRecipeDetail() with the recipe data.



// =============================================
// Part 5: Close Detail Panel
// =============================================
// TODO 5: Add a 'click' event listener to the #close-detail button.
//   - Call hideRecipeDetail() to return to the list view.



// =============================================
// Part 6: Meal Type Filter Buttons — Event Delegation
// =============================================
// TODO 6: Add a 'click' event listener to the #filter-buttons element.
//   - Use event.target.closest('.filter-btn') to find the clicked button.
//   - If no filter button was clicked, return early.
//   - Get the data-filter value from the clicked button.
//
// Provided: active state management
//   document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
//   btn.classList.add('active');
//
//   - If filter is 'all':
//       - Call renderRecipes() with all recipes from the collection (use getAll()).
//   - Otherwise:
//       - Use the collection's filterByMealType() method to get filtered recipes.
//       - Call renderRecipes() with the filtered recipes.
