import { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// date range selector css
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css";



const ReservationCard = () => {
    return (
        <>
            <div className="w-full min-h-[315px] rounded-xl border border-[#dddddd] sticky top-32 shadow-customShadow p-6">
                <div className="flex felx-row font-poppins justify-between items-start">
                    <div className="flex flex-col">
                        <h3 className="text-[22px] text-[#222222] font-semibold">
                            $100 {/* Hardcoded price */}
                        </h3>
                        <p className="text-[#313131] text-sm">Total before taxes</p>
                    </div>
                    <span className="text-sm text-[#222222] flex flex-row gap-1 items-center mt-2">
                        <AiFillStar size={18} />
                        4.5 {/* Hardcoded rating */}
                        <span>
                            <span>·</span>
                            <span>200</span> {/* Hardcoded number of reviews */}
                        </span>
                    </span>
                </div>

                <div className="rounded-tl-lg font-poppins rounded-tr-lg border border-[#b9b9b9] w-full min-h-[60px] mt-6 relative flex flex-col">
                    {/* Dates */}
                    <div className="grid grid-cols-2 cursor-pointer">
                        <div className="px-3 py-3">
                            <p className="text-[10px] text-black font-semibold uppercase">
                                check-in
                            </p>
                            <p className="text-sm text-[#222222]">04/11/2024</p> {/* Hardcoded date */}
                        </div>
                        <div className="px-3 py-3 border-l border-[#b9b9b9]">
                            <p className="text-[10px] text-black font-semibold uppercase">
                                checkout
                            </p>
                            <p className="text-sm text-[#222222]">04/12/2024</p> {/* Hardcoded date */}
                        </div>
                    </div>
                </div>

                <div className="rounded-bl-lg font-poppins rounded-br-lg border border-[#b9b9b9] w-full min-h-[50px] cursor-pointer relative">
                    {/* Guests */}
                    <div className="px-3 py-3 flex flex-row items-center justify-between">
                        <div className="flex flex-col">
                            <p className="text-[10px] text-black font-semibold uppercase">
                                guests
                            </p>
                            <p className="text-sm text-[#222222]">1 guest</p> {/* Hardcoded number of guests */}
                        </div>
                        <div>
                            <MdKeyboardArrowDown size={26} /> {/* Down arrow icon */}
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-center font-poppins rounded-md">
                    <button className="capitalize py-3 w-full bg-[#B01432] hover:bg-[#d90b63] transition duration-200 ease-in text-white font-medium text-sm rounded-md">
                        reserve
                    </button>
                </div>
            </div>
        </>
    );
};

export default ReservationCard;
