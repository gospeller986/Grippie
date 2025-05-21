import React from 'react'

interface Props  {
    guests : any ;
    selectedGuest : any ;
    setSelectedGuest : any ;
}

const GuestCount = (props: Props) => {
  return (
    <div className="grid grid-cols-5 gap-3">
    {props.guests.map((guest : any) => {
      const isSelected = props.selectedGuest === guest;
      const baseClasses = 'h-12 w-12 rounded-[20px] flex items-center justify-center border-2 text-[16px] text-center font-[700]';
      const activeClasses = 'bg-lime-400 text-white border-lime-400 shadow-[1px_1px_7.9px_0px_#C9F57C]';
      const inactiveClasses = 'border-purple-300 text-[#797979]';

      return (
        <button
          key={guest}
          onClick={() => props.setSelectedGuest(guest)}
          className={`${baseClasses} ${isSelected ? activeClasses : inactiveClasses}`}
        >
          {guest === 10 ? '10+' : guest}
        </button>
      );
    })}
  </div>
  )
}

export default GuestCount