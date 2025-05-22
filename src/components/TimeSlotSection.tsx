import React, { useState } from 'react'

interface IHour {
  hour: string,
  meridian: string
}

const timings = [
  { time: 'Morning' },
  { time: 'Afternoon' },
  { time: 'Evening' },
  { time: 'Late Evening' },
  { time: 'After Hours' },
];

const hours: IHour[] = [
  {
    hour: "1:00",
    meridian: "PM"
  },
  {
    hour: "1:30",
    meridian: "PM"
  },
  {
    hour: "2:00",
    meridian: "PM"
  },
  {
    hour: "2:30",
    meridian: "PM"
  },
  {
    hour: "3:00",
    meridian: "PM"
  },
  {
    hour: "3:30",
    meridian: "PM"
  },
  {
    hour: "4:00",
    meridian: "PM"
  },
  {
    hour: "4:30",
    meridian: "PM"
  },
    {
    hour: "5:00",
    meridian: "PM"
  },
  {
    hour: "5:30",
    meridian: "PM"
  },
]

const TimeSlotSection = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>('Afternoon');
  const [selectedHour, setSelectedHour] = useState<IHour | null>({
    hour: "12:30",
    meridian: "PM"
  });

  return (
    <>
      <div className='w-full justify-center flex flex-col md:flex-row md:gap-10 items-center'>
        <div className="flex flex-col items-center space-y-3  md:mt-0">
          {/* First Row */}
          <div className="flex gap-4">
            {timings.slice(0, 3).map(({ time }) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-xl font-semibold border ${selectedTime === time
                  ? 'bg-[#8AC926] text-white border-[#D5F6A1] shadow-[1px_1px_7.9px_0px_#C9F57C]'
                  : 'text-[#797979] border-[#D9C5FF] border-[1.5px]'
                  }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* Second Row, Centered */}
          <div className="flex gap-4">
            {timings.slice(3).map(({ time }) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-xl font-semibold border ${selectedTime === time
                  ? 'bg-[#8AC926] text-white border-[#D5F6A1] shadow-[1px_1px_7.9px_0px_#C9F57C]'
                  : 'text-[#797979] border-[#D9C5FF] border-[1.5px]'
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className='h-[1px] md:h-[100px] opacity-[48%] bg-[#C4C4C4] w-[223px] md:w-[1px] mt-[28px]' />
        <div className="flex flex-col items-center space-y-3 md:mt-0">
          <div className="grid grid-cols-3 gap-4 mt-[28px]">
            {hours.slice(0, 9).map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedHour(item)}
                className={`px-4 py-2 rounded-xl font-semibold border ${selectedHour?.hour === item?.hour
                  ? 'bg-[#8AC926] text-white border-[#D5F6A1] shadow-[1px_1px_7.9px_0px_#C9F57C]'
                  : 'text-[#797979] border-[#D9C5FF] border-[1.5px]'
                  }`}
              >
                {item?.hour + " " + item?.meridian}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            {hours.slice(9).map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedHour(item)}
                className={`px-4 py-2 rounded-xl font-semibold border ${selectedHour?.hour === item?.hour
                  ? 'bg-[#8AC926] text-white border-[#D5F6A1] shadow-[1px_1px_7.9px_0px_#C9F57C]'
                  : 'text-[#797979] border-[#D9C5FF] border-[1.5px]'
                  }`}
              >
                {item?.hour + " " + item?.meridian}
              </button>
            ))}
          </div>
        </div>



      </div>
    </>
  )
}

export default TimeSlotSection