// import React from 'react'
import img1 from "../Image/claim.webp"


const SectionTen = () => {
  return (
    <div className="bg-cyan-900	text-center flex flex-col justify-center items-center gap-4 mt-12" >
        <h1 className='text-5xl font-extrabold text-white mt-12'>CLAIM YOUR DISCOUNTED LIV PURE PACKAGE BELOW</h1>
        <p className='text-3xl font-extrabold text-white'>WHILE SUPPLIES LAST</p>
        <img src={img1} className="w-[500px] mt-16"/>
        <h2 className="text-5xl text-white font-bold">
            <strong>
            Regular Price : <s>$199/per bottle</s>
            </strong>
        </h2>
        <h1 className="text-5xl text-white font-bold pb-12">Only for: $39/per Bottle</h1>
        <button className=" bg-yellow-400 rounded-2xl shadow-lg shadow-cyan-500/50 text-black text-2xl font-extrabold  px-12 py-6 mb-12">
            GET UPTO 50% DISCOUNT NOW
        </button>
    </div>
  )
}

export default SectionTen