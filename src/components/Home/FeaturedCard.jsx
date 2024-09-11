import { FaRegHeart, FaStar, FaCartPlus } from "react-icons/fa";
import { SlDirections } from "react-icons/sl";

function FeaturedCard({
    category,
    title,
    price,
    image,
    rating = 0,
    reviews = 0,
    discountPrice = null,
    inStock = true
}) {
    const displayPrice = discountPrice ? (
        <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 line-through">₹{price}</span>
            <span className="text-xl font-bold text-red-500 mt-1">₹{discountPrice}</span>
        </div>
    ) : (
        <span className="text-xl font-bold text-gray-900">₹{price}</span>
    );

    return (
        <div className="w-[250px] h-[470px] rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden relative">
            {!inStock && (
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold p-2">
                    Out of Stock
                </div>
            )}
            <div className="flex flex-row justify-between items-start p-4">
                <span className="text-gray-700 text-sm font-semibold">{category}</span>
                <div className="flex space-x-2">
                    <FaRegHeart className="text-red-500 hover:text-red-600 transition-colors duration-300" />
                    <SlDirections className="text-gray-500 hover:text-gray-600 transition-colors duration-300" />
                </div>
            </div>
            <div className="px-4">
                <img src={image} alt={title} loading="lazy" className="w-full h-[180px] object-cover rounded-t-lg" />
            </div>
            <div className="p-4 flex flex-col justify-between h-[200px]">
                <div>
                    <span className="block text-lg font-semibold text-gray-800 truncate">{title}</span>
                    <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                className={`text-yellow-500 ${index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}`}
                            />
                        ))}
                    </div>
                    <span className="block text-sm text-gray-600 mt-1">{reviews} reviews</span>
                    {displayPrice}
                </div>
                <div className="flex space-x-2 mt-4 items-center justify-between">
                    <button
                        disabled={!inStock}
                        className={`bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center ${!inStock && "opacity-50 cursor-not-allowed"}`}
                    >
                        <FaCartPlus className="mr-2" /> Add to Cart
                    </button>
                    <a href="/details" className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-300">
                        Details
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCard;
