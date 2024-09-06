import { useState } from "react";

function Items({ title = "Celeb Tshirt", image = "tshirt0.jpg", desc = "Size: 42 | Color: White", quantity = 1, price = 325 }) {
    const [itemQuantity, setItemQuantity] = useState(quantity);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10) || 0;
        setItemQuantity(newQuantity);
    };

    const itemPrice = price * itemQuantity;

    return (
        <div className="flex items-center space-x-4">
            <img src={image} alt={title} className="w-16 h-16 rounded-md object-cover" />
            <div className="flex-1">
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="text-sm text-gray-600">{desc}</p>
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-gray-900">Qty:</span>
                <input
                    type="number"
                    value={itemQuantity}
                    onChange={handleQuantityChange}
                    className="border rounded-sm px-2 py-1 w-16 text-center"
                />
                <span className="text-gray-900">${itemPrice.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default Items;
