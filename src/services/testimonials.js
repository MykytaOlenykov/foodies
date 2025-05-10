import api from "./api";

export const getTestimonials = async () => {
  const { data } = await api.get(`/testimonials`, {
    params: { page: 1, limit: 3 },
  });
  return {
    testimonials: data.data.testimonials,
  };
};
