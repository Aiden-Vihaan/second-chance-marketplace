export const addToWishlist = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Item added to wishlist"
  });
};

export const removeFromWishlist = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Item removed from wishlist"
  });
};

export const getWishlist = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Wishlist retrieved successfully"
  });
};
