import React, { useState } from 'react';

function Searchpanel() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim()) {
            console.log(`Searching for: ${searchTerm}`);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2">
            <input
                type="text"
                className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 focus:ring-0"
                placeholder="Search products, categories, etc."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                className="ml-2 px-3 py-1 bg-gray-800 text-white text-sm rounded hover:bg-gray-700"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}

export default Searchpanel;
