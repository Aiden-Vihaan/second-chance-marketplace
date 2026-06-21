export const getRecommendedItems = (
  items,
  category
) => {
  return items.filter(
    (item) =>
      item.category === category
  );
};
