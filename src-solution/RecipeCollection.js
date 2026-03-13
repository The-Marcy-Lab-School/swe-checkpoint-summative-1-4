class RecipeCollection {
  #recipes = [];
  static #totalCollections = 0;

  constructor(name) {
    this.name = name;
    RecipeCollection.#totalCollections++;
  }

  static getTotalCollections() {
    return RecipeCollection.#totalCollections;
  }

  addRecipe(recipe) {
    this.#recipes.push(recipe);
  }

  getAll() {
    return [...this.#recipes];
  }

  getCount() {
    return this.#recipes.length;
  }

  filterByDifficulty(difficulty) {
    return this.#recipes.filter((recipe) => recipe.difficulty === difficulty);
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
