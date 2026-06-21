export const validateReview = (
  rating,
  comment
) => {
  if (!rating || !comment) {
    return {
      valid: false,
      message:
        "Rating and comment required"
    };
  }

  if (rating < 1 || rating > 5) {
    return {
      valid: false,
      message:
        "Rating must be between 1 and 5"
    };
  }

  return {
    valid: true
  };
};
