import CommonFooter from '@/components/CommonFooter'
import CompanyLogo from '@/components/CompanyLogo'
import CrossIcon from '@/components/CrossIcon'
import EventList from '@/components/EventList'
import EventsFilterBar from '@/components/EventsFilterDropDown'
import Inner from '@/components/Layout/Inner'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface ITime {
    time: string
}



const timings: ITime[] = [
    {
        time: "Today"
    },
    {
        time: "Tommorow"
    },
    {
        time: "Weekend"
    }
]

interface IGenre {
    genre: string
}



const genreFilters: IGenre[] = [
    {
        genre: "Sufi"
    },
    {
        genre: "Jazz"
    },
    {
        genre: "Rock"
    },
    {
        genre: "Sufi1"
    },
    {
        genre: "Jazz1"
    },
    {
        genre: "Rock1"
    },
    {
        genre: "Sufi2"
    },
    {
        genre: "Jazz2"
    },
    {
        genre: "Rock2"
    },
    {
        genre: "Sufi3"
    },
    {
        genre: "Jazz3"
    },
    {
        genre: "Rock3"
    },
]

const AllEventsPage = () => {
    const router = useRouter();
    const [showAllGenres, setShowAllGenres] = useState(false);
    const [selectedTime, setSelectedTime] = useState<ITime | null>(
        {
            time: "Tommorow"
        },
    )
    const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(
        {
            genre: "Sufi1"
        },
    )

    const handleFilterReset = () => {
        setSelectedTime(null);
        setSelectedGenre(null);
    }

    const handleShowResults = () => {

        try {
            // make the api call here 
        } catch (error) {
            console.log(error)
        }
        setIsOpen(false)
    }

    const [visibleGenres, setVisibleGenres] = useState(genreFilters.slice(0, 9))

    const [isOpen, setIsOpen] = useState(false);
    const handleBackButton = () => {
        router.push("/")
    }

    useEffect(() => {
        setVisibleGenres(showAllGenres ? genreFilters : genreFilters.slice(0, 9))
    }, [showAllGenres])
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

                    <div className='mt-[32px] z-10'>
                        <CompanyLogo />
                    </div>

                    {isOpen && (
                        <div className='absolute top-32 z-50 flex flex-col w-full md:max-w-[650px]' style={{
                            border : '0px !important'
                        }}>
                            <div className='w-full bg-[#1B1722] pt-[18px] px-[20px] pb-[18px] flex items-center justify-between'>
                                <div className='flex gap-3 items-center'>
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.502 9.59775H15.3634C15.1214 7.98608 13.6908 6.74438 11.9675 6.74438C10.2442 6.74438 8.81367 7.98608 8.57169 9.59775H0.498047C0.222992 9.59775 0 9.81462 0 10.0821C0 10.3496 0.222992 10.5665 0.498047 10.5665H8.57169C8.81367 12.1782 10.2442 13.4199 11.9675 13.4199C13.6908 13.4199 15.1214 12.1782 15.3634 10.5665H16.502C16.777 10.5665 17 10.3496 17 10.0821C17 9.81462 16.777 9.59775 16.502 9.59775ZM11.9675 12.4512C10.6243 12.4512 9.53152 11.3884 9.53152 10.0821C9.53152 8.77584 10.6243 7.71309 11.9675 7.71309C13.3107 7.71309 14.4035 8.77584 14.4035 10.0821C14.4035 11.3884 13.3107 12.4512 11.9675 12.4512Z" fill="white" />
                                        <path d="M0.498047 3.82211H1.63665C1.87863 5.43378 3.30916 6.67548 5.0325 6.67548C6.75581 6.67548 8.18633 5.43378 8.42831 3.82211H16.502C16.777 3.82211 17 3.60525 17 3.33775C17 3.07026 16.777 2.8534 16.502 2.8534H8.42831C8.18633 1.24169 6.75581 0 5.0325 0C3.30916 0 1.87863 1.24169 1.63665 2.8534H0.498047C0.222992 2.8534 0 3.07026 0 3.33775C0 3.60525 0.222992 3.82211 0.498047 3.82211ZM5.0325 0.96871C6.3757 0.96871 7.46848 2.03145 7.46848 3.33775C7.46848 4.64403 6.3757 5.70677 5.0325 5.70677C3.68927 5.70677 2.59648 4.64403 2.59648 3.33775C2.59648 2.03145 3.68927 0.96871 5.0325 0.96871Z" fill="white" />
                                    </svg>

                                    <h1 className='text-white'>Filters</h1>
                                </div>
                                <button onClick={() => setIsOpen(false)}>
                                     <CrossIcon/>
                                </button>
                            </div>
                            {/* implement the when ,  genre  and the bottom reset and show results    */}
                            <div className="max-h-[43vh]  pt-[28px] px-[30px] bg-[white] overflow-y-auto space-y-4  custom-scrollbar">
                                {/* Add your filter items here */}
                                <div >
                                    <h1 className="text-[#1B1722]" >When</h1>
                                    <div className="grid grid-cols-3 gap-4 mt-[10px]">
                                        {timings.slice(0, 9).map((item, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedTime(item)}
                                                className={`px-4 py-2 rounded-xl font-semibold border text-[11px] ${selectedTime?.time === item?.time
                                                    ? 'bg-[#8AC926] text-white border-[#D5F6A1] shadow-[1px_1px_7.9px_0px_#C9F57C]'
                                                    : 'text-[#797979] border-[#D9C5FF] border-[1.5px]'
                                                    }`}
                                            >
                                                {item?.time}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div >
                                    <h1 className="text-[#1B1722]" >Genre</h1>
                                    <div className="grid grid-cols-3 gap-4 mt-[10px]">
                                        {visibleGenres.map((item, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedGenre(item)}
                                                className={`px-4 py-2 rounded-xl font-semibold border text-[11px] ${selectedGenre?.genre === item?.genre
                                                    ? 'bg-[#8AC926] text-white border-[#D5F6A1] shadow-[1px_1px_7.9px_0px_#C9F57C]'
                                                    : 'text-[#797979] border-[#D9C5FF] border-[1.5px]'
                                                    }`}
                                            >
                                                {item?.genre}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {genreFilters.length > 9 && (
                                    <button
                                        className="w-full mt-2"
                                        onClick={() => setShowAllGenres(prev => !prev)}
                                    >
                                        <p className="text-[10px] text-[#797979] text-center">
                                            {showAllGenres ? "See less..." : "See more..."}
                                        </p>
                                    </button>
                                )}


                            </div>
                            <div className='bg-[#FAFAFA] py-[16px] px-[28px] flex gap-2 text-[12px] w-full'>
                                <button onClick={handleFilterReset} className='w-full rounded-full bg-[#C4C4C4] text-white py-[12px]'>Reset</button>
                                <button onClick={handleShowResults} className='w-full rounded-full bg-[#8A54F0] text-white py-[12px]' >Show Results</button>
                            </div>

                        </div>
                    )}

                    <div className='flex flex-row items-center overflow-x-auto w-full  gap-3 pl-7 mt-[56px]  md:justify-center z-10'>
                        <div className="">
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

                        <div className="overflow-x-auto  scrollbar-hide md:scrollbar-show justify-center">
                            <div className="flex space-x-3">
                                <button onClick={() => setIsOpen(true)} className="flex items-center space-x-4 bg-[#8A54F0] text-white px-4 py-2 rounded-[15px] font-medium whitespace-nowrap">
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.502 9.79464H15.3634C15.1214 8.23489 13.6908 7.0332 11.9675 7.0332C10.2442 7.0332 8.81367 8.23489 8.57169 9.79464H0.498047C0.222992 9.79464 0 10.0045 0 10.2634C0 10.5223 0.222992 10.7321 0.498047 10.7321H8.57169C8.81367 12.2919 10.2442 13.4936 11.9675 13.4936C13.6908 13.4936 15.1214 12.2919 15.3634 10.7321H16.502C16.777 10.7321 17 10.5223 17 10.2634C17 10.0045 16.777 9.79464 16.502 9.79464ZM11.9675 12.5561C10.6243 12.5561 9.53152 11.5276 9.53152 10.2634C9.53152 8.9992 10.6243 7.9707 11.9675 7.9707C13.3107 7.9707 14.4035 8.9992 14.4035 10.2634C14.4035 11.5276 13.3107 12.5561 11.9675 12.5561Z" fill="white" />
                                        <path d="M0.498047 4.20483H1.63665C1.87863 5.76458 3.30916 6.96627 5.0325 6.96627C6.75581 6.96627 8.18633 5.76458 8.42831 4.20483H16.502C16.777 4.20483 17 3.99495 17 3.73608C17 3.4772 16.777 3.26733 16.502 3.26733H8.42831C8.18633 1.70755 6.75581 0.505859 5.0325 0.505859C3.30916 0.505859 1.87863 1.70755 1.63665 3.26733H0.498047C0.222992 3.26733 0 3.4772 0 3.73608C0 3.99495 0.222992 4.20483 0.498047 4.20483ZM5.0325 1.44336C6.3757 1.44336 7.46848 2.47186 7.46848 3.73608C7.46848 5.00027 6.3757 6.02877 5.0325 6.02877C3.68927 6.02877 2.59648 5.00027 2.59648 3.73608C2.59648 2.47186 3.68927 1.44336 5.0325 1.44336Z" fill="white" />
                                    </svg>

                                    <span style={{
                                        fontFamily: "ProximaNovaL"
                                    }}>Filters</span>
                                </button>



                                {/* {["Today", "Tomorrow", "This Weekend", "Concerts", "Comedy", "Workshops"].map((label, i) => (
                                    <button
                                        key={i}
                                        style={{
                                            fontFamily: "ProximaNovaT"
                                        }}
                                        className="border border-[#A362FF] text-white px-4 py-2 rounded-[15px] font-[600] whitespace-nowrap"
                                    >
                                        {label}
                                    </button>
                                ))} */}
                            </div>
                        </div>
                        

                    </div>
                    <div className='mt-[45px] z-10'>
                        <EventList />
                    </div>

                    <div className='mt-[42px] w-full md:flex justify-center relative '>
                        <CommonFooter />
                    </div>


                </div>

            </div>
        </Inner>
    )
}

export default AllEventsPage
