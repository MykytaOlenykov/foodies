import { useEffect, useState } from "react";
import api from "../../services/api.js";

const API_LIMIT = 1000;

const useDropdownLists = () => {
  const [ingredientsList, setIngredients] = useState([]);
  const [categoriesList, setCategories] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function fetchLists() {
      try {
        const [ingRes, catRes] = await Promise.all([
          api.get(`api/ingredients?limit=${API_LIMIT}`),
          api.get(`api/categories?limit=${API_LIMIT}`),
        ]);
        if (isMounted) {
          setIngredients(ingRes.data.data.ingredients);
          setCategories(catRes.data.data.categories);
        }
      } catch (err) {
        console.error('Failed loading lists', err);
      }
    }
    fetchLists();
    return () => {
      isMounted = false;
    };
  }, []);

  return { ingredientsList, categoriesList };
}

export { useDropdownLists };
