import CompanyLogo from '@/components/CompanyLogo'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Food from "@/images/food.png"
import Food1 from "@/images/Food1.png"
import Food2 from "@/images/Food2.png"
import Food3 from "@/images/Food3.png"
import EventImage from '@/images/EventCover.jpg'
import FirstMenu from "@/images/menu1.png"
import SecondMenu from "@/images/menu2.png"
import Cocktail1 from "@/images/Cocktail1.png"
import Cocktail2 from "@/images/Cocktail2.png"
import Image from 'next/image';
import Inner from '@/components/Layout/Inner';
import { motion, AnimatePresence } from "framer-motion"
import CommonFooter from '@/components/CommonFooter';


const filters = ["Food", "Cocktails", "Ambience"];

const galleryData = [
    {
        category: "Food",
        images: [
            { src: Food, alt: "Food 1" },
            { src: Food1, alt: "Food 2" },
            { src: Food2, alt: "Food 3" },
            { src: Food3, alt: "Cocktail 1" },
            { src: Cocktail2, alt: "Cocktail 2" },
            { src: Cocktail1, alt: "Ambience 1" },
            { src: Food, alt: "Ambience 2" },
        ],
    },
    {
        category: "Cocktails",
        images: [
            { src: Cocktail1, alt: "Cocktail 1" },
            { src: Cocktail2, alt: "Cocktail 2" },
            { src: SecondMenu, alt: "Cocktail 1" },
            { src: FirstMenu, alt: "Cocktail 2" },
        ],
    },
    {
        category: "Ambience",
        images: [
            { src: Food, alt: "Ambience 1" },
            { src: EventImage, alt: "Ambience 2" },
        ],
    },
];

const GalleryPage = () => {
    const router = useRouter();
    const [selectedFilter, setSelectedFilter] = useState("Food");

    const selectedCategory = galleryData.find(item => item.category === selectedFilter) ?? galleryData[0];
    const [selectedImage, setSelectedImage] = useState(selectedCategory.images[0]);
    const [currentPage, setCurrentPage] = useState(0); // Index of selected image
    const [direction, setDirection] = useState<"left" | "right">("right");

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: "left" | "right") => {
        setDirection(newDirection);

        setCurrentPage((prev) => {
            const nextIndex = newDirection === "left" ? prev + 1 : prev - 1;
            if (nextIndex < 0 || nextIndex >= selectedCategory.images.length) return prev;

            setSelectedImage(selectedCategory.images[nextIndex]);
            return nextIndex;
        });
    };

    const slideVariants = {
        initial: (dir: "left" | "right") => ({
            x: dir === "left" ? 100 : -100,
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
        exit: (dir: "left" | "right") => ({
            x: dir === "left" ? -100 : 100,
            opacity: 0,
            transition: { duration: 0.5 },
        }),
    };

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        const newCategory = galleryData.find(item => item.category === filter);
        if (newCategory?.images.length) {
            setSelectedImage(newCategory.images[0]);
        }
    };
    const handleBack = () => {
        router.push("/")
    }
    const handleRequestReservation = () => {
        router.push("/booking");
    }
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
                        alignItems: "center"
                    }}>
                    <div className='bg-[#1B1722] h-[206px] w-full absolute  ' />
                    <div className='mt-[32px] z-10'>
                        <CompanyLogo />
                    </div>
                    <div className='flex flex-row items-center overflow-x-auto w-full md:w-[420px] gap-3 py-1 pl-7 mt-[48px] justify-center z-10'>
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
                                        onClick={() => handleFilterChange(filter)}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-[420px] h-[442px] flex justify-center mt-6 z-10">
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={selectedImage.alt} // Unique key to trigger animation
                                custom={direction}
                                variants={slideVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate("left");
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate("right");
                                    }
                                }}
                                className="absolute w-full h-[442px]"
                            >
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="w-full h-[442px]  object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex gap-3 overflow-x-auto px-6 mt-6 w-full md:w-[420px] pb-4 sm:scrollbar-hide md:scrollbar-show">
                        {selectedCategory?.images.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img.src}
                                alt={img.alt}
                                onClick={() => setSelectedImage(img)}
                                className={` h-[76px] min-w-[76px] max-w-[76px] object-cover rounded-md cursor-pointer border ${(selectedImage?.src === img.src) && (selectedImage?.alt === img?.alt) ? "border-[#8A54F0] border-[2.5px]" : "border-transparent"
                                    }`}
                            />
                        ))}
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
    )
}

export default GalleryPage