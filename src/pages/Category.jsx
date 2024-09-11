import React from "react";
import FeaturedCard from "../components/Home/FeaturedCard"; // Ensure the path is correct based on your folder structure
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
    {
        category: "Electronics",
        title: "iPhone 14 Pro Max",
        price: 129999,
        discountPrice: 119999,
        image: "https://cdn.pixabay.com/photo/2022/09/18/09/07/iphone-14-pro-max-7465246_1280.jpg",
        rating: 4.9,
        reviews: 200
    },
    {
        category: "Electronics",
        title: "Sony WH-1000XM4 Headphones",
        price: 29999,
        discountPrice: 24999,
        image: "https://cdn.pixabay.com/photo/2020/07/21/06/34/headphones-5426481_1280.jpg",
        rating: 4.9,
        reviews: 500
    },
    {
        category: "Electronics",
        title: "Apple MacBook Pro 16-inch",
        price: 239999,
        image: "https://cdn.pixabay.com/photo/2019/12/25/12/41/apple-4710570_1280.jpg",
        rating: 4.9,
        reviews: 320
    },
    {
        category: "Electronics",
        title: "Samsung Galaxy S23 Ultra",
        price: 114999,
        discountPrice: 99999,
        image: "https://cdn.pixabay.com/photo/2023/01/21/17/21/samsung-7763341_1280.jpg",
        rating: 4.8,
        reviews: 150
    },
    {
        category: "Electronics",
        title: "Canon EOS R5",
        price: 259999,
        discountPrice: 239999,
        image: "https://cdn.pixabay.com/photo/2021/10/08/16/17/camera-6738420_1280.jpg",
        rating: 4.8,
        reviews: 75
    },
    {
        category: "Electronics",
        title: "Sony PlayStation 5",
        price: 49999,
        image: "https://cdn.pixabay.com/photo/2021/06/09/18/45/playstation-6301364_1280.jpg",
        rating: 4.9,
        reviews: 600
    },

    // Home Appliances
    {
        category: "Home Appliances",
        title: "LG Smart Washing Machine",
        price: 48999,
        discountPrice: 44999,
        image: "https://cdn.pixabay.com/photo/2021/03/22/15/47/washing-machine-6115182_1280.jpg",
        rating: 4.5,
        reviews: 85
    },
    {
        category: "Home Appliances",
        title: "Dyson V11 Cord-Free Vacuum Cleaner",
        price: 59999,
        discountPrice: 54999,
        image: "https://cdn.pixabay.com/photo/2019/07/26/04/50/vacuum-cleaner-4366174_1280.jpg",
        rating: 4.6,
        reviews: 250
    },
    {
        category: "Home Appliances",
        title: "Samsung French Door Refrigerator",
        price: 89999,
        discountPrice: 84999,
        image: "https://cdn.pixabay.com/photo/2022/04/13/15/00/fridge-7126980_1280.jpg",
        rating: 4.7,
        reviews: 120
    },
    {
        category: "Home Appliances",
        title: "Philips Air Fryer",
        price: 11999,
        discountPrice: 9999,
        image: "https://cdn.pixabay.com/photo/2021/03/02/20/51/air-fryer-6068270_1280.jpg",
        rating: 4.8,
        reviews: 200
    },
    {
        category: "Home Appliances",
        title: "Bosch Dishwasher",
        price: 54999,
        discountPrice: 49999,
        image: "https://cdn.pixabay.com/photo/2021/06/08/12/01/dishwasher-6300663_1280.jpg",
        rating: 4.6,
        reviews: 100
    },
    {
        category: "Home Appliances",
        title: "Breville Espresso Machine",
        price: 29999,
        image: "https://cdn.pixabay.com/photo/2021/02/08/14/15/coffee-machine-5982517_1280.jpg",
        rating: 4.7,
        reviews: 180
    },

    // Fashion
    {
        category: "Fashion",
        title: "Men's Leather Jacket",
        price: 9999,
        image: "https://cdn.pixabay.com/photo/2017/06/10/07/29/jacket-2395299_1280.jpg",
        rating: 4.7,
        reviews: 150
    },
    {
        category: "Fashion",
        title: "Women's Designer Handbag",
        price: 14999,
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/23/handbag-1237757_1280.jpg",
        rating: 4.8,
        reviews: 300
    },
    {
        category: "Fashion",
        title: "Ray-Ban Aviator Sunglasses",
        price: 12999,
        image: "https://cdn.pixabay.com/photo/2015/10/18/14/27/sunglasses-994593_1280.jpg",
        rating: 4.8,
        reviews: 400
    },
    {
        category: "Fashion",
        title: "Levi's 501 Original Jeans",
        price: 6999,
        image: "https://cdn.pixabay.com/photo/2018/03/12/09/57/jeans-3219250_1280.jpg",
        rating: 4.6,
        reviews: 220
    },
    {
        category: "Fashion",
        title: "Adidas Ultraboost 22",
        price: 14999,
        image: "https://cdn.pixabay.com/photo/2021/07/16/16/46/ultraboost-6465747_1280.jpg",
        rating: 4.7,
        reviews: 310
    },
    {
        category: "Fashion",
        title: "Polo Ralph Lauren Shirt",
        price: 4999,
        image: "https://cdn.pixabay.com/photo/2017/10/31/21/18/polo-2918244_1280.jpg",
        rating: 4.6,
        reviews: 170
    },
];

function Category() {
    const categories = ["Electronics", "Home Appliances", "Fashion"];
    
    return (
        <div>
            <Navbar />
            <div className="p-4">
                {categories.map((category) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-2xl font-bold mb-3">{category}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {products
                                .filter(product => product.category === category)
                                .map(product => (
                                    <FeaturedCard
                                        key={product.title}
                                        category={product.category}
                                        title={product.title}
                                        price={product.price}
                                        discountPrice={product.discountPrice}
                                        image={product.image}
                                        rating={product.rating}
                                        reviews={product.reviews}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Category;
