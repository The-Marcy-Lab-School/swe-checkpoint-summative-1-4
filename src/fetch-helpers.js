/**
 * Fetch Helpers
 *
 * Pure async functions for fetching recipe data from the DummyJSON API.
 * These functions should ONLY fetch data — no DOM manipulation here.
 *
 * API Base URL: https://dummyjson.com/recipes
 *
 * Useful endpoints:
 *   GET /recipes?limit=30          → { recipes: [...], total, skip, limit }
 *   GET /recipes/:id               → single recipe object
 *   GET /recipes/search?q={query}  → { recipes: [...], total, skip, limit }
 *
 * All functions should return { data, error } to separate success/failure:
 *   - On success: { data: <result>, error: null }
 *   - On failure: { data: null, error: <error message string> }
 */

/**
 * fetchData(url)
 * @param {string} url - The full URL to fetch
 * @returns {Promise<{data: any, error: string|null}>}
 *
 * - Use async/await
 * - Await the fetch() call and store in a variable
 * - If response.ok is false, throw a new Error with a descriptive message
 * - Await response.json() and return { data: jsonData, error: null }
 * - Catch any errors and return { data: null, error: error.message }
 */
export const fetchData = async (url) => {
  // TODO 1
};

/**
 * getAllRecipes()
 * @returns {Promise<{data: Array, error: string|null}>}
 *
 * - Fetches from: https://dummyjson.com/recipes?limit=30
 * - Uses fetchData() to make the request
 * - The API response has the shape: { recipes: [...], total, skip, limit }
 * - Return { data: recipesArray, error }
 */
export const getAllRecipes = () => {
  // TODO 2
};

/**
 * getRecipeById(id)
 * @param {number|string} id - The recipe ID
 * @returns {Promise<{data: Object, error: string|null}>}
 *
 * - Fetches from: https://dummyjson.com/recipes/{id}
 * - Uses fetchData() to make the request
 * - Return { data: recipeObject, error }
 */
export const getRecipeById = (id) => {
  // TODO 3
};

/**
 * searchRecipes(query)
 * @param {string} query - The search query string
 * @returns {Promise<{data: Array, error: string|null}>}
 *
 * - Fetches from: https://dummyjson.com/recipes/search?q={query}
 * - Must use async/await syntax (not .then/.catch chaining)
 * - Uses fetchData() to make the request
 * - Return { data: recipesArray, error }
 */
export const searchRecipes = async (query) => {
  // TODO 4
};
