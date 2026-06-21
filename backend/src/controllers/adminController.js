export const getDashboardStats = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Dashboard statistics retrieved"
  });
};

export const getAllUsers = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users retrieved successfully"
  });
};

export const deleteUser = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "User deleted successfully"
  });
};
