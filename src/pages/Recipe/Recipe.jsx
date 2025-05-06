import { useParams } from "react-router-dom";
import { useEffect } from "react";
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

  return (
    <div>
      <PathInfo currentPage={mockRecipe.title} />
      <RecipeInfo recipe={mockRecipe} />
      <PopularRecipes />
    </div>
  );
};

export default RecipePage;
