import React, { useState } from 'react';

const SearchContainer = () => {
    const [searchHotels, setSearchHotels] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState('');

    const handleSearchHotelsChange = (e) => {
        setSearchHotels(e.target.value);
    };

    const handleCheckInDateChange = (e) => {
        setCheckInDate(e.target.value);
    };

    const handleCheckOutDateChange = (e) => {
        setCheckOutDate(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    const handleSearch = () => {
        // Handle search logic here
    };

    return (
        <div className="flex justify-center">
            <div className="bg-white w-5/6 font-poppins rounded-3xl shadow-xl p-4">
                <div className="flex">
                    <div className="flex-1 px-4 border-r border-black">
                        <label className="block mb-2 font-medium  text-black" htmlFor="searchHotels">Search where are you gonna stay?</label>
                        <input
                            type="text"
                            id="searchHotels"
                            placeholder='Search by hotel or neighbourhood'
                            className="w-full px-4 py-4 border border-black rounded-md"
                            value={searchHotels}
                            onChange={handleSearchHotelsChange}
                        />
                    </div>
                    <div className="separator"></div>
                    <div className="flex-1 px-4 border-r border-black">
                        <label className="block mb-2 font-medium text-black" htmlFor="checkInDate">Check-In Date</label>
                        <input
                            type="date"
                            id="checkInDate"
                            className="w-full px-4 py-4 border  border-black rounded-md"
                            value={checkInDate}
                            onChange={handleCheckInDateChange}
                        />
                    </div>
                    <div className="separator"></div>
                    <div className="flex-1 px-4 border-r font-medium border-black">
                        <label className="block mb-2 text-black" htmlFor="checkOutDate">Check-Out Date</label>
                        <input
                            type="date"
                            id="checkOutDate"
                            className="w-full px-4 py-4 border border-black rounded-md"
                            value={checkOutDate}
                            onChange={handleCheckOutDateChange}
                        />
                    </div>
                    <div className="separator"></div>
                    <div className="flex-1 px-4 border-r font-medium border-black">
                        <label className="block mb-2 text-black" htmlFor="guests">Guests</label>
                        <input
                            type="number"
                            id="guests"
                            className="w-full px-4 py-4 border border-black rounded-md"
                            value={guests}
                            onChange={handleGuestsChange}
                        />
                    </div>
                    <div className="separator"></div>
                    <div className="flex items-end px-2 py-1">
                        <button className="bg-[#B01432] text-xl text-white px-6 py-4 rounded-md" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchContainer;
