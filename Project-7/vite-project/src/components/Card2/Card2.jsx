import React from 'react'

const Card2 = (props) => {
  return (
    <div  className='flex items-start gap-[16px] sm:flex-col sm:items-center'>
        <img src={props.img} alt="" />
        <div className='max-w-[270px] flex flex-col gap-[11px]'>
            <h1 className='sm:text-center '>{props.h1}</h1>
            <p className='sm:text-center font-[400] text-[16px] text-[#72787D] leading-[24px]'>
                {props.p}
            </p>
        </div>
    </div>
  )
}

export default Card2