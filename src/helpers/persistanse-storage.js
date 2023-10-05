export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    console.log("Error setting localStorage item: ", key);
  }
};
