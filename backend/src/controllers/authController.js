export const registerUser = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "User registered successfully"
  });
};

export const loginUser = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Login successful"
  });
};

export const getProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Profile fetched successfully"
  });
};
