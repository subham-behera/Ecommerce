import { useState, useEffect } from 'react';

function Landing({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000);
        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div className="relative w-full h-80 overflow-hidden bg-gray-200">
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src={images[currentIndex]}
                    alt="carousel"
                    className="w-full h-full object-cover transition-transform duration-1000"
                />
            </div>

            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
            >
                &lt;
            </button>

            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300"
            >
                &gt;
            </button>
        </div>
    );
}

export default Landing;
