export function setDataInLocalstorage(key, value) {
  localStorage.setItem(key, value);
}

export function getDataFromLocalstorage(key) {
  return localStorage.getItem(key);
}

export function clearLocalStorate() {
  localStorage.clear();
}
