export const formatItemResponse = (
  item
) => {
  return {
    id: item._id,
    title: item.title,
    price: item.price,
    category: item.category,
    condition: item.condition,
    image: item.images?.[0]
  };
};
