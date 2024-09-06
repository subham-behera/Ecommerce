import { BiSupport } from "react-icons/bi";
import { CiLocationOn, CiWallet } from "react-icons/ci";
import { MdOutlineAccountBalanceWallet, MdOutlineLocalShipping } from "react-icons/md";

function Banner() {
    return (
        <div className="w-screen">
            <div className="bg-gray-100 text-gray-700 max-h-8 flex flex-row justify-between px-6 py-1">
                <div className="flex flex-row items-center gap-2">
                    <CiWallet/>
                    Welcome to Blaze Store
                </div>
                <div className="flex flex-row justify-between gap-x-4">
                    <div className="flex flex-row items-center gap-2">
                        <CiLocationOn/>
                        Store Location
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <MdOutlineLocalShipping/>
                        Ship Anywhere
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <MdOutlineAccountBalanceWallet/>
                        Free wallet
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-4 items-center">
                <span className="font-bold font-sans text-4xl">Blaze.</span>
                <div></div>
                <div className="flex flex-row items-center gap-x-3">
                    <BiSupport className="text-4xl"/>
                    <div className="flex flex-col text-right">
                        <span className="text-xl font-semibold">+91 9874589655</span>
                        <span>subham123@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;