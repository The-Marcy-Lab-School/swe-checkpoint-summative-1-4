export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const getAllRecipes = () => {
  return fetchData('https://dummyjson.com/recipes?limit=30');
};

export const getRecipeById = (id) => {
  return fetchData(`https://dummyjson.com/recipes/${id}`);
};

export const searchRecipes = async (query) => {
  const { data, error } = await fetchData(`https://dummyjson.com/recipes/search?q=${query}`);
  if (error) return { data: null, error };
  return { data: data.recipes, error: null };
};
