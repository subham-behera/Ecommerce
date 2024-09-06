import { TbDirectionHorizontal } from "react-icons/tb";
import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import FeaturedCard from "../components/Home/FeaturedCard";
import Landing from "../components/Home/Landing";
import Live from "../components/Home/Live";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const imageUrls = [
    'https://cdn.pixabay.com/photo/2024/03/26/11/57/woman-8656653_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/08/23/14/50/online-shopping-6567977_1280.png',
    'https://cdn.pixabay.com/photo/2019/10/10/08/11/shopping-4538982_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/08/03/10/00/credit-card-5459711_1280.png'
];

function Home() {
    return (
        <div>
            <Banner/>
            <Navbar/>
            <Landing images={imageUrls} />
            <Category/>
            <Live/>
            <div className="flex flex-row justify-between px-12 items-center mt-6">
                <span className="text-2xl font-bold">Featured Products</span>
                <TbDirectionHorizontal className="text-4xl"/>
            </div>
            <div className="flex flex-wrap justify-center gap-8 p-6">
                <FeaturedCard
                    category="Electronics"
                    title="Smartphone XYZ"
                    price="29999"
                    image="laptop.png"
                />
                <FeaturedCard
                    category="Home Appliances"
                    title="Air Conditioner ABC"
                    price="45999"
                    image="laptop.png"
                />
                <FeaturedCard
                    category="Fashion"
                    title="Leather Jacket"
                    price="7999"
                    image="laptop.png"
                />
                <FeaturedCard
                    category="Fashion"
                    title="Leather Jacket"
                    price="7999"
                    image="laptop.png"
                />
            </div>
            <div className="flex flex-row justify-between px-12 items-center mt-6">
                <span className="text-2xl font-bold">Recently Added</span>
                <TbDirectionHorizontal className="text-4xl"/>
            </div>
            <div className="flex flex-wrap justify-center gap-8 p-6">
                <FeaturedCard
                    category="Electronics"
                    title="Smartphone XYZ"
                    price="29999"
                    image="laptop.png"
                />
                <FeaturedCard
                    category="Home Appliances"
                    title="Air Conditioner ABC"
                    price="45999"
                    image="laptop.png"
                />
                <FeaturedCard
                    category="Fashion"
                    title="Leather Jacket"
                    price="7999"
                    image="laptop.png"
                />
                <FeaturedCard
                    category="Fashion"
                    title="Leather Jacket"
                    price="7999"
                    image="laptop.png"
                />
            </div>
            <Footer/>
        </div>
    );
}

export default Home;