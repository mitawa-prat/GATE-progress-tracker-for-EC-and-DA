'use client';

import { useState, useCallback } from 'react';

interface UseLocalStorageOptions<T> {
  serialize?: (value: T) => string;
  deserialize?: (value: string) => T;
  validator?: (value: unknown) => value is T;
}

export function useLocalStorage<T>(
  key: string, 
  initialValue: T, 
  options: UseLocalStorageOptions<T> = {}
) {
  const {
    serialize = JSON.stringify,
    deserialize = JSON.parse,
    validator = (): boolean => true
  } = options;

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) {
        return initialValue;
      }
      
      const parsed = deserialize(item);
      
      // Validate the parsed data
      if (!validator(parsed)) {
        console.warn(`Invalid data for localStorage key "${key}", using initial value`);
        return initialValue;
      }
      
      return parsed;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      // Try to clear corrupted data
      try {
        window.localStorage.removeItem(key);
      } catch (clearError) {
        console.error(`Failed to clear corrupted localStorage key "${key}":`, clearError);
      }
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Validate the value before storing
      if (!validator(valueToStore)) {
        console.error(`Invalid value for localStorage key "${key}":`, valueToStore);
        return;
      }
      
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        const serialized = serialize(valueToStore);
        
        // Check if localStorage is available and has space
        if (serialized.length > 5 * 1024 * 1024) { // 5MB limit warning
          console.warn(`Large data size for localStorage key "${key}": ${serialized.length} characters`);
        }
        
        window.localStorage.setItem(key, serialized);
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
      
      // Handle quota exceeded error
      if (error instanceof DOMException && error.code === 22) {
        console.error('localStorage quota exceeded. Consider clearing old data.');
        // You could emit an event here to notify the UI
      }
    }
  }, [key, serialize, storedValue, validator]);

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue] as const;
}