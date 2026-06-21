import apiClient from "./apiClient";

export const getReviews = async (
  itemId
) => {
  const response = await apiClient.get(
    `/reviews/${itemId}`
  );

  return response.data;
};

export const createReview = async (
  reviewData
) => {
  const response = await apiClient.post(
    "/reviews",
    reviewData
  );

  return response.data;
};
