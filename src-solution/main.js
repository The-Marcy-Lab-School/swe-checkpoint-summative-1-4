import { RecipeCollection } from './RecipeCollection.js';
import { getAllRecipes, getRecipeById, searchRecipes } from './fetch-helpers.js';
import { renderRecipes, renderRecipeDetail, hideRecipeDetail, renderError } from './dom-helpers.js';

// Part 1: Create a RecipeCollection instance
const collection = new RecipeCollection('All Recipes');

// Part 2: Initialize — load all recipes on page load
(async () => {
  const { data, error } = await getAllRecipes();
  if (error) {
    renderError(error);
    return;
  }
  renderError('');
  data.recipes.forEach((recipe) => collection.addRecipe(recipe));
  renderRecipes(collection.getAll());
})();

// Part 3: Search form
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.querySelector('#search-input').value.trim();
  const { data, error } = await searchRecipes(query);
  if (error) {
    renderError(error);
    return;
  }
  renderError('');
  renderRecipes(data);
});

// Part 4: Recipe card click — event delegation
const recipesList = document.querySelector('#recipes-list');
recipesList.addEventListener('click', async (event) => {
  const card = event.target.closest('li');
  if (!card) return;
  const id = card.dataset.recipeId;
  const { data, error } = await getRecipeById(id);
  if (error) {
    renderError(error);
    return;
  }
  renderError('');
  renderRecipeDetail(data);
});

// Part 5: Close detail panel
const closeDetail = document.querySelector('#close-detail');
closeDetail.addEventListener('click', () => {
  hideRecipeDetail();
});

// Part 6: Meal type filter buttons — event delegation
const filterButtons = document.querySelector('#filter-buttons');
filterButtons.addEventListener('click', (event) => {
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
});
