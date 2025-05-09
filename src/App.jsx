import { Route, Routes } from "react-router";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

import SharedLayout from "./components/layout/SharedLayout/SharedLayout";
import { PrivateRoute } from "./components/PrivateRoute";
import { checkApiConnection } from "./services/api.js";
import { getCurrentUser } from "./store/auth";
import { getAllAreas } from "./store/areas";
import { getAllCategories } from "./store/categories";
import { getAllIngredients } from "./store/ingredients";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Recipe = lazy(() => import("./pages/Recipe/Recipe.jsx"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const AddRecipe = lazy(() => import("./pages/AddRecipe/AddRecipe.jsx"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkApiConnection()
      .then(() => console.log("✅ API is reachable"))
      .catch((err) => console.error("❌ API connection failed:", err));

    dispatch(getCurrentUser());
    dispatch(getAllAreas());
    dispatch(getAllCategories());
    dispatch(getAllIngredients());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route
          path="/user/:id"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />

        <Route path="/recipe/:recipeId" element={<Recipe />} />

        <Route
          path="/recipe/add"
          element={
            <PrivateRoute>
              <AddRecipe />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
