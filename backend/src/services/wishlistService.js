export const isInWishlist = (
  wishlist,
  itemId
) => {
  return wishlist.some(
    (item) =>
      item.toString() === itemId
  );
};
