import React from 'react'
import Marquee from "react-fast-marquee";
import Slide from './slide';

const Slidespage=() => {
  return (
    <div >
      <h3 className="text-3xl  md:text-5xl h-auto font-light md:font-bold m-16 text-center mt-14 bg-custom-gradient bg-clip-text text-transparent ">Explore the Best Generate Images</h3>

      <Marquee pauseOnHover={true} direction='right' speed={100} loop={0}>
        <Slide />
      </Marquee>
      <Marquee pauseOnHover={true} direction='left' speed={100} loop={0}>
        <Slide />
      </Marquee>
    </div>
  )
}

export default Slidespage