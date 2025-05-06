import RecipeCard from "../RecipeCard/RecipeCard";

const PopularRecipes = () => {
  // Тимчасові мок-дані
  const mockPopular = [
    {
      id: 1,
      title: "Avocado Toast",
      preview: "https://via.placeholder.com/150x100?text=Avocado+Toast",
    },
    {
      id: 2,
      title: "Chocolate Cake",
      preview: "https://via.placeholder.com/150x100?text=Chocolate+Cake",
    },
    {
      id: 3,
      title: "Spaghetti Bolognese",
      preview: "https://via.placeholder.com/150x100?text=Spaghetti",
    },
  ];

  return (
    <section>
      <h2>Popular Recipes</h2>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {mockPopular.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default PopularRecipes;
