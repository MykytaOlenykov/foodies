import { RecipeCard } from "../RecipeCard/index.js";
import { useBreakpoint } from "../../hooks/useBreakpoint.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from "swiper/modules";

const SLIDE_PER_VIEW = 4;

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
    <Swiper
      slidesPerView={4}
      modules={[Grid]}
      grid={{
        rows: 1,
        fill: "row",
      }}
      spaceBetween={20}
      breakpoints={{
        375: {
          slidesPerView: 1,
          grid: {
            rows: 4,
            fill: "row"
          }
        },
        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: "row"
          }
        },
        1280: {
          slidesPerView: 4,
          grid: {
            rows: 1,
            fill: "row"
          }
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
  )
}

export { PopularRecipes }
