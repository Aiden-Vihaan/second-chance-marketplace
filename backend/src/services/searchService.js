export const buildSearchQuery = (
  keyword
) => {
  return {
    $or: [
      {
        title: {
          $regex: keyword,
          $options: "i"
        }
      },
      {
        description: {
          $regex: keyword,
          $options: "i"
        }
      }
    ]
  };
};
