import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";


function Navbar() {
    return (
        <div className="bg-blue-600 text-white flex flex-row justify-between px-8 h-12 mb-2">
            <div className="flex flex-row items-center gap-x-5 font-medium">
                <button className="flex flex-row items-center gap-x-3">
                    <MdMenu className="text-xl"/>
                    <span>Shop By category</span>
                </button>
                <a href="" className="hover:bg-blue-800 h-12 flex px-2 items-center">Home</a>
                <a href="" className="hover:bg-blue-800 h-12 flex px-2 items-center">Pages</a>
                <a href="" className="hover:bg-blue-800 h-12 flex px-2 items-center">Shop</a>
                <a href="" className="hover:bg-blue-800 h-12 flex px-2 items-center">Reviews</a>
            </div>
            <div className="flex flex-row items-center gap-x-5 text-2xl">
                <a href="/confirmation" className="hover:text-blue-300 duration-300"><IoMdPerson/></a>
                <a href="/cart" className="hover:text-blue-300 duration-300"><IoCartOutline/></a>
                <a href="/checkout" className="hover:text-blue-300 duration-300"><FaMoneyCheckAlt/></a>
            </div>
        </div>
    );
}

export default Navbar;