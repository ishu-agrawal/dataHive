import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ProjectionsChart = () => {
  const data = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 35 },
    { name: 'Mar', value: 25 },
    { name: 'Apr', value: 40 },
    { name: 'May', value: 30 },
    { name: 'Jun', value: 45 },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projections vs Actuals</h3>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748b' }}
            />
            <YAxis hide />
            <Bar 
              dataKey="value" 
              fill="#93C5FD"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionsChart;