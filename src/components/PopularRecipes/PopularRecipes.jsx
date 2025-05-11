import { RecipeCard } from "../RecipeCard/index.js";
import { useBreakpoint } from "../../hooks/useBreakpoint.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid } from "swiper/modules";
import { Typography } from "../Typography/Typography.jsx";
import * as styles from "./PopularRecipes.module.css";

/**
 * @param {object} props
 * @param {Array<{
 *    id: number,
 *    title: string,
 *    description: string,
 *    thumb: string,
 *    owner: {
 *      id: number,
 *      name: string,
 *      avatarURL: string
 *    }
 *  }>} props.recipes
 * */
const PopularRecipes = ({ recipes }) => {
  const breakpoint = useBreakpoint();
  const isMobile = ["mobile", "small-mobile"].includes(breakpoint);

  return (
    <section>
      <div className={styles.PopularRecipes}>
        <Typography variant="h3">Popular recipes</Typography>
        <Swiper
          slidesPerView={1}
          modules={[Grid]}
          grid={{
            rows: 4,
            fill: "row",
          }}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            1280: {
              slidesPerView: 4,
              grid: {
                rows: 1,
                fill: "row",
              },
            },
          }}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RecipeCard
                recipeId={recipe.id}
                title={recipe.title}
                image={recipe.thumb}
                description={recipe.description}
                owner={recipe.owner}
                isMobile={isMobile}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { PopularRecipes };
