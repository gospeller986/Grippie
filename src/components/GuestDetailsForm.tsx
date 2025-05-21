import React, { useState } from 'react'

interface Props {
    name: string,
    phoneNumber: string,
    handleNameChange: any,
    handlePhoneNumberChange: any
}

const GuestDetailsForm = (props: Props) => {

    const { name, phoneNumber, handleNameChange, handlePhoneNumberChange } = props;



    return (
        <div className='mt-[35px] w-full md:w-[520px] px-[18px] z-10'>
            <div className='h-[244px] px-[29px] '
                style={{
                    background: "radial-gradient(140.65% 140.65% at 17.4% 5.37%, #FAFAFA 0%, #FAFAFA 49.5%, #F2EDFC 100%)",
                    borderRadius: "20px",
                    border: "1.5px solid #BD91FF",

                }}
            >
                <div className='flex flex-row items-center gap-3  pt-[24px] '>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.93359 11.4609H9.06641C10.4485 11.4609 11.7394 11.9399 12.7432 12.8037L12.9404 12.9814C13.6967 13.6986 14.1863 14.5689 14.3906 15.5H1.60938C1.79645 14.6476 2.22287 13.8465 2.87402 13.167L3.05957 12.9814C4.08855 12.0058 5.45941 11.4609 6.93359 11.4609ZM8 1.5C9.91642 1.50023 11.2998 2.93443 11.2998 4.48242C11.2998 6.03041 9.91642 7.46461 8 7.46484C6.08334 7.46484 4.69922 6.03054 4.69922 4.48242C4.69922 2.9343 6.08334 1.5 8 1.5Z" fill="#8B6EC1" stroke="#8B6EC1" stroke-width="3" />
                    </svg>

                    <h1 style={{
                        fontWeight: 700,
                        fontSize: 18,
                        color: '#8B6EC1'
                    }}>Guest Details</h1>
                </div>

                <div className='h-[1px] bg-[#C4C4C4] mt-[22px]  opacity-[48%] ' />

                <div style={{
                    border: "1.5px solid #CAD6FF",
                    marginTop: "25px",
                    borderRadius: "12px",
                    height: '45px',
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <div
                        style={{
                            backgroundColor: "#E7EBFF",
                            width: "97px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            borderTopLeftRadius: 12,
                            borderBottomLeftRadius: 12
                        }}
                    >
                        <h1 style={{ color: "#5B5ED4", fontSize: "15px", fontWeight: '700' }}>Name</h1>
                    </div>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter Name"
                        className="w-full px-3 outline-none placeholder:italic placeholder:text-[12px] placeholder:leading-[13px] placeholder:font-[400] focus:ring-0 focus:outline-none"
                        style={{
                            fontFamily: 'ProximaNovaA',
                            letterSpacing: '0%',
                            fontWeight: 400,
                            fontStyle: 'italic',
                            fontSize: '12px',
                            lineHeight: '13px',
                            verticalAlign: 'middle',
                        }}
                    />
                </div>
                <div style={{
                    border: "1.5px solid #CAD6FF",
                    marginTop: "18px",
                    borderRadius: "12px",
                    height: '45px',
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <div
                        style={{
                            backgroundColor: "#E7EBFF",
                            width: "240px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            gap: "5px",
                            borderTopLeftRadius: 12,
                            borderBottomLeftRadius: 12
                        }}
                    >
                        <h1 style={{ color: "#5B5ED4", fontSize: "15px", fontWeight: '700' }}>Phone </h1>
                        <span style={{ color: "#CAD6FF" }}> | </span>
                        <select style={{ color: "#5B5ED4", fontSize: "15px", fontWeight: '700' }} >
                            <option value="+91">+91</option>
                            <option value="+92">+92</option>
                            <option value="+93">+93</option>
                            <option value="+94">+94</option>
                        </select>

                    </div>
                    <input
                        type="text"
                        onChange={handlePhoneNumberChange}
                        value={phoneNumber}
                        placeholder="Enter Number"
                        className="w-full px-3 outline-none placeholder:italic placeholder:text-[12px] placeholder:leading-[13px] placeholder:font-[400] focus:ring-0 focus:outline-none"
                        style={{
                            fontFamily: 'ProximaNovaA',
                            letterSpacing: '0%',
                            fontWeight: 400,
                            fontStyle: 'italic',
                            fontSize: '12px',
                            lineHeight: '13px',
                            verticalAlign: 'middle',
                        }}
                    />
                </div>

            </div>

        </div>
    )
}

export default GuestDetailsForm