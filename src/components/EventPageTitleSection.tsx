import { useRouter } from 'next/router';
import React from 'react'

const EventPageTitleSection = () => {
    const router = useRouter();
    const handleRedirectEventBooking = () => {
        router.push("/event-booking");
    }
    return (
        <div className='w-full'>
            <div className='mt-[28px] px-[28px] w-full items-start'>
                <h1
                    className='w-full text-wrap text-[25px] md:text-[35px]'
                    style={{
                        fontFamily: "Prometo",
                        fontWeight: 'bold'
                    }}>Sukooniyat Ft. Anubhav,<br />
                    MAJ-R on the deck
                </h1>
                <p
                    className='mt-[13px]'
                    style={{
                        color: "#656565",
                        fontSize: "12px",
                        fontWeight: '700',
                        fontFamily: "ProximaNovaA",
                        letterSpacing: '6%'
                    }}
                >SUNDAYS · 7 PM ONWARDS · QUTUB AREA <br />
                    BOLLYWOOD SUFI</p>
            </div>

            <div className='mt-[36px] w-full  px-[28px] '>
                <button
                    onClick={handleRedirectEventBooking}
                    className='w-full h-[60px]'
                    style={{
                        background: "linear-gradient(79.47deg, #6239C9 -17.78%, #3855FF 76.08%)",
                        color: 'white',
                        borderRadius: "14px",
                        border: "1.5px solid #4BA2F9",
                        fontSize: '20px',
                        fontWeight: 700,
                        fontFamily: 'ProximaNovaA'
                    }}
                >
                    Request Reservation
                </button>
            </div>
        </div>
    )
}

export default EventPageTitleSection