import img2 from "../Image/water.webp";
// import img3 from "../Image/bluelivepure.jpg";
import img4 from "../Image/fivestar.webp";
import img5 from "../Image/circle.webp";




const SectionTwo = () =>{
    return (
        <>

           <div className="h-[]">
            <h1 className="text-center md:text-6xl  font-extrabold font-serif text-red-700 xs:text-4xl mt-10">Livpure: The Powerhouse Organ Support Supplement.</h1>
            <img src={img2} className="md:mt-28"/>
            {/* <img src={img3} className="w-56 absolute bottom-0"/> */}
            <div className="flex flex-col justify-center items-center w-full xs:mt-14 md:mb-0">
            <img src={img4} className=""/>
            <img src={img5} className=" "/>
            </div>


           </div>

         <div className="bg-sky-900 text-white font-semibold ">
            <h1 className="md:text-4xl items-center text-center xs:p-4 xs:text-3xl md:p-5 md:mt-4">What is Liv Pure Supplement?
            </h1>
            </div>


            <div className="flex flex-col w-[80%] m-auto">
                <p className="py-10 px-6 md:text-4xl xs:text-2xl font-serif leading-snug">Liv Pure is a dietary supplement that supports liver health and weight loss. It contains a Purification and Fat-Burning Complex that helps to rejuvenate the liver, enhance energy levels, ignite the body's fat-burning furnace, improve metabolic function, and achieve healthy weight loss results.</p>

                <p className="px-6 md:text-4xl font-serif leading-snug xs:text-2xl">The Liv Pure formula works in two steps: first, it revitalizes the liver and stimulates metabolic health. This leads to a more efficient fat-burning process, which in turn results in weight loss.</p>

                <p className="py-14 px-6 md:text-4xl font-serif leading-snug xs:text-2xl">  The liver plays a crucial role in both fat burning and detoxification. It is responsible for processing everything we eat and drink, and it decides whether to use the nutrients for energy or store them as fat. When the liver is not functioning properly, it can lead to weight gain and other health problems.</p>
            </div>

        </>
    )
}
export default SectionTwo;