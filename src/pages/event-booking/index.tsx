import CommonFooter from '@/components/CommonFooter'
import CompanyLogo from '@/components/CompanyLogo'
import EntryPackages from '@/components/EntryPackages'
import EventDateList from '@/components/EventDateList'
import Inner from '@/components/Layout/Inner'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const EventBookingPage = () => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [stagCount, setStagCount] = useState(0);
    const [silverCount, setSilverCount] = useState(0);
    const [referralCode, setRefferalCode] = useState("");
    const [coupleEntry, setCoupleEntry] = useState(false);

    const increaseStag = () => {
        setStagCount(prev => prev + 1);
    };

    const decreaseStag = () => {
        if (stagCount > 0) {
            setStagCount(prev => prev - 1);
        }
    };

    const increaseSilver = () => {
        setSilverCount(prev => prev + 1);
    };

    const decreaseSilver = () => {
        if (silverCount > 0) {
            setSilverCount(prev => prev - 1);
        }
    };

    const handleConfirmDetails = () => {
        router.push("/request")
    }

    return (
        <Inner>
            <div className='h-full w-full'
                style={{
                    fontFamily: "ProximaNovaA"
                }}
            >
                <div className="h-full w-full"
                    style={{
                        // background: 'linear-gradient(180deg, #171C22 0%, #42345D 28.76%, #FAFAFA 40.65%)',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                    <div className='bg-[#1B1722] h-[339px] w-full absolute  ' />
                    <div className='mt-[72px] z-10'>
                        <CompanyLogo />
                    </div>

                    <div className='flex flex-row items-center gap-3 mt-[28px] z-10'>
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5906 2.48418C11.6954 2.26011 11.7581 2.01311 11.7581 1.75C11.7581 0.785069 10.9697 0 10.0003 0C9.03107 0 8.24249 0.785069 8.24249 1.75C8.24249 2.01311 8.30521 2.26011 8.41019 2.48418C4.50912 3.1977 1.50909 6.47956 1.241 10.5H18.7598C18.4915 6.47956 15.4916 3.1977 11.5906 2.48418ZM10.0003 2.33333C9.67712 2.33333 9.41437 2.0719 9.41437 1.75C9.41437 1.4281 9.67712 1.16667 10.0003 1.16667C10.3236 1.16667 10.5862 1.4281 10.5862 1.75C10.5862 2.0719 10.3236 2.33333 10.0003 2.33333Z" fill="#FAFAFA" />
                            <path d="M0 11.6667C0.272217 12.9963 1.55441 14 2.96906 14H17.0316C18.4464 14 19.7278 12.9963 20 11.6667H0Z" fill="#FAFAFA" />
                        </svg>

                        <h1 style={{ fontSize: 20, fontWeight: '600', color: "white", fontFamily: "ProximaNovaA" }}>Request Reservation</h1>
                    </div>

                    <div className='mt-[35px]  px-[18px] z-10'>
                        <div
                            className=" p-[1px]  rounded-[20px] overflow-hidden"
                            style={{
                                background: 'radial-gradient(146.49% 146.68% at 64.38% 89.8%, #BD91FF 35.15%, #FAFAFA 74.52%)',
                                borderRadius: "20px"
                            }}
                        >
                            <div className=" bg-white p-[18px] rounded-[20px]" style={{ borderRadius: "20px" }}>

                                <div className='md:flex md:flex-row md:gap-[80px] md:justify-center md:my-3'>
                                    <div>

                                        <div className='flex flex-row items-center gap-3 px-3'>
                                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.99971 0C7.34551 0 5.99971 1.26169 5.99971 2.8125C5.99971 4.36331 7.34551 5.62499 8.99971 5.62499C10.6539 5.62499 11.9997 4.36331 11.9997 2.8125C11.9997 1.26169 10.6539 0 8.99971 0Z" fill="#8B6EC1" />
                                                <path d="M12.7326 7.4624C11.9112 6.68057 10.8224 6.25 9.66667 6.25H8.33333C7.1776 6.25 6.08876 6.68057 5.26742 7.4624C4.45011 8.2404 4 9.26735 4 10.3542C4 10.5267 4.14924 10.6667 4.33333 10.6667H13.6667C13.8508 10.6667 14 10.5267 14 10.3542C14 9.26735 13.5499 8.2404 12.7326 7.4624Z" fill="#8B6EC1" />
                                                <path d="M14.9998 1.3335C14.0073 1.3335 13.1998 2.12205 13.1998 3.09131C13.1998 4.06056 14.0073 4.84912 14.9998 4.84912C15.9923 4.84912 16.7998 4.06056 16.7998 3.09131C16.7998 2.12205 15.9923 1.3335 14.9998 1.3335Z" fill="#8B6EC1" />
                                                <path d="M17.2395 5.9975C16.7467 5.50885 16.0935 5.23975 15.4 5.23975H14.6C13.9066 5.23975 13.2533 5.50885 12.7605 5.9975C12.2701 6.48374 12 7.12559 12 7.80485C12 7.91271 12.0895 8.00016 12.2 8.00016H17.8C17.9105 8.00016 18 7.91271 18 7.80485C18 7.12559 17.7299 6.48374 17.2395 5.9975Z" fill="#8B6EC1" />
                                                <path d="M2.99983 1.3335C2.00731 1.3335 1.19983 2.12205 1.19983 3.09131C1.19983 4.06056 2.00731 4.84912 2.99983 4.84912C3.99235 4.84912 4.79983 4.06056 4.79983 3.09131C4.79983 2.12205 3.99235 1.3335 2.99983 1.3335Z" fill="#8B6EC1" />
                                                <path d="M5.23955 5.9975C4.74675 5.50885 4.09345 5.23975 3.4 5.23975H2.6C1.90656 5.23975 1.25325 5.50885 0.760453 5.9975C0.270067 6.48374 0 7.12559 0 7.80485C0 7.91271 0.0895467 8.00016 0.2 8.00016H5.8C5.91045 8.00016 6 7.91271 6 7.80485C6 7.12559 5.72993 6.48374 5.23955 5.9975Z" fill="#8B6EC1" />
                                            </svg>

                                            <h1 style={{ fontSize: 18, fontWeight: 700, color: "#8B6EC1", fontFamily: "ProximaNovaA" }}>Choose Entry Package</h1>
                                        </div>

                                        <div className='w-full h-[1px] mt-[15px] opacity-[48%] bg-[#C4C4C4] mb-[25px] ' />

                                        <EntryPackages
                                            stagCount={stagCount}
                                            silverCount={silverCount}
                                            increaseSilver={increaseSilver}
                                            increaseStag={increaseStag}
                                            decreaseStag={decreaseStag}
                                            decreaseSilver={decreaseSilver}
                                            coupleEntry={coupleEntry}
                                            setCoupleEntry={setCoupleEntry}

                                        />
                                    </div>

                                    <div>
                                        <div>

                                            <div className='flex flex-row items-center gap-3 mt-[49px] md:mt-0 px-3'>
                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 1C5 0.585786 4.66421 0.25 4.25 0.25C3.83578 0.25 3.5 0.585786 3.5 1H5ZM3.5 3.46385C3.5 3.87806 3.83578 4.21385 4.25 4.21385C4.66421 4.21385 5 3.87806 5 3.46385H3.5ZM10 3.46385C10 3.87806 10.3358 4.21385 10.75 4.21385C11.1642 4.21385 11.5 3.87806 11.5 3.46385H10ZM11.5 1.00002C11.5 0.58581 11.1642 0.250023 10.75 0.250023C10.3358 0.250023 10 0.58581 10 1.00002H11.5ZM1 12.5495L1.75 12.5495L1 12.5495ZM1.00001 4.38098L1.75001 4.38099V4.38098H1.00001ZM3.5 1V3.46385H5V1H3.5ZM10.75 2.68044H11.5625V1.18044H10.75V2.68044ZM10 1.93044V3.46385H11.5V1.93044H10ZM11.5 1.93044V1.00002H10V1.93044H11.5ZM0.250004 12.5495C0.250001 14.3133 1.67332 15.75 3.4375 15.75V14.25C2.50929 14.25 1.75 13.4924 1.75 12.5495L0.250004 12.5495ZM13.25 12.5495C13.25 13.4924 12.4907 14.25 11.5625 14.25V15.75C13.3267 15.75 14.75 14.3133 14.75 12.5495H13.25ZM14.75 4.38098C14.75 2.61715 13.3267 1.18044 11.5625 1.18044V2.68044C12.4907 2.68044 13.25 3.43802 13.25 4.38098H14.75ZM1.75001 4.38098C1.75001 3.43802 2.5093 2.68044 3.43751 2.68044V1.18044C1.67333 1.18044 0.250009 2.61715 0.250009 4.38098H1.75001ZM1 6.85398H14V5.35398H1V6.85398ZM13.25 4.38098V12.5495H14.75V4.38098H13.25ZM1.75 12.5495L1.75001 4.38099L0.250009 4.38098L0.250004 12.5495L1.75 12.5495ZM3.43751 2.68044H10.75V1.18044H3.43751V2.68044ZM11.5625 14.25H3.4375V15.75H11.5625V14.25Z" fill="#8B6EC1" />
                                                </svg>
                                                <h1 style={{ fontSize: 18, fontWeight: 700, color: "#8B6EC1", fontFamily: "ProximaNovaA" }}>Choose Date</h1>
                                            </div>
                                            <div className='w-full h-[1px] mt-[15px] opacity-[48%] bg-[#C4C4C4] mb-[21px] ' />

                                            <EventDateList
                                                selectedDate={selectedDate}
                                                setSelectedDate={setSelectedDate}
                                                nextNumberOfDays={4}
                                                isEnabled={true}
                                            />

                                        </div>

                                        <div>

                                            <div className='flex flex-row items-center gap-3 mt-[47px] px-3'>
                                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.75 5.99082C14.75 6.4222 15.0652 6.79739 15.4994 6.88298C15.7907 6.94036 16 7.18906 16 7.47772V9.02554C16 9.95647 15.4407 10.817 14.5752 11.2178C14.2636 11.362 13.8905 11.2338 13.7419 10.9313C13.5934 10.6286 13.7256 10.2665 14.0371 10.1222C14.4702 9.92162 14.75 9.49118 14.75 9.02554V7.91028C14.0029 7.56473 13.5 6.82241 13.5 5.99082C13.5 5.15924 14.0029 4.41691 14.75 4.07136V2.9561C14.75 2.2868 14.1892 1.74221 13.5 1.74221H11.5625C11.5625 2.07745 11.2827 2.34915 10.9375 2.34915C10.5923 2.34915 10.3125 2.07745 10.3125 1.74221H2.5C1.81079 1.74221 1.25 2.2868 1.25 2.9561V4.07136C1.99707 4.41691 2.5 5.15924 2.5 5.99082C2.5 6.82241 1.99707 7.56473 1.25 7.91028V9.02554C1.25 9.69484 1.81079 10.2394 2.5 10.2394H10.3125C10.3125 9.90419 10.5923 9.63249 10.9375 9.63249C11.2827 9.63249 11.5625 9.90419 11.5625 10.2394V10.8464C11.5625 11.1816 11.2827 11.4533 10.9375 11.4533H2.5C1.12146 11.4533 0 10.3643 0 9.02554V7.47772C0 7.18906 0.209351 6.94036 0.50061 6.88298C0.934815 6.79739 1.25 6.4222 1.25 5.99082C1.25 5.55944 0.934815 5.18425 0.50061 5.09866C0.209351 5.04128 0 4.79258 0 4.50392V2.9561C0 1.61738 1.12146 0.52832 2.5 0.52832H13.5C14.8785 0.52832 16 1.61738 16 2.9561V4.50392C16 4.79258 15.7907 5.04128 15.4994 5.09866C15.0652 5.18425 14.75 5.55944 14.75 5.99082ZM10.9375 3.25957C10.5923 3.25957 10.3125 3.53127 10.3125 3.86651C10.3125 4.20176 10.5923 4.47346 10.9375 4.47346C11.2827 4.47346 11.5625 4.20176 11.5625 3.86651C11.5625 3.53127 11.2827 3.25957 10.9375 3.25957ZM10.9375 5.38388C10.5923 5.38388 10.3125 5.65558 10.3125 5.99082C10.3125 6.32606 10.5923 6.59776 10.9375 6.59776C11.2827 6.59776 11.5625 6.32606 11.5625 5.99082C11.5625 5.65558 11.2827 5.38388 10.9375 5.38388ZM10.9375 7.50818C10.5923 7.50818 10.3125 7.77988 10.3125 8.11513C10.3125 8.45037 10.5923 8.72207 10.9375 8.72207C11.2827 8.72207 11.5625 8.45037 11.5625 8.11513C11.5625 7.77988 11.2827 7.50818 10.9375 7.50818ZM5.375 4.16999C5.375 3.66712 4.9552 3.25957 4.4375 3.25957C3.9198 3.25957 3.5 3.66712 3.5 4.16999C3.5 4.67285 3.9198 5.0804 4.4375 5.0804C4.9552 5.0804 5.375 4.67285 5.375 4.16999ZM7.9375 8.72207C8.4552 8.72207 8.875 8.31452 8.875 7.81165C8.875 7.30879 8.4552 6.90124 7.9375 6.90124C7.4198 6.90124 7 7.30879 7 7.81165C7 8.31452 7.4198 8.72207 7.9375 8.72207ZM4.04712 8.58906C4.16235 8.67857 4.30017 8.72207 4.43713 8.72207C4.62048 8.72207 4.80212 8.64419 4.92554 8.49423L8.42554 4.24562C8.64111 3.98387 8.59741 3.60192 8.32788 3.39258C8.05835 3.18311 7.66504 3.22567 7.44946 3.48741L3.94946 7.73602C3.73376 7.99777 3.77759 8.37972 4.04712 8.58906Z" fill="#8B6EC1" />
                                                </svg>

                                                <h1 style={{ fontSize: 18, fontWeight: 700, color: "#8B6EC1", fontFamily: "ProximaNovaA" }}>Referral Code</h1>
                                            </div>
                                            <div className='w-full h-[1px] mt-[15px] opacity-[48%] bg-[#C4C4C4] mb-[21px] ' />

                                            <div style={{
                                                border: "1.5px solid #CAD6FF",
                                                marginTop: "25px",
                                                borderRadius: "12px",
                                                height: '45px',
                                                display: "flex",
                                                flexDirection: "row"
                                            }}>
                                                <div
                                                    style={{
                                                        backgroundColor: "#E7EBFF",
                                                        width: "97px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: 'center',
                                                        borderTopLeftRadius: "12px",
                                                        borderBottomLeftRadius: "12px",
                                                    }}
                                                >
                                                    <h1 style={{ color: "#5B5ED4", fontSize: "15px", fontWeight: '700' }}>Code</h1>
                                                </div>
                                                <input
                                                    value={referralCode}
                                                    onChange={(e: any) => setRefferalCode(e.target.value)}
                                                    type="text"
                                                    placeholder="Enter Code"
                                                    className="w-full px-3 outline-none placeholder:italic placeholder:text-[12px] placeholder:leading-[13px] placeholder:font-[400] focus:ring-0 focus:outline-none placeholder:[font-family:'ProximaNovaA']"
                                                    style={{
                                                        fontFamily: 'ProximaNovaA',
                                                        letterSpacing: '0%',
                                                        fontWeight: 400,
                                                        fontStyle: 'italic',
                                                        fontSize: '12px',
                                                        lineHeight: '13px',
                                                        verticalAlign: 'middle',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>

                    <div className='mt-[23px] w-full md:w-[420px] md:px-0  px-[18px] mb-[50px]'>
                        <button
                            onClick={() => handleConfirmDetails()}
                            style={{
                                background: "linear-gradient(79.47deg, #6239C9 -17.78%, #3855FF 76.08%)",
                                border: "1.5px solid #4BA2F9",
                                borderRadius: '14px',
                                height: "60px",
                                width: "100%",
                                color: "white",
                                fontSize: 20,
                                fontWeight: 700
                            }}>
                            Confirm Details
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

export default EventBookingPage