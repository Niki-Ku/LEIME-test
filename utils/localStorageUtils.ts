export const setItemToLocalStorage = (key: string, value: any) => {
  try {
    const json = JSON.stringify(value);

    localStorage.setItem(key, json);
  } catch (error) {
    console.log(`Error setting localStorage item ${key}:`, error);
  }
};

export const getItemFromLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.log(`Error getting localStorage item ${key}:`, error);

    return null;
  }
};
