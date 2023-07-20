import img1 from "../Image/addcart1.webp"
import img2 from "../Image/addcart2.webp"
import img3 from "../Image/addcart3.webp"

const SevenSection = () =>{
    return (
        <>

<div className="bg-red-700 text-white font-semibold">
            <h1 className="text-6xl items-center text-center p-6">Limited Time Special Pricing - Act Now! Secure Your
   <p className="text-5xl text-center mt-5 font-extrabold">Liv Pure While Stocks Last</p>
            </h1>
            </div>

            <div className="flex justify-around items-center px-14 py-9 ">

                <div className="h-[600px] w-[350px] hover:scale-110 duration-300 ease-in-out"><img src={img1} className=" bg-cyan-900 shadow-lg shadow-cyan-500/50 h-full w-full"/></div>
                <div className="h-[600px] w-[350px] hover:scale-110 duration-300 ease-in-out"><img src={img2} className="bg-cyan-900 shadow-lg shadow-cyan-500/50 h-full w-full"/></div>

                <div className="h-[600px] w-[350px] hover:scale-110 duration-300 ease-in-out"><img src={img3} className="bg-cyan-900 shadow-lg shadow-cyan-500/50 h-full w-full"/></div>

                
            </div>

        </>
    )
}
export default SevenSection;