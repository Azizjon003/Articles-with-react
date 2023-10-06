export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    console.log("Error setting localStorage item: ", key);
  }
};

export const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    console.log("Error getting localStorage item: ", key);
    return null;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {
    console.log("Error removing localStorage item: ", key);
  }
};
