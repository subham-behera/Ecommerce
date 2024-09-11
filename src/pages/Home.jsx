import { TbDirectionHorizontal } from "react-icons/tb";
import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import FeaturedCard from "../components/Home/FeaturedCard";
import Landing from "../components/Home/Landing";
import Live from "../components/Home/Live";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PriceOffBanner from "../components/Home/PriceOffBanner";

const imageUrls = [
    'https://cdn.pixabay.com/photo/2024/03/26/11/57/woman-8656653_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/08/23/14/50/online-shopping-6567977_1280.png',
    'https://cdn.pixabay.com/photo/2019/10/10/08/11/shopping-4538982_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/08/03/10/00/credit-card-5459711_1280.png'
];

function Home() {
    return (
        <div>
            <Banner />
            <Navbar />
            <Landing images={imageUrls} />
            <Category />
            <Live />
            <div className="flex flex-row justify-between px-12 items-center mt-6">
                <span className="text-2xl font-bold">Featured Products</span>
                <TbDirectionHorizontal className="text-4xl" />
            </div>
            <div className="flex flex-wrap justify-center gap-8 p-6">
                <FeaturedCard
                    category="Electronics"
                    title="iPhone 14 Pro Max"
                    price="129999"
                    discountPrice="119999"
                    image="https://cdn.pixabay.com/photo/2022/09/18/09/07/iphone-14-pro-max-7465246_1280.jpg"
                    rating={4.9}
                    reviews={200}
                />
                <FeaturedCard
                    category="Home Appliances"
                    title="LG Smart Washing Machine"
                    price="48999"
                    discountPrice="44999"
                    image="https://cdn.pixabay.com/photo/2021/03/22/15/47/washing-machine-6115182_1280.jpg"
                    rating={4.5}
                    reviews={85}
                />
                <FeaturedCard
                    category="Fashion"
                    title="Men's Leather Jacket"
                    price="9999"
                    image="https://cdn.pixabay.com/photo/2017/06/10/07/29/jacket-2395299_1280.jpg"
                    rating={4.7}
                    reviews={150}
                    inStock={true}
                />
                <FeaturedCard
                    category="Fashion"
                    title="Women's Designer Handbag"
                    price="14999"
                    image="https://cdn.pixabay.com/photo/2016/03/05/19/23/handbag-1237757_1280.jpg"
                    rating={4.8}
                    reviews={300}
                />
            </div>
            <div className="flex flex-row justify-between px-12 items-center mt-6">
                <span className="text-2xl font-bold">Recently Added</span>
                <TbDirectionHorizontal className="text-4xl" />
            </div>
            <div className="flex flex-wrap justify-center gap-8 p-6">
                <FeaturedCard
                    category="Electronics"
                    title="Sony WH-1000XM4 Headphones"
                    price="29999"
                    discountPrice="24999"
                    image="https://cdn.pixabay.com/photo/2020/07/21/06/34/headphones-5426481_1280.jpg"
                    rating={4.9}
                    reviews={500}
                />
                <FeaturedCard
                    category="Home Appliances"
                    title="Dyson V11 Cord-Free Vacuum Cleaner"
                    price="59999"
                    discountPrice="54999"
                    image="https://cdn.pixabay.com/photo/2019/07/26/04/50/vacuum-cleaner-4366174_1280.jpg"
                    rating={4.6}
                    reviews={250}
                />
                <FeaturedCard
                    category="Fashion"
                    title="Ray-Ban Aviator Sunglasses"
                    price="12999"
                    image="https://cdn.pixabay.com/photo/2015/10/18/14/27/sunglasses-994593_1280.jpg"
                    rating={4.8}
                    reviews={400}
                />
                <FeaturedCard
                    category="Electronics"
                    title="Apple MacBook Pro 16-inch"
                    price="239999"
                    image="https://cdn.pixabay.com/photo/2019/12/25/12/41/apple-4710570_1280.jpg"
                    rating={4.9}
                    reviews={320}
                />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
