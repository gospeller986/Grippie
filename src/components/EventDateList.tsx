import React, { useEffect, useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface IDate {
    date: Date;
    dayStr: string;
    dateStr: string;
    monthStr: string;
}



interface Props {
    nextNumberOfDays?: number,
    selectedDate: Date | undefined,
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>
    enabled ?: {
        guest: boolean;
        date: boolean;
        time: boolean;
        seat: boolean;
    }

}

const generateNextNDates = (startDate: Date, n: number): IDate[] => {
    const dates: IDate[] = [];
    for (let i = 0; i < n; i++) {
        const d = new Date(startDate);
        d.setDate(startDate.getDate() + i);
        dates.push({
            date: d,
            dayStr: d.toLocaleDateString("en-US", { weekday: "short" }),
            dateStr: d.getDate().toString(),
            monthStr: d.toLocaleDateString("en-US", { month: "short" }),
        });
    }
    return dates;
};


const EventDateList = (props: Props) => {

    const { selectedDate, setSelectedDate } = props;
    // const dateList = generateNextNDates(props.nextNumberOfDays ?? 9);
    const [startDate, setStartDate] = useState<Date>(selectedDate ?? new Date());
    const [open, setOpen] = useState(false);

    const dateList = generateNextNDates(startDate, props.nextNumberOfDays ?? 9);

    const isSameDay = (d1: Date | undefined, d2: Date) =>
        d1?.toDateString() === d2.toDateString();

    const handleCalendarSelect = (date: Date | undefined) => {
        if (date) {
            setSelectedDate(date);
            setStartDate(date); // Update starting point for the list
            setOpen(false);
        }
    };
    useEffect(()=>{
        console.log(props?.enabled)
    },[])
    return (
        <div className="grid grid-cols-5 gap-3">
            {dateList.map((currDate: IDate, index) => {
                const isSelected = isSameDay(selectedDate, currDate.date);
                const baseClasses = 'h-[77px] w-[58px] rounded-[14px] flex flex-col items-center justify-center border-[1px] gap-1 font-[700] p-[12px]';
                const activeClasses = 'bg-[#8AC926] text-white border-[#D5F6A1] shadow-[1px_1px_7.9px_0px_#C9F57C]';
                const inactiveClasses = 'border-purple-300 text-[#797979]';

                return (
                    <button
                        key={index}
                        onClick={() => setSelectedDate(currDate.date)}
                        className={`${baseClasses} ${isSelected ? activeClasses : inactiveClasses}`}
                        style={{
                            padding: '12px'
                        }}
                        disabled={!props?.enabled?.date}
                    >
                        <div>
                            <h1 style={{ fontSize: "10px", fontWeight: "600", fontFamily: "ProximaNovaL", marginBottom: "5px", lineHeight: "12px" }}>{currDate.dayStr.toUpperCase()}</h1>
                            <h1 style={{ fontSize: "20px", fontWeight: "700", lineHeight: "16px" }}>{currDate.dateStr}</h1>
                            <h1 style={{ fontSize: "15px", fontWeight: "700", lineHeight: "12px", letterSpacing: "-0.5px" }}>{currDate.monthStr}</h1>
                        </div>
                    </button>
                );
            })}

            <Popover open={open} onOpenChange={setOpen} >
                <PopoverTrigger asChild>
                    <button
                        onClick={() => setOpen(!open)}
                        className={`h-[77px] w-[58px] rounded-[14px] flex flex-col items-center justify-center text-[16px] text-center font-[700] p-[12px]
                            disabled:text-gray-400 disabled:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed
                            `}
                        style={{
                            padding: '12px',
                            backgroundColor: !props?.enabled?.date ? "#f3f4f6"  :  "#E7EBFF",
                            border: !props?.enabled?.date ?  "1px solid #d1d5dc"   :  "1px solid #D9C5FF",
                            gap: 4
                        }}
                        disabled={!props?.enabled?.date}
                    >
                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.21418 1C7.21418 0.585786 6.87839 0.25 6.46418 0.25C6.04996 0.25 5.71418 0.585786 5.71418 1H7.21418ZM5.71418 5.19667C5.71418 5.61088 6.04996 5.94667 6.46418 5.94667C6.87839 5.94667 7.21418 5.61088 7.21418 5.19667H5.71418ZM16.7856 5.19667C16.7856 5.61088 17.1214 5.94667 17.5356 5.94667C17.9498 5.94667 18.2856 5.61088 18.2856 5.19667H16.7856ZM18.2856 1.00004C18.2856 0.585826 17.9498 0.25004 17.5356 0.25004C17.1214 0.25004 16.7856 0.585826 16.7856 1.00004H18.2856ZM0.928473 20.6721L1.67847 20.6721L0.928473 20.6721ZM0.928483 6.75882L1.67848 6.75882V6.75882H0.928483ZM5.71418 1V5.19667H7.21418V1H5.71418ZM17.5356 3.33482H18.9195V1.83482H17.5356V3.33482ZM16.7856 2.58482V5.19667H18.2856V2.58482H16.7856ZM18.2856 2.58482V1.00004H16.7856V2.58482H18.2856ZM0.178473 20.6721C0.178469 23.3878 2.3693 25.5962 5.08025 25.5962V24.0962C3.20527 24.0962 1.67847 22.567 1.67847 20.6721L0.178473 20.6721ZM22.3213 20.6722C22.3213 22.567 20.7945 24.0962 18.9195 24.0962V25.5962C21.6305 25.5962 23.8213 23.3878 23.8213 20.6722H22.3213ZM23.8213 6.75882C23.8213 4.04315 21.6305 1.83482 18.9195 1.83482V3.33482C20.7945 3.33482 22.3213 4.86402 22.3213 6.75882H23.8213ZM1.67848 6.75882C1.67848 4.86402 3.20528 3.33482 5.08027 3.33482V1.83482C2.36932 1.83482 0.178483 4.04315 0.178483 6.75882H1.67848ZM0.928467 10.4436H23.0713V8.94359H0.928467V10.4436ZM22.3213 6.75882V20.6722H23.8213V6.75882H22.3213ZM1.67847 20.6721L1.67848 6.75882L0.178483 6.75882L0.178473 20.6721L1.67847 20.6721ZM5.08027 3.33482H17.5356V1.83482H5.08027V3.33482ZM18.9195 24.0962H5.08025V25.5962H18.9195V24.0962Z" fill={!props?.enabled?.date ? "#99a1af" :"#5B5ED4"} />
                        </svg>

                        <h1 style={{ fontSize: "10px", fontWeight: "600", color: !props?.enabled?.date ? '#99a1af' : '#5B5ED4' }}>Expand</h1>

                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto border-0 p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleCalendarSelect}
                        disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                        }}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default EventDateList