import { useState } from "react";

import { MdOutlineDelete } from "react-icons/md";
import Items from "../components/Cart/Items";

function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, title: "Celeb Tshirt", image: "tshirt0.jpg", desc: "Size: 42 | Color: White", quantity: 1, price: 325 },
        { id: 2, title: "Stylish Hoodie", image: "hoodie0.jpg", desc: "Size: L | Color: Black", quantity: 2, price: 550 },
        { id: 3, title: "Casual Jeans", image: "jeans0.jpg", desc: "Size: 34 | Color: Blue", quantity: 1, price: 400 },
        { id: 4, title: "Leather Jacket", image: "jacket0.jpg", desc: "Size: M | Color: Brown", quantity: 1, price: 900 },
        { id: 5, title: "Sports Watch", image: "watch0.jpg", desc: "Color: Black", quantity: 1, price: 150 },
        { id: 6, title: "Sneakers", image: "sneakers0.jpg", desc: "Size: 10 | Color: White", quantity: 1, price: 200 }
    ]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxAmount = totalAmount * 0.1; // Example tax calculation
    const subtotal = totalAmount + taxAmount;

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 lg:w-3/4">
                    <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                    <div className="border-b-2 border-gray-300 mb-4"></div>
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-white shadow-md rounded mb-4">
                            <Items {...item} />
                            <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800">
                                <MdOutlineDelete className="h-6 w-6" />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/4 lg:ml-4">
                    <div className="bg-gray-100 p-4 rounded shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Tax</span>
                            <span>${taxAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold mb-4">
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-black text-white py-2 rounded mb-2">Confirm Payment</button>
                        <button className="w-full border border-gray-700 text-gray-700 py-2 rounded">Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
