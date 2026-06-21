export const createReview = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Review added successfully"
  });
};

export const getReviews = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Reviews retrieved successfully"
  });
};
