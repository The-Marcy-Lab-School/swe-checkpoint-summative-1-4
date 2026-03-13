/**
 * DOM Helpers
 *
 * Functions for reading from and writing to the DOM.
 * These functions should NOT make any fetch() calls.
 *
 * Key elements already in index.html:
 *   #recipes-list        <ul>    Recipe cards are rendered here
 *   #recipe-count        <span>  Shows how many recipes are displayed
 *   #recipes-section     <section> Contains the list heading + list
 *   #recipe-detail       <section> Detail panel (starts with .hidden)
 *   #detail-image        <img>   Recipe photo
 *   #detail-name         <h2>    Recipe name
 *   #detail-meta         <p>     Prep time, cook time, servings, difficulty
 *   #detail-rating       <p>     Star rating and review count
 *   #detail-tags         <div>   Tag badges
 *   #detail-ingredients  <ul>    One <li> per ingredient
 *   #detail-instructions <ol>    One <li> per instruction step
 *   #error-message       <p>     Error text (starts with .hidden)
 */

/**
 * renderRecipes(recipes)
 * @param {Array} recipes - Array of recipe objects from the API
 *
 * - Clears #recipes-list before rendering
 * - Updates the text content of #recipe-count to recipes.length
 * - For each recipe, creates an <li> element with:
 *     - A data-recipe-id attribute set to recipe.id
 *     - An <img> with src=recipe.image and alt=recipe.name
 *     - An <h3> with the recipe name
 *     - A <p> with cuisine and difficulty, e.g. "Italian · Easy"
 *     - A <p> with the rating, e.g. "★ 4.6"
 * - Appends each <li> to #recipes-list
 */
export const renderRecipes = (recipes) => {
  // TODO 1
};

/**
 * renderRecipeDetail(recipe)
 * @param {Object} recipe - A single recipe object
 *
 * - Sets #detail-image src to recipe.image and alt to recipe.name
 * - Sets #detail-name text to recipe.name
 * - Sets #detail-meta text to:
 *     "Prep: {prepTimeMinutes}min | Cook: {cookTimeMinutes}min | Servings: {servings} | {difficulty}"
 * - Sets #detail-rating text to:
 *     "★ {rating} ({reviewCount} reviews)"
 * - Renders #detail-tags: create a <span> for each tag in recipe.tags
 * - Renders #detail-ingredients: create an <li> for each ingredient string
 * - Renders #detail-instructions: create an <li> for each instruction string
 */
export const renderRecipeDetail = (recipe) => {
  // Provided: swap views
  document.querySelector('#recipe-detail').classList.remove('hidden');
  document.querySelector('#recipes-section').classList.add('hidden');

  // TODO 2: Populate all #detail-* elements using the recipe object
};

/**
 * hideRecipeDetail()
 *
 * Swaps the detail panel back to the list view.
 */
export const hideRecipeDetail = () => {
  // Provided
  document.querySelector('#recipe-detail').classList.add('hidden');
  document.querySelector('#recipes-section').classList.remove('hidden');
};

/**
 * renderError(message)
 * @param {string} message - The error message to display
 *
 * - If message is truthy:
 *     - Sets the text content of #error-message to the message
 *     - Removes the .hidden class so the error is visible
 * - If message is falsy (empty string, null, undefined):
 *     - Clears the text content
 *     - Adds the .hidden class back
 */
export const renderError = (message) => {
  // TODO 3
};
