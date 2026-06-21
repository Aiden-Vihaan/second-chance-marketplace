import apiClient from "./apiClient";

export const getItems = async () => {
  const response = await apiClient.get(
    "/items"
  );

  return response.data;
};

export const getItemById = async (id) => {
  const response = await apiClient.get(
    `/items/${id}`
  );

  return response.data;
};

export const createItem = async (
  itemData
) => {
  const response = await apiClient.post(
    "/items",
    itemData
  );

  return response.data;
};

export const deleteItem = async (id) => {
  const response = await apiClient.delete(
    `/items/${id}`
  );

  return response.data;
};
