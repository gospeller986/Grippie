import { useRouter } from 'next/router'
import React from 'react'

const RestaurantDetailsSection = () => {
    const router = useRouter()
    const handleRequestReservation = () => {
        router.push("/booking")
    }
    return (
        <>
            <h1 className='md:text-[40px] text-[22px]'
             style={{ fontWeight: "bold", paddingLeft: "18px", paddingRight: "18px", fontFamily: "Prometo", lineHeight: "12px" }}>Play Qutub</h1>
            <p className='mt-[16px] md:mt-[22px]' style={{ paddingLeft: "18px", paddingRight: "18px", marginTop: '16px', fontWeight: "600" , fontFamily : 'ProximaNovaL' , fontSize : '15px' }}>
                <span style={{ color: "#8CBB41" }}>OPEN</span>
                <span style={{ color: "#5A5A5A" }}> ·   12PM - 1AM   |   Qutub Institutional Area </span>
            </p>
            <button
                onClick={handleRequestReservation}
                className="w-full mt-[16px] h-[60px] rounded-[14px] hover:shadow-md"
                style={{
                    background: "linear-gradient(79.47deg, #6239C9 -17.78%, #3855FF 76.08%)",
                    border: "1.5px solid",
                    color: "white",
                    fontWeight: "700"
                }}
            >

                Request Reservation
            </button>
        </>
    )
}

export default RestaurantDetailsSection