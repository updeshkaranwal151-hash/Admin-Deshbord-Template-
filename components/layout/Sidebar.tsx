
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../constants';
import { ChevronLeftIcon, CodeIcon } from '../shared/Icons';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside
        className={`fixed lg:relative flex flex-col bg-white dark:bg-gray-800 shadow-xl h-full z-50 transition-width duration-300 ease-in-out ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className={`flex items-center justify-between p-4 h-16 border-b dark:border-gray-700 ${isOpen ? '' : 'justify-center'}`}>
          <div className="flex items-center text-primary-600 dark:text-primary-400">
            <CodeIcon className="h-8 w-8" />
            <span className={`ml-3 text-xl font-bold transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
              Admin
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1 rounded-full hidden lg:flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overflow-x-hidden">
          <ul className="py-4 space-y-2">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  end
                  className={({ isActive }) =>
                    `flex items-center py-3 mx-4 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-300 font-semibold'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    } ${isOpen ? 'px-4' : 'justify-center'}`
                  }
                  title={isOpen ? '' : link.name}
                >
                  <link.icon className="h-6 w-6" />
                  <span className={`ml-4 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    {link.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
