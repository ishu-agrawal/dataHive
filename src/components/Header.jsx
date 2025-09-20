import { 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  RotateCcw, 
  Copy, 
  Menu,
  Star,
  Grid3X3
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = ({ showNotifications, setShowNotifications, setSidebarCollapsed, sidebarCollapsed }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-150"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Grid3X3 className="w-4 h-4" />
            <Star className="w-4 h-4" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Dashboards</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">Default</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-80 pl-10 pr-4 py-2 bg-gray-100 dark:bg-slate-700 border-0 rounded-lg text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-600 transition-all duration-200"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-200 dark:bg-slate-600 px-1.5 py-0.5 rounded">
              ⌘K
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-150"
          >
            {isDark ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>

          <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-150">
            <RotateCcw className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-150">
            <Copy className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-150"
          >
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;