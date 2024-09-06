import React, { useState } from 'react';

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [cartItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 1 },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Checkout Submitted!');
    // Add your checkout logic here
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Details Form */}
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={billingDetails.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={billingDetails.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={billingDetails.address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={billingDetails.city}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={billingDetails.postalCode}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={billingDetails.country}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Checkout
          </button>
        </form>

        {/* Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t mt-4 pt-2 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
