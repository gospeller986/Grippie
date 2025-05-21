import React from 'react'

interface Props {
    stagCount : number ;
    silverCount : number ;
    increaseStag : () => void ;
    decreaseStag : () => void ;
    increaseSilver : () => void ;
    decreaseSilver : () => void ;
}
const EntryPackages = (props : Props) => {
    return (
        <div>
            <div className='w-full'>
                <div className='flex flex-row w-full justify-between '>
                    <h1 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: "#535353"
                    }}>Stag Entry</h1>
                    <div className='flex flex-row w-[97px] text-white justify-between rounded-[14px] px-[6px]'
                        style={{
                            background: "linear-gradient(79.47deg, #6239C9 -17.78%, #3855FF 76.08%)",
                            border: "1.5px solid #4BA2F9",
                            height: '32px',
                            alignItems: "center",
                        }}
                    >
                        <button onClick={() => props.decreaseStag()}>-</button>
                        <h1>{props.stagCount}</h1>
                        <button onClick={() => props.increaseStag()}>+</button>
                    </div>
                </div>
                <div className='mt-[19px]'>
                    <h1 style={{
                        fontSize: '12px',
                        fontWeight: '400',
                        color: "#535353"
                    }}>
                        Admission for one individual only. Cover charge redeemable on food & drinks. Priced at INR 2000
                    </h1>
                </div>
            </div>

            <div className='w-full mt-[47px]'>
                <div className='flex flex-row w-full justify-between '>
                    <h1 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: "#535353"
                    }}>Couple Entry</h1>
                    <div className='flex flex-row w-[97px] text-white justify-between rounded-[14px] px-[6px]'
                        style={{
                            background: "#DDE2FF",
                            border: "1.5px solid #CAD6FF",
                            height: '32px',
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <h1 className='text-[#5B5ED4]'>Add</h1>
                    </div>
                </div>
                <div className='mt-[19px]'>
                    <h1 style={{
                        fontSize: '12px',
                        fontWeight: '400',
                        color: "#535353"
                    }}>
                        Admission for one couple only. Cover charge redeemable
                        on food & drinks. Priced at INR 1500
                    </h1>
                </div>
            </div>

            <div className='w-full mt-[47px]'>
                <div className='flex flex-row w-full justify-between '>
                    <h1 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: "#535353"
                    }}>Silver Package</h1>
                    <div className='flex flex-row w-[97px] text-white justify-between rounded-[14px] px-[6px]'
                        style={{
                            background: "linear-gradient(79.47deg, #6239C9 -17.78%, #3855FF 76.08%)",
                            border: "1.5px solid #4BA2F9",
                            height: '32px',
                            alignItems: "center",
                        }}
                    >
                        <button className='text-[18px]' onClick={() => props.decreaseSilver()}>-</button>
                        <h1>{props.silverCount}</h1>
                        <button className='text-[18px]'  onClick={() => props.increaseSilver()}>+</button>
                    </div>
                </div>
                <div className='mt-[19px]'>
                    <h1 style={{
                        fontSize: '12px',
                        fontWeight: '400',
                        color: "#535353"
                    }}>
                        Priority reservations: Up to 10% off dining. Complimentary welcome drink.
                        Personalized recommendations Special occasion perks. Priced at INR 4500
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default EntryPackages