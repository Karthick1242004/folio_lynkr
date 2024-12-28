import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 rounded-full bg-gray-200 dark:bg-gray-800 p-2 transition-colors"
    >
      <div className="relative w-12 h-6 rounded-full bg-white dark:bg-gray-700">
        <div
          className={`absolute top-1 h-4 w-4 rounded-full transition-all duration-300 ${
            isDark ? 'left-7 bg-gray-900' : 'left-1 bg-yellow-500'
          }`}
        />
      </div>
      {isDark ? (
        <Moon className="w-4 h-4 text-gray-400" />
      ) : (
        <Sun className="w-4 h-4 text-yellow-500" />
      )}
    </button>
  );
};