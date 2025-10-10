import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { SunIcon, MoonIcon } from './Icons';
import { useSound } from '../../hooks/useSound';
import { SOUNDS } from '../../sounds';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { playSound } = useSound();

  const handleToggle = () => {
    playSound(theme === 'light' ? SOUNDS.TOGGLE_OFF : SOUNDS.TOGGLE_ON);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex items-center h-8 rounded-full w-16 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-800 ${
        theme === 'light' ? 'bg-primary-500' : 'bg-gray-700'
      }`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform duration-300 ease-in-out ${
          theme === 'light' ? 'translate-x-1' : 'translate-x-9'
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-between px-2">
          <SunIcon className={`h-4 w-4 text-yellow-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`} />
          <MoonIcon className={`h-4 w-4 text-yellow-300 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
