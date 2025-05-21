import CompanyLogo from '@/components/CompanyLogo'
import ConfirmDetailsButton from '@/components/ConfirmDetailsButton'
import GuestDetailsCard from '@/components/GuestDetailsCard'
import Inner from '@/components/Layout/Inner'
import RestaurantDetailsCard from '@/components/RestaurantDetailsCard'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface IUserDetails {
    name: string,
    phoneNumber: string
}

const DetailsPage = () => {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState<IUserDetails | null>(null);
    const [websiteMode,setWebsiteMode] = useState( 0)
    const onClickHandler = () => {
        router.push("/confirmation")
    }
    useEffect(() => {
        const currUserDetails = localStorage.getItem("userDetails");
        const currWebsiteMode = localStorage.getItem("websiteMode")
        if (currUserDetails) {
            try {
                const parsedDetails: IUserDetails = JSON.parse(currUserDetails);
                setUserDetails(parsedDetails);
            } catch (error) {
                console.error("Error parsing userDetails from localStorage:", error);
                setUserDetails(null);
            }
        }
        if(currWebsiteMode){
            setWebsiteMode(Number(localStorage.getItem("websiteMode")));
        }
    }, []);
    return (
        <Inner>
            <div className='h-full w-full' style={{ fontFamily: "ProximaNovaA" }} >
                <div className="h-full w-full"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                    <div className='bg-[#1B1722] h-[278px] w-full absolute  ' />
                    <div className='mt-[72px] z-10'>
                        <CompanyLogo />
                    </div>

                    <div className='flex flex-row items-center gap-3 mt-[28px] z-10'>
                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5906 2.48418C11.6954 2.26011 11.7581 2.01311 11.7581 1.75C11.7581 0.785069 10.9697 0 10.0003 0C9.03107 0 8.24249 0.785069 8.24249 1.75C8.24249 2.01311 8.30521 2.26011 8.41019 2.48418C4.50912 3.1977 1.50909 6.47956 1.241 10.5H18.7598C18.4915 6.47956 15.4916 3.1977 11.5906 2.48418ZM10.0003 2.33333C9.67712 2.33333 9.41437 2.0719 9.41437 1.75C9.41437 1.4281 9.67712 1.16667 10.0003 1.16667C10.3236 1.16667 10.5862 1.4281 10.5862 1.75C10.5862 2.0719 10.3236 2.33333 10.0003 2.33333Z" fill="#FAFAFA" />
                            <path d="M0 11.6667C0.272217 12.9963 1.55441 14 2.96906 14H17.0316C18.4464 14 19.7278 12.9963 20 11.6667H0Z" fill="#FAFAFA" />
                        </svg>

                        <h1 style={{ fontSize: 20, fontWeight: '600', color: "white" }}>Request Reservation</h1>
                    </div>

                    <div className='mt-[35px] w-full md:w-[420px] px-[18px] z-10'>
                        <RestaurantDetailsCard websiteMode={websiteMode} />
                        <div className='mt-[14px]'>
                            <GuestDetailsCard userDetails={userDetails}  />
                        </div>
                        <div className='mt-[35px] mb-[40px]'>
                            <ConfirmDetailsButton onClickHandler={onClickHandler} />
                        </div>
                    </div>



                </div>

            </div>
        </Inner>
    )
}

export default DetailsPage