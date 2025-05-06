const RecipeIngredients = ({ ingredients }) => {
  if (!ingredients?.length) return null;

  return (
    <section>
      <h2>Ingredients</h2>
      <ul
        style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: 0 }}
      >
        {ingredients.map(({ id, name, measure, img, imgURL }, index) => (
          <li
            key={id || index}
            style={{
              listStyle: "none",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "8px",
              width: "120px",
              textAlign: "center",
            }}
          >
            <img
              src={imgURL || img || "https://via.placeholder.com/80"}
              alt={name}
              width="80"
              height="80"
              style={{ objectFit: "cover", borderRadius: "4px" }}
            />
            <p>{name}</p>
            <p>{measure}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecipeIngredients;
