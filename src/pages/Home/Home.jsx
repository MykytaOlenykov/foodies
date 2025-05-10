import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import toast from "react-hot-toast";

import { Category } from "../../components/Category";
import { Hero } from "../../components/Hero";
import { Recipes } from "../../components/Recipes";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { getTestimonials } from "../../services/testimonials";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/common";
import { normalizeHttpError } from "../../utils";

import css from "./Home.module.css";

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

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { testimonials } = await getTestimonials();
        setTestimonials(
          testimonials.map(({ testimonial, owner }) => ({
            text: testimonial,
            author: owner.name,
          })),
        );
      } catch (error) {
        const { message } = normalizeHttpError(error);
        toast.error(message ?? DEFAULT_ERROR_MESSAGE);
      }
    })();
  }, []);

  return (
    <div className={css.container}>
      <Hero />

      {isRecipesSubPage ? <Recipes categoryId={categoryId} /> : <Category />}

      <Testimonials data={testimonials} />
    </div>
  );
}
