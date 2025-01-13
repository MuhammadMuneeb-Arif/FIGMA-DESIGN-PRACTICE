import React from 'react'

export const PrimaryButton = (props : any ) => {
  return (
    <button
    className={` ${props.bg} relative p-[1px] hover:shadow-custom-large text-white rounded-full shadow-custom-purple w-full transition-transform duration-800  `}
  >
    <div className={`h-full w-full px-6 py-1 rounded-full text-nowrap text-center ${props.classsName}`}>
      {props.children}
    </div>
  </button>
  

  )
}


export const SecondayButton = ({children} : any) => {
  return (
    <button className=" bg-blue-russian-gradient  hover:shadow-custom-large relative  shadow-custom-purple p-[1px] text-white w-full  rounded-full transition-transform duration-800  " >
    <div className=' bg-[#5856D6] text-xs md:text-base  text-nowrap  px-4  py-2 rounded-full'>
      {children}
    </div>
  </button>
  )
}