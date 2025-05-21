import React from 'react'
import EditIconButton from './EditIconButton'
import { useRouter } from 'next/router'

interface IUserDetails {
    name: string,
    phoneNumber: string,

}

interface Props {
    userDetails: IUserDetails | null,
}

const GuestDetailsCard = (props: Props) => {
    const router = useRouter();
    const { userDetails } = props;
    const handleUserEdit = () => {
        router.push("/user-details")
    }
    return (
        <div className='w-full bg-white h-[180px] rounded-[18px]'
        >
            <div className='h-[62px] rounded-tl-[18px] rounded-tr-[18px] flex justify-center items-center'
                style={{
                    background: "linear-gradient(79.47deg, #6239C9 -17.78%, #3855FF 76.08%)"

                }}
            >
                <h1 style={{ fontSize: "18px", fontWeight: 700, color: "white", fontFamily: "ProximaNovaA" }}>Guest Details</h1>
            </div>
            <div
                className='h-[118px] border-b-2 border-l-2 border-r-2 border-[#BD91FF] rounded-bl-[18px] rounded-br-[18px] px-[24px] pt-[10px]'
                style={{
                    background: "radial-gradient(140.65% 140.65% at 17.4% 5.37%, #FAFAFA 0%, #FAFAFA 49.5%, #F2EDFC 100%)"

                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "space-between",
                    marginTop: "22px"
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: "start",
                    }}>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[8px]'>
                            <path d="M6.93359 12.0469H9.06641C10.4232 12.0469 11.7044 12.5436 12.7119 13.4619L12.9092 13.6514C13.7031 14.4484 14.2165 15.4346 14.4111 16.5H1.58887C1.76772 15.5208 2.21556 14.6086 2.90332 13.8486L3.09082 13.6514C4.12568 12.6125 5.48644 12.0469 6.93359 12.0469ZM8 1.5C9.83409 1.50025 11.2998 2.9736 11.2998 4.74609C11.2998 6.51858 9.83409 7.99194 8 7.99219C6.16569 7.99219 4.69922 6.51873 4.69922 4.74609C4.69922 2.97345 6.16569 1.5 8 1.5Z" stroke="#8A54F0" stroke-width="3" />
                        </svg>


                        <div style={{
                            display: 'flex',
                            flexDirection: "column"
                        }}>
                            <h1 style={{ color: "#585858", fontSize: '20px', fontWeight: "600" }}>{userDetails?.name}</h1>
                            <p style={{ color: "#9A9A9A" }} >+91 {userDetails?.phoneNumber}</p>
                        </div>
                    </div>
                    <div className='mt-[8px]'>
                        <EditIconButton onClickHandler={handleUserEdit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestDetailsCard