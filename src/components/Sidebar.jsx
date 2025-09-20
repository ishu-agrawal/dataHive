import { 
  Home, 
  FolderOpen, 
  BarChart3, 
  ShoppingCart, 
  GraduationCap,
  User,
  Building2,
  FileText,
  Share2,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Menu,
  Wind
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = ({ currentView, setCurrentView, collapsed, setCollapsed }) => {
  const [expandedSections, setExpandedSections] = useState({
    dashboards: true,
    pages: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuItems = [
    { id: 'overview', icon: Home, label: 'Overview', section: 'favorites' },
    { id: 'projects', icon: FolderOpen, label: 'Projects', section: 'favorites' },
  ];

  const dashboardItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Default', isActive: true },
    { id: 'ecommerce', icon: ShoppingCart, label: 'eCommerce' },
    { id: 'projects-dash', icon: FolderOpen, label: 'Projects' },
    { id: 'courses', icon: GraduationCap, label: 'Online Courses' },
  ];

  const pageItems = [
    { id: 'profile', icon: User, label: 'User Profile' },
    { id: 'account', icon: Briefcase, label: 'Account' },
    { id: 'corporate', icon: Building2, label: 'Corporate' },
    { id: 'blog', icon: FileText, label: 'Blog' },
    { id: 'social', icon: Share2, label: 'Social' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 transition-all duration-300 z-30 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex items-center p-4 border-b border-gray-200 dark:border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Wind className="w-5 h-5 text-white" />
          </div>
          {!collapsed && <span className="font-semibold text-gray-900 dark:text-white">ByeWind</span>}
        </div>
      </div>

      <div className="p-4 overflow-y-auto h-full pb-20">
        {!collapsed && (
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">Favorites</div>
        )}
        
        <div className="space-y-1 mb-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-150"
            >
              <item.icon className="w-5 h-5" />
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </div>

        {!collapsed && (
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">Dashboards</div>
        )}
        
        <div className="space-y-1 mb-6">
          {dashboardItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView('dashboard')}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-150 ${
                currentView === 'dashboard' && item.isActive
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </button>
          ))}
        </div>

        {!collapsed && (
          <div>
            <button
              onClick={() => toggleSection('pages')}
              className="w-full flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400 mb-3 hover:text-gray-700 dark:hover:text-gray-200"
            >
              Pages
              {expandedSections.pages ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            
            {expandedSections.pages && (
              <div className="space-y-1 ml-3">
                {pageItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView('orders')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-150 ${
                      currentView === 'orders' && item.id === 'profile'
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;