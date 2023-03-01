export const nameValidator = (name) => {
  if (name.length > 3) {
    return true;
  }

  return false;
};
