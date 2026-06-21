export const sendEmail = async (
  to,
  subject,
  message
) => {
  console.log(
    `Email sent to ${to}`
  );

  return {
    success: true
  };
};
