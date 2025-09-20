import MetricCard from './MetricCard';
import RevenueChart from './RevenueChart';
import ProjectionsChart from './ProjectionsChart';
import RevenueByLocation from './RevenueByLocation';
import TopSellingProducts from './TopSellingProducts';
import TotalSalesChart from './TotalSalesChart';
import { TrendingUp, TrendingDown, ShoppingCart, Users, DollarSign, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Customers',
      value: '3,781',
      change: '+11.01%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Orders',
      value: '1,219',
      change: '-0.03%',
      trend: 'down',
      icon: ShoppingCart
    },
    {
      title: 'Revenue',
      value: '$695',
      change: '+15.03%',
      trend: 'up',
      icon: DollarSign
    },
    {
      title: 'Growth',
      value: '30.1%',
      change: '+6.08%',
      trend: 'up',
      icon: BarChart3
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">eCommerce</h1>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Cards - First 4 stats in 2x2 grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <MetricCard key={index} {...stat} />
            ))}
          </div>
        </div>
        
        {/* Projections Chart */}
        <div className="lg:col-span-1">
          <ProjectionsChart />
        </div>
      </div>

      {/* Revenue and Revenue by Location Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <RevenueByLocation />
        </div>
      </div>

      {/* Top Selling Products and Total Sales Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-1">
          <TopSellingProducts />
        </div>
        <div className="lg:col-span-1">
          <TotalSalesChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;