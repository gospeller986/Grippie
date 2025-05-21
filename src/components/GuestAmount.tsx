import React from 'react'
import GuestCount from './GuestCount';
import FullScreenGuestCount from './FullScreenGuestCount';

interface IGuestAmount {
    guests : any ;
    selectedGuest : any ;
    setSelectedGuest : any ;
}

const GuestAmount = (props : IGuestAmount ) => {
  return (
    <div className="relative w-full   mt-[44px]">

    <span className="absolute -top-2 left-4 bg-white px-2 text-[18px] text-[#8B6EC1] font-semibold flex flex-row  justify-center items-center gap-2">
      <svg width="18" height="18" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99971 0C7.34551 0 5.99971 1.26169 5.99971 2.8125C5.99971 4.36331 7.34551 5.62499 8.99971 5.62499C10.6539 5.62499 11.9997 4.36331 11.9997 2.8125C11.9997 1.26169 10.6539 0 8.99971 0Z" fill="#8B6EC1" />
        <path d="M12.7326 7.4624C11.9112 6.68057 10.8224 6.25 9.66667 6.25H8.33333C7.1776 6.25 6.08876 6.68057 5.26742 7.4624C4.45011 8.2404 4 9.26735 4 10.3542C4 10.5267 4.14924 10.6667 4.33333 10.6667H13.6667C13.8508 10.6667 14 10.5267 14 10.3542C14 9.26735 13.5499 8.2404 12.7326 7.4624Z" fill="#8B6EC1" />
        <path d="M14.9998 1.33301C14.0073 1.33301 13.1998 2.12156 13.1998 3.09082C13.1998 4.06008 14.0073 4.84863 14.9998 4.84863C15.9923 4.84863 16.7998 4.06008 16.7998 3.09082C16.7998 2.12156 15.9923 1.33301 14.9998 1.33301Z" fill="#8B6EC1" />
        <path d="M17.2395 5.99701C16.7467 5.50836 16.0935 5.23926 15.4 5.23926H14.6C13.9066 5.23926 13.2533 5.50836 12.7605 5.99701C12.2701 6.48326 12 7.1251 12 7.80436C12 7.91223 12.0895 7.99967 12.2 7.99967H17.8C17.9105 7.99967 18 7.91223 18 7.80436C18 7.1251 17.7299 6.48326 17.2395 5.99701Z" fill="#8B6EC1" />
        <path d="M2.99983 1.33301C2.00731 1.33301 1.19983 2.12156 1.19983 3.09082C1.19983 4.06008 2.00731 4.84863 2.99983 4.84863C3.99235 4.84863 4.79983 4.06008 4.79983 3.09082C4.79983 2.12156 3.99235 1.33301 2.99983 1.33301Z" fill="#8B6EC1" />
        <path d="M5.23955 5.99701C4.74675 5.50836 4.09345 5.23926 3.4 5.23926H2.6C1.90656 5.23926 1.25325 5.50836 0.760453 5.99701C0.270067 6.48326 0 7.1251 0 7.80436C0 7.91223 0.0895467 7.99967 0.2 7.99967H5.8C5.91045 7.99967 6 7.91223 6 7.80436C6 7.1251 5.72993 6.48326 5.23955 5.99701Z" fill="#8B6EC1" />
      </svg>

      Select the No. of Guests
    </span>
    <div
      className=" p-[1px]  rounded-2xl overflow-hidden"
      style={{
        background: 'radial-gradient(146.49% 146.68% at 64.38% 89.8%, #BD91FF 35.15%, #FAFAFA 74.52%)',
        borderRadius : "20px"
      }}
    >
      <div className="bg-white px-4 pt-[36px] pb-[21px] rounded-2xl" style={{borderRadius : "20px"}}>
      <div className="pl-2 md:hidden">
            <GuestCount
              guests={props.guests}
              selectedGuest={props.selectedGuest}
              setSelectedGuest={props.setSelectedGuest}
            />
      </div>
      <div className="mt-4 pl-2 hidden md:block">
            <FullScreenGuestCount
              guests={props.guests}
              selectedGuest={props.selectedGuest}
              setSelectedGuest={props.setSelectedGuest}
            />
      </div>
      </div>
    </div>


  </div>
  )
}

export default GuestAmount