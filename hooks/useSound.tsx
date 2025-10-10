import React, { createContext, useContext, ReactNode } from 'react';

interface SoundContextType {
  isSoundEnabled: boolean;
  toggleSoundEnabled: () => void;
  playSound: (sound: string, force?: boolean) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Sounds are permanently disabled as per user request.
  // The functions are maintained as no-ops to avoid breaking the app.
  const isSoundEnabled = false;
  const toggleSoundEnabled = () => {};
  const playSound = () => {};

  return (
    <SoundContext.Provider value={{ isSoundEnabled, toggleSoundEnabled, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = (): SoundContextType => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
