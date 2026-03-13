/**
 * RecipeCollection Class
 *
 * This class represents a named collection of recipes.
 * It uses private instance fields and static properties
 * to demonstrate encapsulation and static class members.
 *
 * Manually test your class by adding console.log() calls
 * at the bottom of this file, then run: node src/RecipeCollection.js
 */

class RecipeCollection {
  #recipes = [];
  static #totalCollections = 0;

  /**
   * constructor(name)
   * @param {string} name - The name of this collection (e.g. "My Favorites")
   *
   * - Sets `this.name` to the provided name
   * - Increments the static `#totalCollections` counter
   */
  constructor(name) {
    // TODO 1
  }

  /**
   * static getTotalCollections()
   * @returns {number} The total number of RecipeCollection instances created
   */
  static getTotalCollections() {
    // TODO 2
  }

  /**
   * addRecipe(recipe)
   * @param {Object} recipe - A recipe object from the DummyJSON API
   *
   * - Pushes the recipe into the private `#recipes` array
   */
  addRecipe(recipe) {
    // TODO 3
  }

  /**
   * getAll()
   * @returns {Array} A shallow copy of all recipes in the collection
   *
   * - Returns a copy (not the original array) so external code
   *   cannot directly mutate the private `#recipes` field.
   * - Hint: use the spread operator [...array] or array.slice()
   */
  getAll() {
    // TODO 4
  }

  /**
   * getCount()
   * @returns {number} The number of recipes currently in the collection
   */
  getCount() {
    // TODO 5
  }

  /**
   * getNames()
   * @returns {Array} An array of just the recipe name strings
   *
   * - Use the Array .map() method
   */
  getNames() {
    // TODO 6
  }

  /**
   * getAverageRating()
   * @returns {number} The average rating of all recipes, rounded to 1 decimal place
   *
   * - Use the Array .reduce() method to sum all ratings
   * - Divide by the number of recipes
   * - Return 0 if the collection is empty
   * - Hint: parseFloat(total.toFixed(1)) rounds and keeps it a number
   */
  getAverageRating() {
    // TODO 7
  }

  /**
   * filterByMealType(mealType)
   * @param {string} mealType - e.g. 'Breakfast', 'Lunch', 'Dinner', 'Snack'
   * @returns {Array} A new array of recipes whose mealType array includes the given type
   *
   * - Each recipe has a `mealType` property that is an array of strings
   *   e.g. { mealType: ["Dinner", "Lunch"] }
   * - Use .filter() and .includes()
   */
  filterByMealType(mealType) {
    // TODO 8
  }
}

// =============================================
// Manual Testing (uncomment to test your code)
// =============================================

// const myCollection = new RecipeCollection('Weeknight Dinners');
// console.log(myCollection.name);             // 'Weeknight Dinners'
// console.log(myCollection.getCount());       // 0
// console.log(myCollection.getAll());         // []

// const pizza = { id: 1, name: 'Margherita Pizza', difficulty: 'Easy', rating: 4.6, mealType: ['Dinner'] };
// const pasta = { id: 2, name: 'Pasta Carbonara', difficulty: 'Medium', rating: 4.2, mealType: ['Dinner', 'Lunch'] };
// const oatmeal = { id: 3, name: 'Banana Oatmeal', difficulty: 'Easy', rating: 4.8, mealType: ['Breakfast'] };

// myCollection.addRecipe(pizza);
// myCollection.addRecipe(pasta);
// myCollection.addRecipe(oatmeal);

// console.log(myCollection.getCount());                       // 3
// console.log(myCollection.getNames());                       // ['Margherita Pizza', 'Pasta Carbonara', 'Banana Oatmeal']
// console.log(myCollection.getAverageRating());               // 4.5
// console.log(myCollection.filterByMealType('Dinner'));       // [pizza, pasta]

// const anotherCollection = new RecipeCollection('Quick Meals');
// console.log(RecipeCollection.getTotalCollections());        // 2

export { RecipeCollection };
