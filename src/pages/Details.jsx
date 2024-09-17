import { FaRegHeart, FaTags } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

import { useState } from "react";
import Reviews from "../components/Details/Reviews";

function Details() {
    const [pic, setPic] = useState("https://img.freepik.com/premium-photo/pair-white-blue-sneakers-with-blue-stripe_1003619-4328.jpg?w=740");

    const handleChange = (image) => {
        setPic(image);
    };

    return (
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto px-6 py-8">
            <div id="left" className="flex flex-col lg:w-1/2">
                <div className="flex flex-col lg:flex-row lg:space-x-4 px-4 py-4">
                    <div className="flex flex-row space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
                        {['https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?w=740&t=st=1726568010~exp=1726568610~hmac=df4604c30287837df4207147272caa4bb1688f9efc50b7ed06a983dd3c71ed77', 
                        'https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?w=740&t=st=1726568034~exp=1726568634~hmac=935255e2b55c61ed9c6620e9b777102e12e67fcadb09b30b6e002ddb4f0b3654',
                        'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=900&t=st=1726568058~exp=1726568658~hmac=dff600d9ea1e1dca3314ee19c5d04d5fe057b5623542f627816d10aa278cb7d7',
                        'https://img.freepik.com/premium-photo/pair-white-blue-sneakers-with-blue-stripe_1003619-4328.jpg?w=740'].map((img, index) => (
                            <button key={index} onClick={() => handleChange(img)} className="flex-none">
                                <img src={img} alt={`Thumbnail ${index + 1}`} className="h-20 w-20 rounded-md shadow-md transition-transform transform hover:scale-105"/>
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src={pic} alt="Main" className="h-[400px] rounded-md shadow-lg"/>
                    </div>
                </div>
                <div className="mt-8 px-4">
                    <div className="flex space-x-6 border-b-2 border-gray-300 pb-4">
                        <a href="#" className="text-lg font-semibold text-gray-800 hover:text-gray-600">Reviews</a>
                        <a href="#" className="text-lg font-semibold text-gray-800 hover:text-gray-600">Rating</a>
                        <a href="#" className="text-lg font-semibold text-gray-800 hover:text-gray-600">Description</a>
                    </div>
                    <div className="mt-6">
                    <Reviews
                        profileImg="https://cdn.pixabay.com/photo/2024/05/18/17/59/girl-8770743_1280.png"
                        rating={5}
                        reviewText="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the changes."
                        reviewerName="Kiara Advani"
                        reviewDate="March 21, 2024"
                    />
                    <Reviews
                        profileImg="profile2.png"
                        rating={4}
                        reviewText="Excellent service and quality. The product exceeded my expectations!"
                        reviewerName="John Doe"
                        reviewDate="April 15, 2024"
                    />
                    </div>
                </div>
            </div>
            <div id="right" className="flex flex-col lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">City Pulse: Sneakers That Move With You</h1>
                <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500">
                        <IoStar/><IoStar/><IoStar/><IoStar/><IoStar/>
                    </div>
                    <p className="text-gray-600 ml-3">157 Reviews</p>
                </div>
                <div className="flex items-center mb-4">
                    <p className="text-5xl font-bold text-gray-900">$49</p>
                    <p className="line-through text-4xl font-bold text-gray-600 ml-4">$65</p>
                </div>
                <div className="flex items-center mb-4 text-gray-700">
                    <FaTags className="text-xl"/>
                    <p className="ml-2 text-lg">Save 50% right now</p>
                </div>
                <h2 className="text-xl font-medium mb-2">Features</h2>
                <ul className="list-disc list-inside mb-4 text-gray-800">
                    <li>Bold colors and dynamic patterns</li>
                    <li>Enhanced grip for varied terrains</li>
                    <li>Sleek design for modern style</li>
                </ul>
                <h2 className="text-xl font-medium mb-2">Colors</h2>
                <div className="flex space-x-3 mb-4">
                    {['red-600', 'blue-600', 'green-600', 'orange-600'].map((color, index) => (
                        <div key={index} className={`w-10 h-10 rounded-full bg-${color} border border-gray-300 cursor-pointer`} />
                    ))}
                </div>
                <div className="flex space-x-4">
                    <button className="px-8 py-3 bg-gray-900 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-gray-800 transition-colors">Add to Cart</button>
                    <button className="p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
                        <FaRegHeart className="w-8 h-8 text-gray-600"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Details;
