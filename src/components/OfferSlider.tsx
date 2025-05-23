import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';


const offers = [
    {
        title: 'BUY 1 GET 1',
        subtitle: 'Valid on Tuesdays',
        tag: 'INSTANT OFFER',
    },
    {
        title: 'UNLIMITED BEER',
        subtitle: 'Valid Thu & Sat · from 5PM - 12 AM',
        tag: 'HAPPY HOUR OFFER',
    },
    {
        title: '20% OFF',
        subtitle: 'Valid on Weekdays',
        tag: 'LIMITED TIME',
    },
    {
        title: 'FREE DESSERT',
        subtitle: 'On orders above ₹999',
        tag: 'SWEET DEAL',
    },
    {
        title: 'UNLIMITED DINNER',
        subtitle: 'Valid Thu & Sat · from 5PM - 12 AM ',
        tag: 'INSTANT OFFER',
    },
    {
        title: 'FREE DESSERT',
        subtitle: 'Valid on Tuesdays',
        tag: 'SWEET DEAL',
    },
];


const OfferSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);
    const totalPages = Math.ceil(offers.length / 2);

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
                setCurrentPage((prev) => (prev + 1) % totalPages);
            } else {
                setDirection("right");
                setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
            }
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };

    // Slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prev) => (prev + 1) % Math.ceil(offers.length / 2));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const paginatedOffers = [];
    for (let i = 0; i < offers.length; i += 2) {
        paginatedOffers.push(offers.slice(i, i + 2));
    }

    const slideVariants = {
        initial: (dir: "left" | "right") => ({
            x: dir === "left" ? 100 : -100,
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8 },
        },
        exit: (dir: "left" | "right") => ({
            x: dir === "left" ? -100 : 100,
            opacity: 0,
            transition: { duration: 0.8 },
        }),
    };
    //      const slideVariants = {
    //     initial: (dir: "left" | "right") => ({
    //       x: dir === "left" ? 80 : -80,
    //       opacity: 0,
    //       scale: 0.98,
    //     }),
    //     animate: {
    //       x: 0,
    //       opacity: 1,
    //       scale: 1,
    //       transition: {
    //         type: "spring",
    //         stiffness: 300,
    //         damping: 30,
    //       },
    //     },
    //     exit: (dir: "left" | "right") => ({
    //       x: dir === "left" ? -80 : 80,
    //       opacity: 0,
    //       scale: 0.98,
    //       transition: {
    //         type: "spring",
    //         stiffness: 200,
    //         damping: 25,
    //       },
    //     }),
    //   };
    return (
        <div className="relative w-full  mt-[44px]">

            <span className="absolute -top-2 left-4 bg-white px-2 text-[18px] text-[#8B6EC1] font-semibold flex flex-row  justify-center items-center gap-2">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_70_2358)">
                        <path d="M7.00781 7.17188C7.37456 7.17188 7.67188 6.87456 7.67188 6.50781C7.67188 6.14106 7.37456 5.84375 7.00781 5.84375C6.64106 5.84375 6.34375 6.14106 6.34375 6.50781C6.34375 6.87456 6.64106 7.17188 7.00781 7.17188Z" fill="#8B6EC1" />
                        <path d="M10.9922 11.1562C11.3589 11.1562 11.6562 10.8589 11.6562 10.4922C11.6562 10.1254 11.3589 9.82812 10.9922 9.82812C10.6254 9.82812 10.3281 10.1254 10.3281 10.4922C10.3281 10.8589 10.6254 11.1562 10.9922 11.1562Z" fill="#8B6EC1" />
                        <path d="M7.47739 10.9618L11.4618 6.97738C11.7211 6.71806 11.7211 6.29758 11.4618 6.03826C11.2024 5.77891 10.7819 5.77891 10.5226 6.03826L6.53824 10.0226C6.27892 10.282 6.27892 10.7024 6.53824 10.9618C6.79755 11.2211 7.21804 11.2211 7.47739 10.9618Z" fill="#8B6EC1" />
                        <path d="M16.2153 5.95558C15.9782 5.77967 15.8577 5.48927 15.901 5.19768C16.0503 4.1919 15.7257 3.20483 15.0104 2.48954C14.274 1.75322 13.2691 1.45539 12.3024 1.5989C12.0024 1.64332 11.7136 1.51267 11.5444 1.28463C10.9388 0.46823 10.0114 0 9 0C7.98857 0 7.06117 0.46823 6.45561 1.28463C6.28408 1.51586 5.99312 1.64269 5.69772 1.5989C4.73114 1.45543 3.72618 1.75299 2.9896 2.48954C2.27434 3.20483 1.94975 4.19189 2.09903 5.19765C2.14229 5.48924 2.02187 5.77967 1.78473 5.95554C0.968264 6.5612 0.5 7.4886 0.5 8.5C0.5 9.51143 0.968264 10.4388 1.78463 11.0444C2.02177 11.2203 2.14219 11.5107 2.09893 11.8023C1.94965 12.808 2.27428 13.795 2.98957 14.5104C3.72691 15.2477 4.73224 15.5443 5.69778 15.401C5.99369 15.357 6.28422 15.4843 6.45554 15.7153C7.0612 16.5317 7.98863 17 9 17C10.0114 17 10.9388 16.5317 11.5444 15.7153C11.6944 15.5131 11.9342 15.3924 12.1858 15.3924C12.3427 15.3924 13.7979 15.7229 15.0104 14.5104C15.7257 13.795 16.0503 12.808 15.901 11.8023C15.8578 11.5107 15.9782 11.2203 16.2153 11.0444C17.0317 10.4388 17.5 9.51143 17.5 8.5C17.5 7.4886 17.0317 6.5612 16.2153 5.95558ZM15.4241 9.97774C14.7927 10.4461 14.472 11.22 14.5874 11.9973C14.6742 12.5827 14.4862 13.1564 14.0713 13.5712C13.3286 14.314 12.471 14.0643 12.1858 14.0643C11.5156 14.0643 10.877 14.3857 10.4777 14.924C10.1252 15.3993 9.58657 15.6719 9 15.6719C8.41343 15.6719 7.87481 15.3993 7.52229 14.924C7.06954 14.3136 6.29727 13.9692 5.50275 14.0873C4.93242 14.1719 4.35153 13.9941 3.92875 13.5713C3.51388 13.1564 3.32579 12.5827 3.41268 11.9972C3.52799 11.22 3.20735 10.4462 2.57593 9.97774C2.10069 9.62522 1.82812 9.0866 1.82812 8.5C1.82812 7.9134 2.10069 7.37481 2.57593 7.02226C3.20745 6.55383 3.52809 5.77997 3.41271 5.00268C3.32582 4.41721 3.51388 3.84349 3.92869 3.42869C4.35087 3.00654 4.93149 2.82788 5.50275 2.91264C6.29733 3.03055 7.06957 2.68613 7.52226 2.07589C7.87478 1.60069 8.4134 1.32812 9 1.32812C9.5866 1.32812 10.1252 1.60069 10.4777 2.07593C10.9373 2.69546 11.7132 3.02899 12.4973 2.91264C13.07 2.82764 13.6502 3.00761 14.0712 3.42869C14.4861 3.84353 14.6741 4.41721 14.5873 5.00271C14.4719 5.78 14.7926 6.55386 15.424 7.02229C15.8993 7.37481 16.1719 7.9134 16.1719 8.5C16.1719 9.0866 15.8993 9.62522 15.4241 9.97774Z" fill="#8B6EC1" />
                    </g>
                    <defs>
                        <clipPath id="clip0_70_2358">
                            <rect width="17" height="17" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>

                Exciting offers for you
            </span>
            <div
                className=" p-[1px]  rounded-2xl overflow-hidden"
                style={{
                    background: 'radial-gradient(146.49% 146.68% at 64.38% 89.8%, #BD91FF 35.15%, #FAFAFA 74.52%)',
                    borderRadius: "20px"
                }}
            >
                <div className=" bg-white px-4 py-[28px] rounded-2xl" style={{ borderRadius: "20px" }}>
                    <div className="">
                        <div className="flex flex-col  transition-all duration-500"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            onAnimationEnd={() => setDirection(null)}
                        >
                            <AnimatePresence custom={direction} mode="wait">
                                <motion.div
                                    key={currentPage}
                                    variants={slideVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    custom={direction}
                                    className="flex flex-col "
                                >
                                    {paginatedOffers[currentPage].map((offer, idx) => (
                                        <div key={idx}>
                                            <div className='w-full h-[84px] rounded-[12px] flex flex-row  '
                                            >
                                                <div className='w-[72px] h-[84px] rounded-tl-[12px] rounded-bl-[12px]'
                                                    style={{
                                                        background: "linear-gradient(39.89deg, #BD91FF 0.49%, #3963D7 47.53%)"
                                                    }}
                                                >
                                                    <svg className='rounded-tl-[12px] ' width="75" height="84" viewBox="0 0 75 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_201_769" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="84">
                                                            <path d="M12 0.5H71.5V83.5H12C5.64873 83.5 0.5 78.3513 0.5 72V12C0.5 5.64873 5.64873 0.5 12 0.5Z" fill="url(#paint0_linear_201_769)" stroke="#BD91FF" />
                                                        </mask>
                                                        <g mask="url(#mask0_201_769)">
                                                            <path d="M57.2586 26.5723C56.9205 26.0124 56.8683 25.3441 57.1154 24.7387L59.4062 19.1261C60.6816 16.0011 59.205 12.5104 56.0446 11.179L50.3684 8.78764C49.756 8.52975 49.3102 8.02043 49.1451 7.39086L47.6156 1.55313C46.7639 -1.69715 43.4575 -3.66773 40.0896 -2.93301L34.0396 -1.61341C33.3866 -1.47116 32.7178 -1.62672 32.2037 -2.04015L27.438 -5.87297C24.7844 -8.0072 20.9121 -7.70489 18.6222 -5.18442L14.5093 -0.657713C14.0656 -0.169332 13.429 0.0877775 12.7619 0.0489094L6.58046 -0.31536C3.13816 -0.51844 0.178994 1.94178 -0.157715 5.28488L-0.762354 11.289C-0.82767 11.9367 -1.189 12.509 -1.75378 12.8589L-6.98988 16.1026C-9.90526 17.9085 -10.8219 21.5863 -9.07678 24.4754L-5.94251 29.6641C-5.60438 30.224 -5.55218 30.8923 -5.7993 31.4977L-8.09009 37.1101C-9.3655 40.2352 -7.88893 43.7258 -4.72851 45.0572L0.947713 47.4486C1.5601 47.7065 2.00591 48.2158 2.17099 48.8454L3.70054 54.6831C4.47587 57.642 7.28439 59.5402 10.3233 59.3025C10.6226 59.2792 10.9247 59.235 11.2266 59.1691L17.2766 57.8495C17.929 57.7069 18.5983 57.8628 19.1125 58.2763L23.8782 62.1091C25.2052 63.1763 26.8362 63.6342 28.4224 63.5102C30.0081 63.3862 31.5492 62.6805 32.6939 61.4205L36.8068 56.8942C37.2506 56.406 37.8873 56.149 38.5542 56.1876L44.7357 56.5519C48.1784 56.7548 51.1371 54.2947 51.4738 50.9516L52.0786 44.9475C52.1439 44.2998 52.5053 43.7276 53.07 43.3776L58.3061 40.1339C61.2215 38.3281 62.1382 34.6502 60.393 31.7611L57.2586 26.5723ZM15.8335 10.402C20.074 10.0708 23.7862 13.159 24.1086 17.286C24.4309 21.413 21.2432 25.0402 17.0027 25.3714C12.7622 25.7026 9.04996 22.6144 8.72762 18.4874C8.40528 14.3603 11.593 10.7332 15.8335 10.402ZM14.4639 43.9983C14.0855 44.4289 13.5642 44.6702 13.0276 44.7121C12.4909 44.754 11.9384 44.5967 11.4979 44.23C10.6165 43.4968 10.5156 42.2043 11.2724 41.3432L36.8521 12.2377C37.6087 11.3766 38.9369 11.2728 39.8182 12.006C40.6995 12.7392 40.8005 14.0317 40.0437 14.8928L14.4639 43.9983ZM35.4823 45.8343C31.2418 46.1655 27.5296 43.0773 27.2072 38.9502C26.8849 34.8232 30.0726 31.1961 34.3131 30.8649C38.5536 30.5337 42.2659 33.6219 42.5882 37.7489C42.9105 41.8759 39.7228 45.5031 35.4823 45.8343Z" fill="#8B9DFF" />
                                                            <path d="M34.632 34.9476C32.7045 35.0981 31.2555 36.7467 31.402 38.6226C31.5485 40.4985 33.2358 41.9022 35.1634 41.7516C37.0909 41.6011 38.5398 39.9525 38.3933 38.0766C38.2468 36.2007 36.5595 34.797 34.632 34.9476Z" fill="#8B9DFF" />
                                                            <path d="M16.1524 14.4845C14.2249 14.6351 12.776 16.2837 12.9225 18.1596C13.069 20.0355 14.7563 21.4393 16.6838 21.2887C18.6113 21.1382 20.0603 19.4896 19.9138 17.6135C19.7672 15.7378 18.0799 14.334 16.1524 14.4845Z" fill="#8B9DFF" />
                                                        </g>
                                                        <g clip-path="url(#clip0_201_769)">
                                                            <path d="M20.2593 69.3531C19.2027 69.2402 18.4654 69.3471 18.0475 69.674C17.6286 70.0022 17.3784 70.5533 17.2952 71.3291C17.2075 72.1447 17.3344 72.7514 17.675 73.1504C18.015 73.5486 18.7139 73.8047 19.7705 73.9183C20.8067 74.0293 21.5339 73.9262 21.9513 73.6095C22.368 73.292 22.6209 72.7259 22.7079 71.9102C22.7911 71.1344 22.6622 70.5429 22.3236 70.1338C21.9844 69.7247 21.2962 69.4649 20.2593 69.3531Z" fill="#FA8527" />
                                                        </g>
                                                        <g clip-path="url(#clip1_201_769)">
                                                            <path d="M70.447 18.4166C68.8387 17.8958 67.6557 17.8217 66.8982 18.1942C66.1388 18.5686 65.5694 19.3449 65.1866 20.5258C64.7837 21.7672 64.7833 22.7533 65.1834 23.4858C65.5828 24.2169 66.5876 24.8437 68.1956 25.3656C69.7729 25.8767 70.939 25.9534 71.6922 25.5966C72.4447 25.2383 73.0233 24.4393 73.4251 23.1975C73.8079 22.0166 73.8002 21.0535 73.4066 20.3061C73.0118 19.5582 72.0251 18.9291 70.447 18.4166Z" fill="#FA8527" />
                                                        </g>
                                                        <defs>
                                                            <linearGradient id="paint0_linear_201_769" x1="2.56797e-06" y1="114" x2="90.1688" y2="21.533" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.221799" stop-color="#3963D7" />
                                                                <stop offset="1" stop-color="#3A68E4" />
                                                            </linearGradient>
                                                            <clipPath id="clip0_201_769">
                                                                <rect width="5.44512" height="4.59432" fill="white" transform="translate(17.6008 69) rotate(7.51548)" />
                                                            </clipPath>
                                                            <clipPath id="clip1_201_769">
                                                                <rect width="8.663" height="7.3094" fill="white" transform="translate(66.4226 17) rotate(19.3551)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div
                                                    className="w-full h-[84px] rounded-tr-[12px] rounded-br-[12px] p-[2px]"
                                                    style={{
                                                        background: "linear-gradient(92.54deg, #F1FBE1 -5.89%, #C7BFD8 115.93%)",
                                                    }}
                                                >
                                                    <div className="w-full h-full bg-[#FAFAFA] rounded-tr-[10px] rounded-br-[10px]">
                                                        <div className='max-w-[215px] pt-[9px] px-[20px]'>
                                                            <p className='text-[#8A54F0] text-[10px] truncate whitespace-nowrap overflow-hidden'
                                                                style={{
                                                                    fontWeight: 700,
                                                                    letterSpacing: "0.9px",
                                                                    textOverflow: "ellipsis"
                                                                }}
                                                            >{offer?.tag}</p>
                                                            <h1
                                                                className='truncate whitespace-nowrap overflow-hidden'
                                                                style={{
                                                                    fontFamily: 'Prometo',
                                                                    fontSize: '18px',
                                                                    fontWeight: 700,
                                                                    color: "#373737",
                                                                    textOverflow: "ellipsis"
                                                                }}>{offer?.title}</h1>
                                                            <p
                                                                className='truncate whitespace-nowrap overflow-hidden'
                                                                style={{
                                                                    fontFamily: 'ProximaNovaA',
                                                                    fontSize: '11px',
                                                                    fontWeight: 600,
                                                                    color: "#6F6F6F",
                                                                    textOverflow: "ellipsis"
                                                                }}>{offer?.subtitle}</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            {idx === 0 &&
                                                <div className='h-[1px] bg-[#C4C4C4] w-full px-[18px] opacity-[48%] my-[20px]' />
                                            }

                                        </ div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center mt-4 absolute -bottom-1 bg-white px-[12px] left-[43%] ">
                {paginatedOffers.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${index === currentPage ? 'bg-purple-500' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>

        </div>
    )
}

export default OfferSlider