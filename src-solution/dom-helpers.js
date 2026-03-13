const recipesList = document.querySelector('#recipes-list');
const recipeCount = document.querySelector('#recipe-count');
const errorMessage = document.querySelector('#error-message');

export const renderRecipes = (recipes) => {
  recipesList.innerHTML = '';
  recipeCount.textContent = recipes.length;

  recipes.forEach((recipe) => {
    const li = document.createElement('li');

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

export const renderError = (message) => {
  if (message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
  } else {
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
  }
};
