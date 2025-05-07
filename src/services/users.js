import api from "./api";

export const getUserDataById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data?.data;
};

export const updateUserAvatar = async (file) => {
  const formData = new FormData();
  formData.append("avatar", file);

  const response = await api.patch("/users/avatars", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data?.data;
};

export const followUserById = async (userId) => {
  const response = await api.post(`/users/following/${userId}`);
  return response.data?.data;
};

export const unfollowUserById = async (userId) => {
  const response = await api.delete(`/users/following/${userId}`);
  return response.data?.data;
};
