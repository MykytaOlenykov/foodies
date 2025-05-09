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

export const getUserFollowers = async (userId, { page, limit }) => {
  const response = await api.get(`/users/${userId}/followers`, {
    params: { page, limit },
  });
  return {
    total: response.data?.data?.total ?? 0,
    items: response.data?.data?.followers ?? [],
  };
};

export const getUserFollowing = async ({ page, limit }) => {
  const response = await api.get(`/users/following`, {
    params: { page, limit },
  });
  return {
    total: response.data?.data?.total ?? 0,
    items: response.data?.data?.following ?? [],
  };
};
