const getPagination = (
  page = 1,
  limit = 10
) => {
  const skip =
    (page - 1) * limit;

  return {
    limit: Number(limit),
    skip: Number(skip)
  };
};

export default getPagination;
