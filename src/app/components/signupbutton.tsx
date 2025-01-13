import React from 'react'


const signupbutton=(props: any) => {
  return (
      <button className=" bg-blue-russian-gradient hover:shadow-custom-large transition-transform duration-800 hover:scale-[1.045] relative   p-[2px] text-white  rounded-full " >
        <div className=' bg-[#5856D6]   w-full md:px-6 px-2  py-2 rounded-full'>
          {props.text}
        </div>
      </button>
  )
}

export default signupbutton