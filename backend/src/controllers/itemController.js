export const createItem = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Item created successfully"
  });
};

export const getItems = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Items retrieved successfully"
  });
};

export const getItemById = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Item details retrieved"
  });
};

export const updateItem = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Item updated successfully"
  });
};

export const deleteItem = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Item deleted successfully"
  });
};
