import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Menufirst from "@/images/menu1.png"
import MenuSecond from "@/images/menu2.png"
import EventCover from "@/images/EventCover.jpg"
import eventPhoto from "@/images/event.png"
import RestaurantImage from "@/images/restaurant-home.png"
import { useRouter } from 'next/router'

const filters = ["Food Menu", "Bar Menu", "Specials", "Cocktails"];

const menuData = [
    {
        category: "Food Menu",
        image: RestaurantImage,
        metadata: "Starter: Buffalo Caprese, fresh mozzarella with grape tomatoes and basil"
    },
    {
        category: "Food Menu",
        image: eventPhoto,
        metadata: "Dessert: Tiramisu, layered with sweet cream"
    },
    {
        category: "Food Menu",
        image: EventCover,
        metadata: "Chef's Specials of the Day"
    },
    {
        category: "Bar Menu",
        image: MenuSecond,
        metadata: "Signature Cocktails and Classic Wines"
    },
    {
        category: "Specials",
        image: Menufirst,
        metadata: "Chef's Specials of the Day"
    },
    {
        category: "Cocktails",
        image: MenuSecond,
        metadata: "Dessert: Tiramisu, layered with sweet cream"
    }
];

const EventGallery = () => {
    const router = useRouter()
    const [selectedFilter, setSelectedFilter] = useState(filters[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredMenus = menuData.filter((item) => item.category === selectedFilter);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % filteredMenus.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [filteredMenus]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedFilter]);

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleRedirectToGallery = () => {
        router.push("/gallery");
    }

    const shortText = (
        <>
            At Play, every night is an unforgettable experience. <br />
            Sip handcrafted cocktails with a stunning view of the Qutub  <br />
            Minar, savor exquisite dishes made with the {" "}
            <span
                className="text-white cursor-pointer underline"
                onClick={handleToggle}
            >
                ...Read More
            </span>
        </>
    );

    const fullText = (
        <>
            At Play, every night is an unforgettable experience. <br />
            Sip handcrafted cocktails with a stunning view of the Qutub  <br />
            Minar, savor exquisite dishes made with the <br />
            - Live music to set the perfect vibe <br />
            - Sip handcrafted cocktails with a stunning view of the Qutub <br />
            - Sip handcrafted cocktails with a stunning {" "}
            <span
                className="text-white cursor-pointer underline"
                onClick={handleToggle}
            >
                See Less
            </span>
        </>
    );
    return (
        <div className='w-full '>
            <div className='w-full md:flex md:flex-col md:items-start xl:gap-[20px]  md:h-fit relative'
            >
                <div className='w-full bg-[#1B1722] min-h-[432px] absolute bottom-0 z-0 md:hidden ' />

                <div className="w-full  md:px-0 px-[18px] h-[290px] mt-8 md:mt-0 relative">
                    <button className='w-full' onClick={handleRedirectToGallery}>
                        <Image
                            src={filteredMenus[currentIndex]?.image}
                            alt="menu"
                            className=" w-full h-[290px] object-cover rounded-[10px]"
                        />
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {filteredMenus.map((_, idx) => (
                            <span
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${currentIndex === idx ? "bg-purple-500" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className='mt-[32px] md:mt-0 px-[36px] md:w-[420px] md:px-0 z-10'>
                    <div className='flex flex-row items-center gap-2 z-10 relative'>
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.8751 5.71094C6.47766 5.71094 6.19507 5.87875 6.19507 6.12603V9.49081C6.19507 9.70275 6.47769 9.91472 6.8751 9.91472C7.25485 9.91472 7.56394 9.70275 7.56394 9.49081V6.12603C7.56394 5.87875 7.25485 5.71094 6.8751 5.71094Z" fill="#FA8527" />
                            <path d="M6.87507 3.63672C6.46882 3.63672 6.15088 3.92837 6.15088 4.26421C6.15088 4.60005 6.46882 4.90055 6.87507 4.90055C7.2725 4.90055 7.59044 4.60005 7.59044 4.26421C7.59044 3.9284 7.27247 3.63672 6.87507 3.63672Z" fill="#FA8527" />
                            <path d="M6.875 0C3.07494 0 0 3.07337 0 6.87103C0 9.972 2.04166 12.5468 4.79428 13.4213L6.35778 15.7259C6.47409 15.8973 6.66781 16 6.875 16C7.08219 16 7.27591 15.8973 7.39222 15.7259L8.95572 13.4213C11.7096 12.5464 13.75 9.97066 13.75 6.87103C13.75 3.07097 10.6726 0 6.875 0ZM8.39516 12.2843C8.25281 12.3242 8.12922 12.4131 8.04625 12.5354L6.875 14.2618L5.70378 12.5354C5.62078 12.4131 5.49719 12.3242 5.35484 12.2844C3.01178 11.6292 1.25 9.47441 1.25 6.87103C1.25 3.77156 3.77338 1.25 6.875 1.25C9.97663 1.25 12.5 3.77156 12.5 6.87103C12.5 9.477 10.7356 11.6299 8.39516 12.2843Z" fill="#FA8527" />
                        </svg>

                        <h1 className='text-[#FAFAFA] md:text-[#3A3A3A]' style={{

                            fontSize: "18px",
                            fontWeight: 700,
                            fontFamily: "ProximaNovaA",
                            zIndex: 10
                        }}>About Play Qutub</h1>
                    </div>
                    <div
                        className="mt-[16px] px-[4px] font-[400] text-[12px] text-[#FAFAFA] md:text-[#3A3A3A] relative"
                        style={{
                            fontFamily: "ProximaNovaL",
                            zIndex: 10
                        }}
                    >
                        <p>{isExpanded ? fullText : shortText}</p>
                    </div>
                    <div className='bg-[#FAFAFA] md:bg-[#3A3A3A] mt-[27px] h-[1px] opacity-[48%] ' />

                    <div className='mt-[27px] z-10 relative'>
                        <p className='text-[#FAFAFA] md:text-[#3A3A3A] text-[12px] z-10' style={{ letterSpacing: "1px" }} >NEIGHBORHOOD GEM  <span className='text-[#FA8527] px-[5px]'>  ·  </span>    EXCELLENT FOOD   <span className='text-[#FA8527] px-[5px]'>  ·  </span> <br />
                            COCKTAIL BAR   <span className='text-[#FA8527] px-[5px]'>  ·  </span>   GREAT FOR OUTDOOR DINING</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EventGallery