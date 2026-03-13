export const getAllRecipes = async () => {
  try {
    const response = await fetch('https://dummyjson.com/recipes?limit=30');
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data: data.recipes, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const searchRecipes = async (query) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data: data.recipes, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
