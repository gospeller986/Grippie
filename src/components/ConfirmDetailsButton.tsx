import React from 'react'

interface Props {
   onClickHandler : () => void ;
}
const ConfirmDetailsButton = (props : Props) => {
  return (
    <button
    onClick={()=> props.onClickHandler()} 
    className='w-full rounded-[15px]'
    style={{
        height : "67px",
        background: "linear-gradient(79.28deg, #94DC23 -41.63%, #E8FEA6 138.57%)",
        border: "1.5px solid #D5F6A1",
        color : "#417035",
        fontSize : '20px',
        fontWeight : "500"
    }}>
       Confirm Details
    </button>
  )
}

export default ConfirmDetailsButton