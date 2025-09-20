import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricCard = ({ title, value, change, trend, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 dark:bg-slate-700 rounded-lg">
            <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
          <div className={`flex items-center space-x-1 text-sm ${
            trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{change}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;