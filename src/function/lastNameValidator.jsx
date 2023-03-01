export const lastNameValidator = (lastname) => {
  if (lastname.length > 3) {
    return true;
  }
  return false;
};
