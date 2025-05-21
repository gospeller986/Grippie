import Image from 'next/image'
import React from 'react'
import EventCover from '@/images/EventCover.jpg'
import GramoPhone from '@/images/gramophone.jpg'
import { useRouter } from 'next/router';

interface Props {
    eventId: number;
}

const SmallEventCard = (props: Props) => {
    const { eventId } = props;
    const router = useRouter()

    const handleRedirectToEventPage = () => {
        router.push(`/events/${eventId}`);
    }
    return (
        <button
            onClick={handleRedirectToEventPage}
            className='w-full min-h-[315px]' style={{
                background: "linear-gradient(155.95deg, #FFFFFF 51.47%, #F2EDFD 98.38%)",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                border: "1px solid #CCB2FF",
                display: "flex",
                flexDirection: "column",
            }}>
            <Image
                src={GramoPhone}
                alt="Event Cover"
                style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px"
                }}
                className='w-full'
            />
            <div className='px-[16px] w-full mt-[20px] mb-[15px] text-left'>
                <h1 className='text-wrap text-[13px] md:text-[18px]'
                    style={{
                        // fontSize: 13,
                        fontWeight: 700,
                        lineHeight: "15px",
                        fontFamily: "ProximaNovaA"
                    }}
                >
                    Sukooniyat Ft. <br />
                    Anubhav on percus..
                </h1>
                <p className='mt-1 md:mt-2 text-[12px] md:text-[14px]'
                    style={{
                        fontFamily: "ProximaNovaA",
                        // fontSize: 12,
                        fontWeight: '600',
                        color: "#666666"
                    }}
                >
                    Fri, 21st Feb · 9PM
                </p>

            </div>
        </button>
    )
}

export default SmallEventCard