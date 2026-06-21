import apiClient from "./apiClient";

export const registerUser = async (userData) => {
  const response = await apiClient.post(
    "/auth/register",
    userData
  );

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await apiClient.post(
    "/auth/login",
    userData
  );

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await apiClient.get(
    "/auth/profile"
  );

  return response.data;
};
