class RecipeCollection {
  #recipes = [];

  constructor(name) {
    this.name = name;
  }

  addRecipe(recipe) {
    this.#recipes.push(recipe);
  }

  getAll() {
    return [...this.#recipes];
  }

  getNames() {
    return this.#recipes.map((recipe) => recipe.name);
  }

  getAverageRating() {
    if (this.#recipes.length === 0) return 0;
    const total = this.#recipes.reduce((sum, recipe) => sum + recipe.rating, 0);
    return parseFloat((total / this.#recipes.length).toFixed(1));
  }

  filterByMealType(mealType) {
    return this.#recipes.filter((recipe) => recipe.mealType.includes(mealType));
  }
}

export { RecipeCollection };
