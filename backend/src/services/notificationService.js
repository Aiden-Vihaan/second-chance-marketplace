export const sendNotification = async (
  userId,
  title,
  message
) => {
  return {
    success: true,
    userId,
    title,
    message,
    timestamp: new Date()
  };
};
