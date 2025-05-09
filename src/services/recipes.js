import api from "./api";

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

export const addRecipeToFavorite = async (recipeId) => {
  const { data } = await api.post(`/recipes/favorites/${recipeId}`);
  return data.data.message;
};

export const removeRecipeFromFavorite = async (recipeId) => {
  const { data } = await api.delete(`/recipes/favorites/${recipeId}`);
  return data.data.message;
};
