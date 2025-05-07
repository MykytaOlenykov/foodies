// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import PathInfo from "../../components/PathInfo/PathInfo";
// import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
// import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";
// import { getRecipeById, getPopularRecipes } from "../../services/recipes";

// const RecipePage = () => {
//   const { id } = useParams();

//   const [recipe, setRecipe] = useState(null);
//   const [popular, setPopular] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!id) {
//       console.log("No recipe ID in params");
//       return;
//     }

//     console.log("Fetching data for recipe ID:", id);

//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const recipeRes = await getRecipeById(id);
//         console.log("Recipe response:", recipeRes);

//         const popularRes = await getPopularRecipes();
//         console.log("Popular response:", popularRes);

//         const recipeData = recipeRes.data.recipe || recipeRes.data.data?.recipe;
//         const popularData =
//           popularRes.data.recipes || popularRes.data.data || [];

//         if (!recipeData) {
//           throw new Error("Recipe not found in response");
//         }

//         setRecipe(recipeData);
//         setPopular(popularData);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError("Something went wrong while loading recipe data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (error || !recipe) return <p>{error || "Recipe not found."}</p>;

//   return (
//     <div>
//       <PathInfo current={recipe.title} />
//       <RecipeInfo recipe={recipe} favoriteRecipes={[]} />
//       <PopularRecipes recipes={popular} />
//     </div>
//   );
// };

// export default RecipePage;

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Container from "../../components/UI/Container/Container";
import PathInfo from "../../components/PathInfo/PathInfo";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";

const RecipePage = () => {
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    console.log("Recipe ID:", id);
  }, [id]);

  //  Реальні мок-дані з API
  const mockRecipe = {
    title: "Tunisian Orange Cake",
    category: { name: "Dessert" },
    description:
      "A deliciously moist cake made with fresh orange juice and zest, almond flour, and a touch of rosewater.",
    preview:
      "https://ftp.goit.study/img/so-yummy/preview/Tunisian%20Orange%20Cake.jpg",
    time: 50,
    author: { name: "Artur Mykhailiuk" },
    ingredients: [
      {
        id: 3,
        name: "Baking Powder",
        measure: "1 tbs",
        imgURL:
          "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3665.png",
      },
      {
        id: 27,
        name: "Olive Oil",
        measure: "75 ml ",
        imgURL:
          "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e372c.png",
      },
      {
        id: 217,
        name: "Orange",
        measure: "1 large",
        imgURL:
          "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e372f.png",
      },
      {
        id: 332,
        name: "Eggs",
        measure: "4 large",
        imgURL:
          "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36ca.png",
      },
      {
        id: 521,
        name: "Caster Sugar",
        measure: "300g",
        imgURL:
          "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3687.png",
      },
      {
        id: 531,
        name: "Flour",
        measure: "280g",
        imgURL:
          "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e36d7.png",
      },
      {
        id: 556,
        name: "Vanilla Extract",
        measure: "2 tsp",
        imgURL:
          "https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e3786.png",
      },
    ],
    instructions:
      "Preheat oven to 190 C / Gas 5. Grease a 23cm round springform tin.\n" +
      "Cut off the hard bits from the top and bottom of the orange. Slice the orange and remove all seeds. Puree the orange with its peel in a food processor. Add one third of the sugar and the olive oil and continue to mix until well combined.\n" +
      "Sieve together flour and baking powder.\n" +
      "Beat the eggs and the remaining sugar with an electric hand mixer for at least five minutes until very fluffy. Fold in half of the flour mixture, then the orange and the vanilla, then fold in the remaining flour. Mix well but not for too long.\n" +
      "Pour cake mixture into prepared tin and smooth out. Bake in preheated oven for 20 minutes. Reduce the oven temperature to 160 C / Gas 2 and bake again for 30 minutes. Bake until the cake is golden brown and a skewer comes out clean. Cool on a wire cake rack.",
  };

  const mockFavorites = [
    {
      id: 283,
    },
  ];

  const mockPopular = [
    {
      id: 101,
      title: "Avocado Toast",
      description: "Healthy toast with avocado, egg and greens.",
      preview:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
      user: {
        id: 1,
        name: "Marta Green",
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    },
    {
      id: 102,
      title: "Spaghetti Bolognese",
      description: "Classic Italian pasta with meat sauce.",
      preview:
        "https://cdn.pixabay.com/photo/2017/05/07/08/56/spaghetti-2291908_1280.jpg",
      user: {
        id: 2,
        name: "Luca Rossi",
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    },
    {
      id: 103,
      title: "Greek Salad",
      description: "Fresh salad with feta, olives and cucumbers.",
      preview:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/salad-1238247_1280.jpg",
      user: {
        id: 3,
        name: "Nikos Papas",
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    },
    {
      id: 104,
      title: "Chicken Curry",
      description: "Spicy Indian-style chicken in rich sauce.",
      preview:
        "https://cdn.pixabay.com/photo/2017/05/07/08/56/spaghetti-2291908_1280.jpg",
      user: {
        id: 4,
        name: "Anjali Sharma",
        avatar:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    },
  ];

  return (
    <Container>
      <PathInfo current={mockRecipe.title} />
      <RecipeInfo recipe={mockRecipe} favoriteRecipes={mockFavorites} />
      <PopularRecipes recipes={mockPopular} />
    </Container>
  );
};

export default RecipePage;
