import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const TotalSalesChart = () => {
  const data = [
    { name: 'Direct', value: 300.56, color: '#3B82F6' },
    { name: 'Affiliate', value: 135.18, color: '#8B5CF6' },
    { name: 'Sponsored', value: 154.02, color: '#10B981' },
    { name: 'E-mail', value: 48.96, color: '#F59E0B' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Sales</h3>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="relative w-32 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900 dark:text-white">38.6%</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between min-w-0">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white ml-4">${item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalSalesChart;