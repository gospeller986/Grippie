import CompanyLogo from '@/components/CompanyLogo';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import EventCover from "@/images/EventCover.jpg"
import Image from 'next/image';
import AboutGallery from '@/components/AboutGallery';
import AdditionalInfo from '@/components/AdditionalInfo';
import Menufirst from "@/images/menu1.png"
import AllUpcomingEvents from '@/components/AllUpcomingEvents';
import GuestAmount from '@/components/GuestAmount';
import OfferSlider from '@/components/OfferSlider';
import LandingFooter from '@/components/LandingFooter';
import WebsiteModeButtons from '@/components/WebsiteModeButtons';
import Inner from '@/components/Layout/Inner';
import RestaurantDetailsSection from '@/components/RestaurantDetailsSection';
import BrowseMenu from '@/components/BrowseMenu';
import FullScreenRestaurantImage from '@/images/RestaurantFullScreen.jpg'


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


export const FullScreenLandingPage = () => {
    const router = useRouter();
    const [websiteMode, setWebsiteMode] = useState(0);
    const [selectedGuest, setSelectedGuest] = useState<number>(1);
    const guests: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
    const [selectedFilter, setSelectedFilter] = useState(filters[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredMenus = menuData.filter((item) => item.category === selectedFilter);

    const handleEventRequestReservation = () => {
        router.push("/event-booking")
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
        localStorage.setItem("websiteMode", websiteMode.toString());
    }, [websiteMode])

    return (
        <Inner>
            <div className='h-full w-full transition-all duration-500 ease-in-out'
                style={{
                    fontFamily: 'ProximaNovaA'
                }}
            >

                <div className='h-full w-full relative'
                    style={{
                        // background: 'linear-gradient(180deg, #171C22 0%, #42345D 8.76%, #FAFAFA 20.65%)',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <div className='bg-[#1B1722] h-[235px] w-full absolute  ' />
                    <div className='mt-[72px] z-10'>
                        <CompanyLogo />
                    </div>

                    <div className='w-full flex justify-center z-20'>
                        <WebsiteModeButtons
                            websiteMode={websiteMode}
                            setWebsiteMode={setWebsiteMode}
                        />
                    </div>

                    {websiteMode === 0 &&
                        <div className='mt-[62px] w-full  px-[18px] md:px-[80px]  -space-y-14 z-10 '>
                            <Image
                                src={FullScreenRestaurantImage}
                                alt={"Event Image"}
                                className='w-full h-[427px] md:h-[573px] object-cover rounded-[10px]'
                            />
                        </div>}

                    {websiteMode === 0 &&
                        <>
                            <div className='md:w-full md:px-[80px] xl:px-[120px] md:mt-[64px]'>
                                <RestaurantDetailsSection />
                            </div>

                            <div className='md:w-full md:px-[80px] xl:px-[120px] md:flex md:flex-row md:gap-[32px]'>

                                <div className='md:w-[70%]  mt-[32px] md:mb-10'>
                                    <GuestAmount
                                        guests={guests}
                                        selectedGuest={selectedGuest}
                                        setSelectedGuest={setSelectedGuest}
                                    />
                                    <div className='mt-[40px]'>
                                        <AboutGallery />
                                    </div>
                                    <div className='md:mt-[124px] z-10'>
                                        <BrowseMenu />
                                    </div>
                                </div>
                                <div className='md:w-[30%] md:flex md:flex-col md:items-center  mt-[32px] md:mb-10 md:gap-[45px]' >
                                    <OfferSlider />
                                    <AdditionalInfo />
                                </div>
                            </div>
                        </>
                    }

                    {websiteMode === 1 &&
                        <div className='mt-[62px] w-full  px-[18px] md:px-[80px] xl:px-[120px] -space-y-14 z-10 '>

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
                        <div className='mb-[78px] md:w-full md:px-[80px] xl:px-[120px] z-10'>
                            <AllUpcomingEvents />
                            <div className=' md:mt-[100px] md:w-full md:px-[120px]  md:flex md:flex-row md:gap-[32px] '>
                                <div className='md:w-[65%] md:mt-[100px]'>
                                    <AboutGallery />
                                </div>
                                <div className='md:w-[35%]'>
                                    <AdditionalInfo />
                                </div>
                            </div>
                        </div>}

                    <div className={`w-full md:flex justify-center relative ${websiteMode === 1 ? 'mt-[36px] md:mt-[120px]' : 'mt-[36px] md:mt-[80px]'
                        }`}>
                        <LandingFooter />
                    </div>



                </div>

            </div>
        </Inner>
    );
}
