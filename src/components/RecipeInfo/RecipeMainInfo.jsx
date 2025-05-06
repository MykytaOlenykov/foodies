const RecipeMainInfo = ({ recipe }) => {
  const {
    title,
    category,
    description,
    preview,
    time,
    author: { name },
  } = recipe;

  return (
    <div>
      <img src={preview} alt={title} width="400" />
      <h1>{title}</h1>
      <div>
        <span>{category?.name || category}</span> • <span>{time} min</span>
      </div>
      <p>{description}</p>
      <button onClick={() => alert("TODO: Handle author profile click")}>
        Created by: {name}
      </button>
    </div>
  );
};

export default RecipeMainInfo;
