import React, { useState } from 'react'

interface ISeat {
    area: string
}

const seating: ISeat[] = [
    {
        area: "Indoor"
    },
    {
        area: "Outdoor"
    },
    {
        area: "Rooftop"
    }
]

const SeatingArea = () => {
    const [selectedSeat, setSelectedSeat] = useState<ISeat | null>(
        {
            area: "Outdoor"
        },
    )
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 mt-[28px]">
                {seating.slice(0, 9).map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedSeat(item)}
                        className={`px-4 py-2 rounded-xl font-semibold border ${selectedSeat?.area === item?.area
                            ? 'bg-[#8AC926] text-white border-[#D5F6A1] shadow-[1px_1px_7.9px_0px_#C9F57C]'
                            : 'text-[#797979] border-[#D9C5FF] border-[1.5px]'
                            }`}
                    >
                        {item?.area}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SeatingArea