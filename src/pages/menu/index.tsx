import React, { useEffect, useState } from 'react';
import CompanyLogo from '@/components/CompanyLogo';
import Menufirst from "@/images/menu1.png"
import MenuSecond from "@/images/menu2.png"
import Cocktail1 from "@/images/Cocktail1.png"
import Cocktail2 from "@/images/Cocktail2.png"
import EventCover from "@/images/EventCover.jpg"
import Image from 'next/image';
import { useRouter } from 'next/router';
import Inner from '@/components/Layout/Inner';
import CommonFooter from '@/components/CommonFooter';

const filters = ["Food Menu", "Bar Menu", "Specials", "Cocktails"];

const menuData = [
    {
        category: "Food Menu",
        image: Menufirst,
        metadata: "Starter: Buffalo Caprese, fresh mozzarella with grape tomatoes and basil"
    },
    {
        category: "Food Menu",
        image: MenuSecond,
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
        image: Cocktail1,
        metadata: "Dessert: Tiramisu, layered with sweet cream"
    },
    {
        category: "Bar Menu",
        image: Cocktail2,
        metadata: "Chef's Specials"
    },
    {
        category: "Cocktails",
        image: Cocktail2,
        metadata: "Chef's Specials"
    }
];

const MenuPage = () => {
    const router = useRouter()
    const [selectedFilter, setSelectedFilter] = useState(filters[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);
    const filteredMenus = menuData.filter((item) => item.category === selectedFilter);

    const minSwipeDistance = 50; // minimum distance for a swipe

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.changedTouches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        setTouchEndX(e.changedTouches[0].clientX);
        if (touchStartX === null) return;

        const distance = touchStartX - e.changedTouches[0].clientX;

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                setDirection("left");
                setCurrentIndex((prev) => (prev + 1) % filteredMenus.length);
            } else {
                setDirection("right");
                setCurrentIndex((prev) => (prev - 1 + filteredMenus.length) % filteredMenus.length);
            }
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };




    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % filteredMenus.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [filteredMenus]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedFilter]);

    const handleRequestReservation = () => {
        router.push("/booking");
    }

    const handleBack = () => {
        router.push("/")
    }

    useEffect(() => {
        console.log(filteredMenus[currentIndex]?.image)
    }, [filteredMenus, currentIndex])

    return (
        <Inner>
            <div className='h-full w-full'
                style={{
                    fontFamily: "ProximaNovaA"
                }}
            >
                <div className='h-full w-full'
                    style={{
                        // background: 'linear-gradient(180deg, #171C22 0%, #42345D 28.76%, #FAFAFA 40.65%)',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        // justifyContent: "center"
                    }}>

                    <div className='bg-[#1B1722] h-[290px] w-full absolute  ' />
                    <div className='mt-[32px] z-10'>
                        <CompanyLogo />
                    </div>

                    <div className='flex flex-row items-center overflow-x-auto w-full md:w-[420px] gap-3 py-1 pl-7 md:pl-0 mt-[48px] justify-center z-10'>
                        <button
                            onClick={() => handleBack()}
                            className="bg-[#8A54F0] text-white rounded-[15px] p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="overflow-x-auto w-full scrollbar-hide">
                            <div className="flex space-x-3">
                                {filters.map((filter, i) => (
                                    <button
                                        key={i}
                                        className={`px-4 py-2 rounded-[15px] font-[600] whitespace-nowrap border transition-all ${selectedFilter === filter ? "bg-[#2F1B55] text-white border-[#8A54F0]" : "text-white border-[#A362FF]"
                                            }`}
                                        onClick={() => setSelectedFilter(filter)}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-[420px] h-[527px] mt-8 relative z-10"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onAnimationEnd={() => setDirection(null)}
                    >
                        {filteredMenus[currentIndex]?.image &&
                            <Image
                                src={filteredMenus[currentIndex]?.image}
                                alt="menu"
                                className=" w-full h-full object-cover"
                            />
                        }

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

                    <div className='w-full md:w-[420px] mt-[30px] px-[18px] md:px-0 mb-[40px]'>
                        <button
                            className='w-full h-[60px] rounded-[14px]'
                            style={{
                                background: "linear-gradient(79.47deg, #6239C9 -17.78%, #3855FF 76.08%)",
                                border: "1.5px solid #4BA2F9",
                                color: 'white',
                                fontSize: "20px",
                                fontWeight: 700
                            }}
                            onClick={() => handleRequestReservation()}
                        >
                            Request Reservation
                        </button>
                    </div>

                    <div className='mt-[42px] w-full md:flex justify-center relative '>
                        <CommonFooter />
                    </div>

                </div>
            </div>
        </Inner>
    );
};

export default MenuPage;
