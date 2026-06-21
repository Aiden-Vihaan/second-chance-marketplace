import apiClient from "./apiClient";

export const getWishlist = async () => {
  const response = await apiClient.get(
    "/wishlist"
  );

  return response.data;
};

export const addToWishlist = async (
  itemId
) => {
  const response = await apiClient.post(
    `/wishlist/${itemId}`
  );

  return response.data;
};

export const removeFromWishlist =
  async (itemId) => {
    const response =
      await apiClient.delete(
        `/wishlist/${itemId}`
      );

    return response.data;
  };
