import React, { useState } from 'react'

const AboutEventCard = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const shortText = (
        <>
            A night of soulful melodies and harmony <br />
            beyond beats on the mic Shubh. <br />
            What awaits you? <br />
            - Live music to set the perfect{" "}
            <span
                className="text-[#8A54F0] cursor-pointer underline"
                onClick={handleToggle}
            >
                ...See More
            </span>
        </>
    );

    const fullText = (
        <>
            A night of soulful melodies and harmony <br />
            beyond beats on the mic Shubh. <br />
            What awaits you? <br />
            - Live music to set the perfect vibe <br />
            - Food & beverages <br />
            - A vibe you’ll never forget{" "}
            <span
                className="text-[#8A54F0] cursor-pointer underline"
                onClick={handleToggle}
            >
                See Less
            </span>
        </>
    );
    return (
        <div className="relative w-full mt-[55px]">
            <div
                className="p-[1px] rounded-2xl overflow-hidden"
                style={{
                    background:
                        "radial-gradient(146.49% 146.68% at 64.38% 89.8%, #BD91FF 35.15%, #FAFAFA 74.52%)",
                    borderRadius: "20px",
                }}
            >
                <div
                    className="bg-white p-[24px] rounded-2xl"
                    style={{ borderRadius: "20px" }}
                >
                    <div className="flex flex-row items-center gap-2">
                        {/* SVG ICON */}
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_138_758)">
                                <path d="M16.2153 5.95558C15.9782 5.77967 15.8577 5.48927 15.901 5.19768C16.0503 4.1919 15.7257 3.20483 15.0104 2.48954C14.274 1.75322 13.2691 1.45539 12.3024 1.5989C12.0024 1.64332 11.7136 1.51267 11.5444 1.28463C10.9388 0.46823 10.0114 0 9 0C7.98857 0 7.06117 0.46823 6.45561 1.28463C6.28408 1.51586 5.99312 1.64269 5.69772 1.5989C4.73114 1.45543 3.72618 1.75299 2.9896 2.48954C2.27434 3.20483 1.94975 4.19189 2.09903 5.19765C2.14229 5.48924 2.02187 5.77967 1.78473 5.95554C0.968264 6.5612 0.5 7.4886 0.5 8.5C0.5 9.51143 0.968264 10.4388 1.78463 11.0444C2.02177 11.2203 2.14219 11.5107 2.09893 11.8023C1.94965 12.808 2.27428 13.795 2.98957 14.5104C3.72691 15.2477 4.73224 15.5443 5.69778 15.401C5.99369 15.357 6.28422 15.4843 6.45554 15.7153C7.0612 16.5317 7.98863 17 9 17C10.0114 17 10.9388 16.5317 11.5444 15.7153C11.6944 15.5131 11.9342 15.3924 12.1858 15.3924C12.3427 15.3924 13.7979 15.7229 15.0104 14.5104C15.7257 13.795 16.0503 12.808 15.901 11.8023C15.8578 11.5107 15.9782 11.2203 16.2153 11.0444C17.0317 10.4388 17.5 9.51143 17.5 8.5C17.5 7.4886 17.0317 6.5612 16.2153 5.95558ZM15.4241 9.97774C14.7927 10.4461 14.472 11.22 14.5874 11.9973C14.6742 12.5827 14.4862 13.1564 14.0713 13.5712C13.3286 14.314 12.471 14.0643 12.1858 14.0643C11.5156 14.0643 10.877 14.3857 10.4777 14.924C10.1252 15.3993 9.58657 15.6719 9 15.6719C8.41343 15.6719 7.87481 15.3993 7.52229 14.924C7.06954 14.3136 6.29727 13.9692 5.50275 14.0873C4.93242 14.1719 4.35153 13.9941 3.92875 13.5713C3.51388 13.1564 3.32579 12.5827 3.41268 11.9972C3.52799 11.22 3.20735 10.4462 2.57593 9.97774C2.10069 9.62522 1.82812 9.0866 1.82812 8.5C1.82812 7.9134 2.10069 7.37481 2.57593 7.02226C3.20745 6.55383 3.52809 5.77997 3.41271 5.00268C3.32582 4.41721 3.51388 3.84349 3.92869 3.42869C4.35087 3.00654 4.93149 2.82788 5.50275 2.91264C6.29733 3.03055 7.06957 2.68613 7.52226 2.07589C7.87478 1.60069 8.4134 1.32812 9 1.32812C9.5866 1.32812 10.1252 1.60069 10.4777 2.07593C10.9373 2.69546 11.7132 3.02899 12.4973 2.91264C13.07 2.82764 13.6502 3.00761 14.0712 3.42869C14.4861 3.84353 14.6741 4.41721 14.5873 5.00271C14.4719 5.78 14.7926 6.55386 15.424 7.02229C15.8993 7.37481 16.1719 7.9134 16.1719 8.5C16.1719 9.0866 15.8993 9.62522 15.4241 9.97774Z" fill="#8B6EC1" />
                                <path d="M8.99338 5.76093C8.71965 5.76093 8.48565 5.67541 8.29139 5.50437C8.09713 5.32556 8 5.11565 8 4.87464C8 4.63363 8.09713 4.4276 8.29139 4.25656C8.48565 4.08552 8.71965 4 8.99338 4C9.27594 4 9.51435 4.08552 9.70861 4.25656C9.90287 4.4276 10 4.63363 10 4.87464C10 5.11565 9.90287 5.32556 9.70861 5.50437C9.51435 5.67541 9.27594 5.76093 8.99338 5.76093ZM9.84106 12H8.15894V6.36735H9.84106V12Z" fill="#8B6EC1" />
                            </g>
                            <defs>
                                <clipPath id="clip0_138_758">
                                    <rect width="17" height="17" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <h1
                            style={{
                                fontSize: "18px",
                                fontWeight: "700",
                                fontFamily: "ProximaNovaA",
                                color: "#8B6EC1",
                            }}
                        >
                            About the Event
                        </h1>
                    </div>

                    <div className="mt-[22px] h-[1px] bg-[#C4C4C4]" />

                    <div
                        className="mt-[16px] px-[4px] font-[400] text-[#535353]"
                        style={{
                            fontFamily: "ProximaNovaL",
                        }}
                    >
                        <p>{isExpanded ? fullText : shortText}</p>
                    </div>
                    <div className='md:flex md:flex-row md:gap-[80px]'>
                        <div className='mt-[24px] px-[4px]'>
                            <h1 style={{
                                color: "#535353"
                            }}>Performing Artist</h1>
                            <p style={{
                                fontFamily: "ProximaNovaL",
                                color: "#535353"
                            }}>Anubhav</p>
                        </div>
                        <div className='mt-[24px] px-[4px]'>
                            <h1 style={{
                                color: "#535353"
                            }}>Supporting Artists
                            </h1>
                            <p style={{
                                fontFamily: "ProximaNovaL",
                                color: "#535353"
                            }}>MAJ-R</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutEventCard