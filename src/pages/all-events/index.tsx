import CompanyLogo from '@/components/CompanyLogo'
import EventList from '@/components/EventList'
import EventsFilterBar from '@/components/EventsFilterDropDown'
import Inner from '@/components/Layout/Inner'
import { useRouter } from 'next/router'
import React from 'react'

const AllEventsPage = () => {
    const router = useRouter();
    const handleBackButton = () => {
        router.push("/")
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
                        // background: "linear-gradient(180deg, #171C22 0%, #42345D 28.76%, #FAFAFA 40.65%)",
                        // justifyContent : 'center',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>

                    <div className='bg-[#1B1722] h-[346px] md:h-[400px] w-full absolute  ' />

                    <div className='mt-[72px] z-10'>
                        <CompanyLogo />
                    </div>

                    <div className='flex flex-row items-center overflow-x-auto w-full  gap-3 px-7 mt-[56px] justify-center z-10'>
                        <div className="md:hidden">
                            <button
                                onClick={handleBackButton}
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
                        </div>

                        <div className="overflow-x-auto w-full scrollbar-hide md:scrollbar-show md:hidden">
                            <div className="flex space-x-3">
                                <button className="flex items-center space-x-4 bg-[#8A54F0] text-white px-4 py-2 rounded-[15px] font-medium whitespace-nowrap">
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.502 9.79464H15.3634C15.1214 8.23489 13.6908 7.0332 11.9675 7.0332C10.2442 7.0332 8.81367 8.23489 8.57169 9.79464H0.498047C0.222992 9.79464 0 10.0045 0 10.2634C0 10.5223 0.222992 10.7321 0.498047 10.7321H8.57169C8.81367 12.2919 10.2442 13.4936 11.9675 13.4936C13.6908 13.4936 15.1214 12.2919 15.3634 10.7321H16.502C16.777 10.7321 17 10.5223 17 10.2634C17 10.0045 16.777 9.79464 16.502 9.79464ZM11.9675 12.5561C10.6243 12.5561 9.53152 11.5276 9.53152 10.2634C9.53152 8.9992 10.6243 7.9707 11.9675 7.9707C13.3107 7.9707 14.4035 8.9992 14.4035 10.2634C14.4035 11.5276 13.3107 12.5561 11.9675 12.5561Z" fill="white" />
                                        <path d="M0.498047 4.20483H1.63665C1.87863 5.76458 3.30916 6.96627 5.0325 6.96627C6.75581 6.96627 8.18633 5.76458 8.42831 4.20483H16.502C16.777 4.20483 17 3.99495 17 3.73608C17 3.4772 16.777 3.26733 16.502 3.26733H8.42831C8.18633 1.70755 6.75581 0.505859 5.0325 0.505859C3.30916 0.505859 1.87863 1.70755 1.63665 3.26733H0.498047C0.222992 3.26733 0 3.4772 0 3.73608C0 3.99495 0.222992 4.20483 0.498047 4.20483ZM5.0325 1.44336C6.3757 1.44336 7.46848 2.47186 7.46848 3.73608C7.46848 5.00027 6.3757 6.02877 5.0325 6.02877C3.68927 6.02877 2.59648 5.00027 2.59648 3.73608C2.59648 2.47186 3.68927 1.44336 5.0325 1.44336Z" fill="white" />
                                    </svg>

                                    <span style={{
                                        fontFamily: "ProximaNovaL"
                                    }}>Filters</span>
                                </button>

                                {["Today", "Tomorrow", "This Weekend", "Concerts", "Comedy", "Workshops"].map((label, i) => (
                                    <button
                                        key={i}
                                        style={{
                                            fontFamily: "ProximaNovaT"
                                        }}
                                        className="border border-[#A362FF] text-white px-4 py-2 rounded-[15px] font-[600] whitespace-nowrap"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='hidden md:block'>
                        <EventsFilterBar />
                        </div>

                    </div>



                    <div className='mt-[45px] z-10'>

                        <EventList />
                    </div>


                </div>

            </div>
        </Inner>
    )
}

export default AllEventsPage
