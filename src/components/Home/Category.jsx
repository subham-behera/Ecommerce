import { IoPhonePortraitOutline, IoTvOutline, IoShirtOutline, IoHomeOutline, IoTrophyOutline, IoBookOutline, IoBasketballOutline, IoHeartOutline } from "react-icons/io5";

function Category() {
    return (
        <div className="flex flex-wrap items-center justify-around px-6 py-8">
            <div className="flex flex-col items-center">
                <IoPhonePortraitOutline className="text-3xl text-blue-600"/>
                <span className="font-semibold text-gray-800 mt-2">Electronics</span>
            </div>
            <div className="flex flex-col items-center">
                <IoTvOutline className="text-3xl text-green-600"/>
                <span className="font-semibold text-gray-800 mt-2">Appliances</span>
            </div>
            <div className="flex flex-col items-center">
                <IoShirtOutline className="text-3xl text-red-600"/>
                <span className="font-semibold text-gray-800 mt-2">Clothing</span>
            </div>
            <div className="flex flex-col items-center">
                <IoHomeOutline className="text-3xl text-purple-600"/>
                <span className="font-semibold text-gray-800 mt-2">Home & Furniture</span>
            </div>
            <div className="flex flex-col items-center">
                <IoTrophyOutline className="text-3xl text-yellow-600"/>
                <span className="font-semibold text-gray-800 mt-2">Toys</span>
            </div>
            <div className="flex flex-col items-center">
                <IoBookOutline className="text-3xl text-orange-600"/>
                <span className="font-semibold text-gray-800 mt-2">Books</span>
            </div>
            <div className="flex flex-col items-center">
                <IoBasketballOutline className="text-3xl text-teal-600"/>
                <span className="font-semibold text-gray-800 mt-2">Sports & Outdoors</span>
            </div>
            <div className="flex flex-col items-center">
                <IoHeartOutline className="text-3xl text-pink-600"/>
                <span className="font-semibold text-gray-800 mt-2">Beauty & Personal Care</span>
            </div>
        </div>
    );
}

export default Category;
