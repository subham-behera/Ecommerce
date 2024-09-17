import { TbDirectionHorizontal } from "react-icons/tb";
import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import FeaturedCard from "../components/Home/FeaturedCard";
import Landing from "../components/Home/Landing";
import Live from "../components/Home/Live";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PriceOffBanner from "../components/Home/PriceOffBanner";

const sneakerImageUrls = [
    'https://img.freepik.com/premium-photo/poster-with-pair-sneakers-that-says-escape-gentlemans-style_1090394-113350.jpg?w=740',
    'https://img.freepik.com/premium-photo/pair-black-sneakers-with-words-you-walk-it_1090394-113358.jpg?w=1060',
    'https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1555.jpg?w=1060&t=st=1726566788~exp=1726567388~hmac=02b95bb5891d15f50893344307214b8fbbbc7aefdee5c167af8b7a4ce96309ff',
    'https://img.freepik.com/premium-photo/black-white-sneaker-that-says-tape-overall-style-brand_1090394-113357.jpg?w=1060'
];

function Home() {
    return (
        <div>
            <Banner />
            <Navbar />
            <Landing images={sneakerImageUrls} />
            <Category />
            <Live />
            <div className="flex flex-row justify-between px-12 items-center mt-6">
                <span className="text-2xl font-bold">Featured Sneakers</span>
                <TbDirectionHorizontal className="text-4xl" />
            </div>
            <div className="flex flex-wrap justify-center gap-8 p-6">
                <FeaturedCard
                    category="Sneakers"
                    title="Nike Air Jordan 1 Retro High OG"
                    price="20000"
                    discountPrice="18500"
                    image="https://images.pexels.com/photos/1456738/pexels-photo-1456738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    rating={4.8}
                    reviews={320}
                />
                <FeaturedCard
                    category="Sneakers"
                    title="Adidas Yeezy Boost 350 V2"
                    price="22000"
                    discountPrice="21000"
                    image="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600"
                    rating={4.9}
                    reviews={250}
                />
                <FeaturedCard
                    category="Sneakers"
                    title="Nike Air Max 97"
                    price="18000"
                    image="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=600"
                    rating={4.7}
                    reviews={400}
                    inStock={true}
                />
                <FeaturedCard
                    category="Sneakers"
                    title="Puma RS-X3 Puzzle"
                    price="16000"
                    image="https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600"
                    rating={4.5}
                    reviews={180}
                />
            </div>
            <div className="flex flex-row justify-between px-12 items-center mt-6">
                <span className="text-2xl font-bold">Recently Added</span>
                <TbDirectionHorizontal className="text-4xl" />
            </div>
            <div className="flex flex-wrap justify-center gap-8 p-6">
                <FeaturedCard
                    category="Sneakers"
                    title="New Balance 550"
                    price="15000"
                    discountPrice="14000"
                    image="https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600"
                    rating={4.8}
                    reviews={350}
                />
                <FeaturedCard
                    category="Sneakers"
                    title="Nike Dunk Low 'Panda'"
                    price="17000"
                    discountPrice="16000"
                    image="https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600"
                    rating={4.9}
                    reviews={500}
                />
                <FeaturedCard
                    category="Sneakers"
                    title="Converse Chuck 70 High Top"
                    price="10000"
                    image="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600"
                    rating={4.7}
                    reviews={410}
                />
                <FeaturedCard
                    category="Sneakers"
                    title="Vans Old Skool"
                    price="8000"
                    image="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
                    rating={4.6}
                    reviews={270}
                />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
