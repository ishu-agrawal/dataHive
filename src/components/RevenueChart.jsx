import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const RevenueChart = () => {
  const data = [
    { name: 'Jan', current: 15, previous: 25 },
    { name: 'Feb', current: 25, previous: 30 },
    { name: 'Mar', current: 35, previous: 20 },
    { name: 'Apr', current: 30, previous: 35 },
    { name: 'May', current: 45, previous: 40 },
    { name: 'Jun', current: 40, previous: 45 },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue</h3>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300">Current Week</span>
            <span className="font-medium text-gray-900 dark:text-white">$58,211</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-300">Previous Week</span>
            <span className="font-medium text-gray-900 dark:text-white">$68,768</span>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <YAxis hide />
            <Line 
              type="monotone" 
              dataKey="current" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="previous" 
              stroke="#64748b" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;