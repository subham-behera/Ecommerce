import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between mb-6">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Help</h3>
                        <ul>
                            <li><a href="/faq" className="hover:underline">FAQ</a></li>
                            <li><a href="/shipping" className="hover:underline">Shipping Information</a></li>
                            <li><a href="/returns" className="hover:underline">Returns & Exchanges</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <form>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full p-2 mb-4 rounded-md text-gray-800"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center text-gray-400 mt-6">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
