export const validateWishlist = (
  itemId
) => {
  if (!itemId) {
    return {
      valid: false,
      message: "Item ID required"
    };
  }

  return {
    valid: true
  };
};
