import { useSearchParams } from "react-router";
import { Category } from "../../components/Category";
import { Hero } from "../../components/Hero";
import { Recipes } from "../../components/Recipes";

const isValidCategory = (category) => {
  if (!category) return false;
  if (category === "all") return true;
  return !Number.isNaN(Number(category));
};

export default function Home() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const isRecipesSubPage = isValidCategory(category);
  const categoryId =
    isRecipesSubPage && category !== "all" ? Number(category) : null;

  return (
    <>
      <Hero />

      {isRecipesSubPage ? <Recipes categoryId={categoryId} /> : <Category />}
    </>
  );
}
