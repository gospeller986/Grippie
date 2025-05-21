import CompanyLogo from '@/components/CompanyLogo';
import { useRouter } from 'next/router'
import React from 'react'
import EventCover from "@/images/EventCover.jpg"
import Image from 'next/image';
import AboutEventCard from '@/components/AboutEventCard';
import AboutGallery from '@/components/AboutGallery';
import AdditionalInfo from '@/components/AdditionalInfo';
import EventOffer from '@/components/EventOffer';
import EventsFooter from '@/components/EventsFooter';
import Inner from '@/components/Layout/Inner';
import EventPageTitleSection from '@/components/EventPageTitleSection';
import EventGallery from '@/components/EventGallery';

const EventPage = () => {

    return (
        <Inner>
            <div className='h-full w-full'
                style={{
                    fontFamily: 'ProximaNovaA'
                }}
            >
                <div className='h-full w-full'
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <div className='bg-[#1B1722] h-[339px] md:h-[202px] w-full absolute  ' />
                    <div className='mt-[72px] z-10'>
                        <CompanyLogo />
                    </div>

                    <div className='w-full z-10 md:mt-20 md:px-[80px] xl:px-[120px] md:flex md:flex-row md:gap-[40px]'>
                        <div className='mt-[40px] w-full md:w-[420px] md:px-0 px-[18px] z-10'>
                            <Image
                                src={EventCover}
                                alt={"Event Image"}
                                className='w-full md:min-w-[434px]  md:h-[641px] object-cover rounded-[10px]'
                            />
                        </div>
                        <div className='w-full md:mt-[32px]'>
                            <EventPageTitleSection />
                            <div className='hidden md:block md:px-[28px]'>
                                <AboutEventCard />
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:flex md:flex-row md:gap-[32px] md:mt-[80px] xl:px-[120px] md:mb-[80px] md:w-full md:px-[80px]' >
                        <EventGallery />
                        <EventOffer />
                        <AdditionalInfo />

                    </div>

                    <div className='hidden md:block md:w-full relative md:mt-[160px]' >
                        <EventsFooter />
                    </div>





                    <div className='w-full md:hidden md:w-[420px]  md:px-0 px-[18px]'>
                        <AboutEventCard />
                        <EventOffer />
                    </div>
                    <div className='md:hidden w-full'>
                        <AboutGallery />
                    </div>
                    <div className='mt-[36px] md:hidden w-full  md:justify-center relative '>
                        <AdditionalInfo />
                        <EventsFooter />
                    </div>
                </div>
            </div>
        </Inner>
    )
}

export default EventPage