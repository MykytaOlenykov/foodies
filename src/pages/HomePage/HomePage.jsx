import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../../components/Hero/Hero.jsx";
import Recipes from "../../components/Recipes/Recipes.jsx";
import css from "./HomePage.module.css";
import Categories from "../../components/Categories/Categories.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewNow = () => {
    navigate("/catalog");
  };

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className={css.homePage}>
      <Hero
        title="Improve Your Culinary Talents"
        subtitle="Amazing recipes for beginners in the world of cooking, enveloping you in the aromas and tastes of various cuisines."
        buttonText="Add recipe"
        onButtonClick={handleViewNow}
      />
      <Categories />
    </div>
  );
};

export default HomePage;
