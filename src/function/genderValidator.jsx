export const genderValidator = (gender) => {
  if (gender == "male" || gender == "female") {
    return true;
  }
  return false;
};
