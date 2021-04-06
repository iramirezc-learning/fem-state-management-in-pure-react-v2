import { useState, useEffect } from 'react';

const getStorage = (initialValue, key) => {
  let storage = localStorage.getItem(key);

  if (storage) {
    try {
      storage = JSON.parse(storage);
    } catch (err) {}
  }

  if (!storage) {
    storage = { value: initialValue };
  }

  return storage.value;
};

export const useLocalStorage = (initialValue, key) => {
  const [value, setValue] = useState(getStorage(initialValue, key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
