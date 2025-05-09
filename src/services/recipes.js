import api from "./api";

export const getRecipes = async (
  { page, limit, categoryId, areaId, ingredientId },
  options = {},
) => {
  const { signal } = options;
  const { data } = await api.get(`/recipes`, {
    params: {
      ...(page ? { page } : {}),
      ...(limit ? { limit } : {}),
      ...(categoryId ? { categoryId } : {}),
      ...(areaId ? { areaId } : {}),
      ...(ingredientId ? { ingredientId } : {}),
    },
    signal,
  });
  return {
    total: data.data.total,
    recipes: data.data.recipes,
  };
};

export const getRecipesByUserId = async (userId, { page, limit }) => {
  const response = await api.get(`/recipes`, {
    params: {
      page,
      limit,
      ownerId: userId,
    },
  });
  return {
    total: response.data?.data?.total ?? 0,
    items: response.data?.data?.recipes ?? [],
  };
};

export const getFavoriteRecipes = async ({ page, limit }) => {
  const response = await api.get(`/recipes/favorites`, {
    params: { page, limit },
  });
  return {
    total: response.data?.data?.total ?? 0,
    items: response.data?.data?.favoriteRecipes ?? [],
  };
};

export const deleteRecipeById = async (recipeId) => {
  const response = await api.delete(`/recipes/${recipeId}`);
  return response.data?.data;
};

export const removeFavoriteRecipe = async (recipeId) => {
  const response = await api.delete(`/recipes/favorites/${recipeId}`);
  return response.data?.data;
};

export const addFavoriteRecipe = async (recipeId) => {
  const response = await api.post(`/recipes/favorites/${recipeId}`);
  return response.data?.data;
};
