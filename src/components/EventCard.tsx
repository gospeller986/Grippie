import React from 'react'

import EventCover from '@/images/EventCover.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface Props {
    id: number,
    title?: string
}

const EventCard = (props: Props) => {
    const router = useRouter()
    const handleKnowMore = () => {
        router.push(`/events/${props.id}`)
    }
    const handleReserve = () => {
        router.push("/event-booking")
    }
    return (
        <div className='w-full md:max-w-[344px] min-h-[621px]' style={{
            background: "linear-gradient(155.95deg, #FFFFFF 51.47%, #F2EDFD 98.38%)",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "35px",
            borderBottomRightRadius: "35px",
            border: "1px solid #CCB2FF",
            display: "flex",
            flexDirection: "column",


        }}>
            <Image
                src={EventCover}
                width={344}
                height={416}
                alt="Event Cover"
                style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px"
                }}
            />
            <div className='px-[24px] w-full mt-[25px]'>
                <h1 className='text-wrap'
                    style={{
                        fontSize: 20,
                        fontWeight: 700,
                        lineHeight: "23px",
                        width: '220px',
                        fontFamily: "Prometo"
                    }}
                >
                    Sukooniyat Ft. Anubhav
                    on percussion ft. MAJ-R
                </h1>
                <p className='mt-1'
                    style={{
                        fontFamily: "ProximaNovaA",
                        fontSize: "15px",
                        fontWeight: '600',
                        color: "#5E5E5E"
                    }}
                >
                    Fri, 21st Feb · 9pm Onwards
                </p>

                <div className='mt-[24px] flex flex-row gap-[16px] mb-[26px]'>
                    <button
                        onClick={() => handleKnowMore()}
                        className='w-full h-[44px] bg-[#DDE2FF] text-[#5B5ED4] rounded-[12px]'>Know More</button>
                    <button
                        onClick={() => handleReserve()}
                        className='w-full h-[44px] text-white rounded-[12px]'
                        style={{
                            background: "linear-gradient(79.47deg, #6239C9 -17.78%, #3855FF 76.08%)",
                            border: "1.5px solid #4BA2F9"
                        }}
                    >Reserve</button>
                </div>

            </div>



        </div>
    )
}

export default EventCard