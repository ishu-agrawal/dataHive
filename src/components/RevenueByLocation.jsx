const RevenueByLocation = () => {
  const locations = [
    { name: 'New York', percentage: '72%', color: 'bg-blue-500' },
    { name: 'San Francisco', percentage: '39%', color: 'bg-blue-400' },
    { name: 'Sydney', percentage: '25%', color: 'bg-blue-300' },
    { name: 'Singapore', percentage: '61%', color: 'bg-blue-600' },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue by Location</h3>
      </div>
      
      <div className="relative bg-gray-100 dark:bg-slate-700 rounded-lg p-4 mb-6 h-48 flex items-center justify-center">
        <div className="text-gray-400 dark:text-gray-500 text-sm">World Map Visualization</div>
        {/* World map dots would go here - simplified for demo */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
      </div>
      
      <div className="space-y-4">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${location.color}`}></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">{location.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{location.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByLocation;