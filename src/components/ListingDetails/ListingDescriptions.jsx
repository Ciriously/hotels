import ListingDescriptionPopup from "./ListingDescriptionPopup";
import { amenities } from "./amenitiesApi";
import { AiOutlineRight } from "react-icons/ai";

const ListingDescriptions = () => {
    const listingData = {
        location: {
            city: {
                latitude: 37.7749,
                longitude: -122.4194,
            },
        },
        floorPlan: {
            guests: 4,
            bedrooms: 2,
            beds: 2,
            bathroomsNumber: 1,
        },
        description: "Get the celebrity treatment with world-class service at ITC Royal Bengal, a Luxury Collection Hotel, Kolkata\n\nSituated in Kolkata, 4.5 km from Sealdah Railway Station, ITC Royal Bengal, a Luxury Collection Hotel, Kolkata features accommodation with a fitness centre, free private parking, a garden an...",
        amenities: ["Washer", "Kitchen", "Parking, Washer"],
    };

    const author = {
        name: {
            firstName: "John",
        },
        profileImg: "https://images.holyayodhya.com/images/hotel/4024543df88862b544a11693d5cb2adc.jpeg",

    };

    return (
        <>
            <div className="flex flex-row justify-between items-center max-h-16">
                <div className="flex flex-col font-poppins gap-1 text-[#222222]">
                    <h2 className="text-xl md:text-[22px] font-medium">
                        Entire Cabin is hosted by {author?.name?.firstName}
                    </h2>
                    <p className="text-sm md:text-base">
                        {listingData?.floorPlan?.guests} guests ·{" "}
                        {listingData?.floorPlan?.bedrooms} bedroom ·{" "}
                        {listingData?.floorPlan?.beds} beds ·{" "}
                        {listingData?.floorPlan?.bathroomsNumber} bath
                    </p>
                </div>
                <div>
                    {author?.profileImg ? (
                        <img
                            src={author?.profileImg}
                            alt="user"
                            className="w-16 rounded-full"
                        />
                    ) : (
                        <div className="w-14 h-14 bg-[#222222] flex items-center justify-center rounded-full">
                            <p className="text-[#efefef] text-lg font-semibold">
                                {author?.name?.firstName?.slice(0, 1)}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <hr className="h-[1.2px] w-full font-poppins bg-[#dddddd] my-8" />
            <div>
                <p className="whitespace-pre-wrap font-poppins">
                    {listingData?.description?.slice(0, 300)}...
                </p>
            </div>
            <button
                className="flex pt-7 underline font-poppins text-black font-medium items-center gap-1 max-w-[120px]"
                onClick={() => document.getElementById("listing_modal").showModal()}
            >
                Show more
                <AiOutlineRight size={18} />
            </button>
            <hr className="h-[1.2px] w-full bg-[#dddddd] my-8" />
            <div className="flex flex-col gap-6">
                <h2 className="text-[22px] font-poppins text-[#222222] font-medium">
                    What this place offers
                </h2>
                <div className="grid grid-cols-2 gap-x-3 md:gap-x-0 gap-y-4">
                    {amenities.map((item, i) => {
                        if (listingData?.amenities?.includes(item?.name)) {
                            return (
                                <div key={i} className="flex flex-row gap-4 items-center">
                                    <item.svg size={26} opacity={0.8} />
                                    <p className="text-xs sm:text-sm md:text-base text-[#222222]">
                                        {item?.name}
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <hr className="h-[1.2px] w-full bg-[#dddddd] my-8" />
            <ListingDescriptionPopup description={listingData?.description} />
        </>
    );
};

export default ListingDescriptions;