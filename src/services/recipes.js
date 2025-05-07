import api from "./api";

export const getRecipeById = (id) => api.get(`/recipes/${id}`);
export const getPopularRecipes = () => api.get("/recipes/popular");
