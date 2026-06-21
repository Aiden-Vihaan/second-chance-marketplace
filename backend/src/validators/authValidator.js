export const validateRegister = (
  name,
  email,
  password
) => {
  if (!name || !email || !password) {
    return {
      valid: false,
      message: "All fields are required"
    };
  }

  if (password.length < 6) {
    return {
      valid: false,
      message:
        "Password must be at least 6 characters"
    };
  }

  return {
    valid: true
  };
};

export const validateLogin = (
  email,
  password
) => {
  if (!email || !password) {
    return {
      valid: false,
      message:
        "Email and password are required"
    };
  }

  return {
    valid: true
  };
};
