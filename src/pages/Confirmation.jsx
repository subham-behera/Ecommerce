import React from 'react';

const Confirmation = () => {
  // Mock order details
  const orderDetails = {
    orderNumber: '123456789',
    orderDate: 'September 5, 2024',
    items: [
      { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
      { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
    ],
    total: 109.97,
  };

  const handleBackToHome = () => {
    alert('Redirecting to Home');
    // Implement your own logic to go back to home
  };

  const handleViewOrderDetails = () => {
    alert('Viewing Order Details');
    // Implement your own logic to view order details
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-600">Thank You for Your Order!</h1>
        <p className="text-center text-gray-700 mb-4">Your order has been placed successfully.</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <div className="border-t pt-2 mb-4">
            <p className="text-gray-600">Order Number: <span className="font-semibold">{orderDetails.orderNumber}</span></p>
            <p className="text-gray-600">Order Date: <span className="font-semibold">{orderDetails.orderDate}</span></p>
          </div>
          <ul className="mb-4">
            {orderDetails.items.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t pt-2 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${orderDetails.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={handleBackToHome}
            className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
          <button
            onClick={handleViewOrderDetails}
            className="py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
          >
            View Order Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
