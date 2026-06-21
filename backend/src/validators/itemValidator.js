export const validateItem = (
  item
) => {
  const {
    title,
    description,
    price,
    category
  } = item;

  if (
    !title ||
    !description ||
    !price ||
    !category
  ) {
    return {
      valid: false,
      message:
        "Missing required item fields"
    };
  }

  return {
    valid: true
  };
};
