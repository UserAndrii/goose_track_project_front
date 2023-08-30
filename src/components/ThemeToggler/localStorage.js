export function saveLocal(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error.message);
  }
}

export function loadLocal(key) {
  try {
    const savedData = localStorage.getItem(key);
    return savedData === null ? null : JSON.parse(savedData);
  } catch (error) {
    console.error(error.message);
  }
}
