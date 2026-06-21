export const validateSearch = (
  keyword
) => {
  if (
    !keyword ||
    keyword.trim() === ""
  ) {
    return {
      valid: false,
      message:
        "Search keyword required"
    };
  }

  return {
    valid: true
  };
};
