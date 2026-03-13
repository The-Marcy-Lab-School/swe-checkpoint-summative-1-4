const recipesList = document.querySelector('#recipes-list');
const recipeCount = document.querySelector('#recipe-count');
const recipeDetail = document.querySelector('#recipe-detail');
const recipesSection = document.querySelector('#recipes-section');
const detailImage = document.querySelector('#detail-image');
const detailName = document.querySelector('#detail-name');
const detailMeta = document.querySelector('#detail-meta');
const detailRating = document.querySelector('#detail-rating');
const detailTags = document.querySelector('#detail-tags');
const detailIngredients = document.querySelector('#detail-ingredients');
const detailInstructions = document.querySelector('#detail-instructions');
const errorMessage = document.querySelector('#error-message');

export const renderRecipes = (recipes) => {
  recipesList.innerHTML = '';
  recipeCount.textContent = recipes.length;

  recipes.forEach((recipe) => {
    const li = document.createElement('li');
    li.dataset.recipeId = recipe.id;

    const img = document.createElement('img');
    img.src = recipe.image;
    img.alt = recipe.name;

    const h3 = document.createElement('h3');
    h3.textContent = recipe.name;

    const meta = document.createElement('p');
    meta.textContent = `${recipe.cuisine} · ${recipe.difficulty}`;

    const rating = document.createElement('p');
    rating.textContent = `★ ${recipe.rating}`;

    li.append(img, h3, meta, rating);
    recipesList.append(li);
  });
};

export const renderRecipeDetail = (recipe) => {
  recipeDetail.classList.remove('hidden');
  recipesSection.classList.add('hidden');

  detailImage.src = recipe.image;
  detailImage.alt = recipe.name;
  detailName.textContent = recipe.name;
  detailMeta.textContent = `Prep: ${recipe.prepTimeMinutes}min | Cook: ${recipe.cookTimeMinutes}min | Servings: ${recipe.servings} | ${recipe.difficulty}`;
  detailRating.textContent = `★ ${recipe.rating} (${recipe.reviewCount} reviews)`;

  detailTags.innerHTML = '';
  recipe.tags.forEach((tag) => {
    const span = document.createElement('span');
    span.textContent = tag;
    detailTags.append(span);
  });

  detailIngredients.innerHTML = '';
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    detailIngredients.append(li);
  });

  detailInstructions.innerHTML = '';
  recipe.instructions.forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    detailInstructions.append(li);
  });
};

export const hideRecipeDetail = () => {
  recipeDetail.classList.add('hidden');
  recipesSection.classList.remove('hidden');
};

export const renderError = (message) => {
  if (message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
  } else {
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
  }
};
