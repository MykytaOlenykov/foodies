import * as styles from "./Testimonials.module.css";
import { Typography } from "../Typography/Typography.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import QuoteImage from '../../assets/images/quote.svg?react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SLIDE_PER_VIEW = 1;
const SLIDE_AUTOPLAY_DELAY = 5000;

/**
 * @param {object} props
 * @param {string} [props.text]
 * @param {string} [props.author]
 */
const TestimonialsCard = ({ text, author }) => {
  return (
    <div className={styles.TestimonialsCard}>
      <QuoteImage className={styles.Testimonials__illustration} />
      <p className={styles.TestimonialsCard__comment}>{text}</p>
      <Typography variant="h4">{author}</Typography>
    </div>
  );
};

/**
 *
 * @param {object} props
 * @param {Array<{text: string, author: string}>} props.data
 */
const Testimonials = ({data}) => {
  return (
    <div className={styles.Testimonials}>
      <span className={styles.Testimonials__subtitle}>
        What our customer say
      </span>
      <Typography variant="h2">Testimonials</Typography>
      <Swiper
        loop
        modules={[Pagination, Autoplay]}
        className={styles.Testimonials__swiper}
        slidesPerView={SLIDE_PER_VIEW}
        autoplay={{
          delay: SLIDE_AUTOPLAY_DELAY,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          horizontalClass: styles.Testimonials__pagination,
          bulletClass: styles.Testimonials__paginationBullet,
          bulletActiveClass: styles.active,
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide>
            <TestimonialsCard key={index} text={item.text} author={item.author} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Testimonials };
