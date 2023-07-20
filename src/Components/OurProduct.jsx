import React from 'react'
import img1 from "../Image/watch.jpeg";
import img2 from "../Image/shocs.jpeg";
import img3 from "../Image/sqare.jpeg";
// import img4 from "../Image/watch.jpeg";



const OurProduct = () => {
  return (
    <div className=' mt-7 px-20'>
        <h1 className='text-4xl font-extrabold'>OurProduct</h1>
        <div className='flex justify-between items-center mt-11'>
        <div>
                <img src={img1} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>
            <div>
                <img src={img3} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>
            <div>
                <img src={img2} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>
            <div>
                <img src={img3} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>
            <div>
                <img src={img1} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>


        </div>






     {/*  */}
     <div className='flex justify-between items-center'>
        <div className=''>
                <img src={img1} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>
            <div>
                <img src={img3} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>
            <div>
                <img src={img2} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>
            <div>
                <img src={img3} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>
            <div>
                <img src={img1} className='w-[300px] h-[200px]'/>
                <p className='text-4xl font-bold text-center mt-10'>shoes</p>    
            </div>


        </div>

        </div>
  )
}

export default OurProduct