import { useState, useCallback, useEffect } from "react";

// This is the custom hook that i created to store arrays called useArray Cutom Hook
export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);
  const push = useCallback((currentArray) => {
    setArray((element) => [...element, currentArray]);
  }, []);
  const set = useCallback((currrentArray) => {
    setArray(currrentArray);
  }, []);
  const replace = useCallback(
    (index, newValue) =>
      setArray((a) =>
        Array.isArray(a)
          ? a.map((item, i) => (i === index ? newValue : item))
          : []
      ),
    []
  );

  const filter = useCallback((value) => {
    setArray((elements) =>
      Array.isArray(elements) ? elements.filter(value) : "Error"
    );
  });
  const reset = useCallback(() => {
    setArray(initialValue);
  });
  const clear = useCallback(() => {
    setArray([]);
  });

  return { array, set, push, replace, filter, reset, clear };
}

// this is the useLocalStorage custom hook
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);

    if (!localStorageValue) return initialValue
      return localStorageValue;
  });
  useEffect(() => {
    localStorage.setItem(key,  JSON.stringify(value));
  },[value]);
  return [value, setValue];
} 
