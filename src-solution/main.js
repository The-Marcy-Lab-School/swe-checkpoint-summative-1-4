import { RecipeCollection } from './RecipeCollection.js';
import { getAllRecipes, searchRecipes } from './fetch-helpers.js';
import { renderRecipes, renderError } from './dom-helpers.js';

// Part 1: Create a RecipeCollection instance
const collection = new RecipeCollection('All Recipes');

// Part 2: Initialize — load all recipes on page load
const main = async () => {
  const { data, error } = await getAllRecipes();
  if (error) {
    renderError(error);
    return;
  }
  renderError('');
  data.forEach((recipe) => collection.addRecipe(recipe));
  renderRecipes(collection.getAll());
};

// Part 3: Search form handler
const handleSearchSubmit = async (event) => {
  event.preventDefault();
  const query = document.querySelector('#search-input').value.trim();
  const { data, error } = await searchRecipes(query);
  if (error) {
    renderError(error);
    return;
  }
  renderError('');
  renderRecipes(data);
};

// Part 4: Meal type filter handler
const handleFilterClick = (event) => {
  const btn = event.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  const filter = btn.dataset.filter;
  if (filter === 'all') {
    renderRecipes(collection.getAll());
  } else {
    renderRecipes(collection.filterByMealType(filter));
  }
};

// Part 5: Invoke & wire up
main();
document.querySelector('#search-form').addEventListener('submit', handleSearchSubmit);
document.querySelector('#filter-buttons').addEventListener('click', handleFilterClick);
