const TopSellingProducts = () => {
  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Selling Products</h3>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 pb-2 border-b border-gray-200 dark:border-slate-700">
          <div>Name</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-center">Amount</div>
        </div>
        
        {products.map((product, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg px-2 -mx-2 transition-colors duration-150">
            <div className="text-gray-900 dark:text-white truncate">{product.name}</div>
            <div className="text-center text-gray-600 dark:text-gray-300">{product.price}</div>
            <div className="text-center text-gray-600 dark:text-gray-300">{product.quantity}</div>
            <div className="text-center font-medium text-gray-900 dark:text-white">{product.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;