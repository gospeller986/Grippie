import CompanyLogo from '@/components/CompanyLogo';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import EventCover from "@/images/EventCover.jpg"
import Image from 'next/image';
import AboutGallery from '@/components/AboutGallery';
import AdditionalInfo from '@/components/AdditionalInfo';
import Menufirst from "@/images/menu1.png"
import AllUpcomingEvents from '@/components/AllUpcomingEvents';
import RestaurantImage from "@/images/restaurant-home.png"
import GuestAmount from '@/components/GuestAmount';
import OfferSlider from '@/components/OfferSlider';
import LandingFooter from '@/components/LandingFooter';
import WebsiteModeButtons from '@/components/WebsiteModeButtons';
import Inner from '@/components/Layout/Inner';
import RestaurantDetailsSection from '@/components/RestaurantDetailsSection';
import BrowseMenu from '@/components/BrowseMenu';


const filters = ["Food Menu"];

const menuData = [
    {
        category: "Food Menu",
        image: Menufirst,
        metadata: "Starter: Buffalo Caprese, fresh mozzarella with grape tomatoes and basil"
    },
    {
        category: "Food Menu",
        image: EventCover,
        metadata: "Dessert: Tiramisu, layered with sweet cream"
    },
    {
        category: "Food Menu",
        image: Menufirst,
        metadata: "Chef's Specials of the Day"
    },
    {
        category: "Food Menu",
        image: EventCover,
        metadata: "fresh mozzarella with grape tomatoes and basil"
    },
];


export const SmallScreenLandingPage = () => {
    const router = useRouter();
    const [websiteMode, setWebsiteMode] = useState(0);
    const [selectedGuest, setSelectedGuest] = useState<number>(1);
    const [firstRun, setFirstRun] = useState(true);
    const guests: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
    const [selectedFilter, setSelectedFilter] = useState(filters[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);

    const minSwipeDistance = 50;

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

    const filteredMenus = menuData.filter((item) => item.category === selectedFilter);

    const handleEventRequestReservation = () => {
        router.push(`/events/${currentIndex+1}`)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % filteredMenus.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [filteredMenus]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [selectedFilter]);


    useEffect(() => {
        const currWebsiteMode = localStorage.getItem("websiteMode")
        if (currWebsiteMode) {
            setWebsiteMode(Number(currWebsiteMode));
        }
        setFirstRun(false)
    }, [])

    const handleWebsiteModeChange = (x:number) => {
        setWebsiteMode(x) ;
        localStorage.setItem("websiteMode", x.toString());
    }

    return (
        <Inner>
            <div className='h-full w-full transition-all duration-500 ease-in-out'
                style={{
                    fontFamily: 'ProximaNovaA'
                }}
            >

                <div className='h-full w-full relative'
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <div className='bg-[#1B1722] h-[235px] w-full absolute  ' />
                    <div className='mt-[32px] z-10'>
                        <CompanyLogo />
                    </div>

                    <div className='w-full flex justify-center z-20'>
                        <WebsiteModeButtons
                            websiteMode={websiteMode}
                            setWebsiteMode={handleWebsiteModeChange}
                        />
                    </div>

                    {websiteMode === 0 &&
                        <div className='mt-[32px] w-full  px-[18px] md:px-[48px] -space-y-14 z-10 '>
                            <Image
                                src={RestaurantImage}
                                alt={"Event Image"}
                                className='w-full h-[380px] md:h-[573px] object-cover rounded-[10px]'
                            />
                        </div>}

                    {websiteMode === 0 &&
                        <div className='w-full md:w-[520px] px-[18px] mt-[42px] md:mb-10'>
                            <RestaurantDetailsSection />
                            <GuestAmount
                                guests={guests}
                                selectedGuest={selectedGuest}
                                setSelectedGuest={setSelectedGuest}
                            />
                            <OfferSlider />
                        </div>
                    }

                    {websiteMode === 1 &&
                        <div className={`mt-[62px] w-full  px-[18px] md:px-[48px] -space-y-14 z-10 ${direction === "left" ? "animate-swipe-left" : direction === "right" ? "animate-swipe-right" : ""
                            } `}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            onAnimationEnd={() => setDirection(null)}
                        >

                            <Image
                                src={filteredMenus[currentIndex]?.image}
                                alt={"Event Image"}
                                className='w-full h-[475px] object-cover rounded-tr-[10px] rounded-tl-[10px] '
                            />
                            <div className='w-full h-[306px] rounded-br-[10px] rounded-bl-[10px]  mix-blend-multiply relative'

                                style={{
                                    background: "linear-gradient(180deg, rgba(37, 37, 37, 0) -5.71%, #000000 13.75%)",
                                    display: 'flex',
                                    justifyContent: "center"

                                }}
                            >
                                <div className='mt-[50px]'>
                                    <h1 style={{
                                        fontSize: "25px",
                                        fontWeight: "bold",
                                        color: "white",
                                        fontFamily: "Prometo"
                                    }}>Sukooniyat Ft. Anubhav,<br />
                                        MAJ-R on the deck</h1>
                                    <p
                                        style={{
                                            fontSize: '15px',
                                            fontFamily: "ProximaNovaA",
                                            fontWeight: '600',
                                            letterSpacing: '0.5px',
                                            color: '#D8D8D8',
                                            marginTop: "23px"
                                        }}
                                    >SUNDAYS  &nbsp;    ·  &nbsp;    7 PM ONWARDS</p>
                                    <div className='w-full mt-[25px]'>
                                        <button
                                            onClick={handleEventRequestReservation}
                                            className='w-full h-[60px] rounded-[14px]'
                                            style={{
                                                background: "linear-gradient(79.47deg, #6239C9 -17.78%, #3855FF 76.08%)",
                                                color: "white",
                                                fontFamily: "ProximaNovaA",
                                                border: '1.5px solid #4BA2F9'
                                            }}
                                        >
                                            Request Reservation
                                        </button>
                                    </div>
                                </div>

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

                        </div>
                    }

                    {websiteMode === 1 &&
                        <div className='mb-[78px] md:w-full md:px-[48px]'>
                            <AllUpcomingEvents />
                        </div>}

                    <AboutGallery />

                    {websiteMode === 0 &&
                        <div className='w-full pl-[18px] overflow-hidden  '>
                            <BrowseMenu />
                        </div>
                    }
                    <div className='mt-[42px] w-full md:flex justify-center relative '>
                        <AdditionalInfo />
                        <LandingFooter />
                    </div>



                </div>

            </div>
        </Inner>
    );
}
