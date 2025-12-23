import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface UserContextType {
  username: string | null;
  setUsername: (name: string) => Promise<void>;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const USERNAME_STORAGE_KEY = '@holein_username';

export function UserProvider({ children }: { children: ReactNode }) {
  const [username, setUsernameState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUsername();
  }, []);

  const loadUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem(USERNAME_STORAGE_KEY);
      if (storedUsername !== null) {
        setUsernameState(storedUsername);
      }
    } catch (error) {
      console.error('Failed to load username:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setUsername = async (name: string) => {
    try {
      await AsyncStorage.setItem(USERNAME_STORAGE_KEY, name);
      setUsernameState(name);
    } catch (error) {
      console.error('Failed to save username:', error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ username, setUsername, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
