import { FcRating } from "react-icons/fc";

function Reviews({ profileImg, rating, reviewText, reviewerName, reviewDate }) {
    return (
        <div className="flex flex-row items-start px-4 py-4 max-w-4xl mx-auto bg-white shadow-md rounded-lg mb-4">
            <div className="flex-none w-16">
                <img src={profileImg} alt="Profile" className="h-12 w-12 rounded-full border border-gray-300 shadow-sm"/>
            </div>
            <div className="ml-4 flex-1">
                <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, index) => (
                        <FcRating key={index} className={`text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}/>
                    ))}
                </div>
                <p className="text-gray-800 mb-3 text-sm">{reviewText}</p>
                <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-semibold text-lg">{reviewerName}</span>
                    <span className="text-gray-600 text-sm">{reviewDate}</span>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
