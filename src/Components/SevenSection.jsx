import img1 from "../Image/addcart1.webp"
import img2 from "../Image/addcart2.webp"
import img3 from "../Image/addcart3.webp"

const SevenSection = () =>{
    return (
        <>

<div className="bg-red-700 text-white xs:font-extrabold" id="ben">
            <h1 className="md:text-5xl xs:text-3xl items-center text-center p-6">Limited Time Special Pricing - Act Now! Secure Your
   <p className="md:text-5xl xs:text-3xltext-center mt-5 font-extrabold">Liv Pure While Stocks Last</p>
            </h1>
            </div>

            <div className="flex md:flex-row justify-around xs:flex-col items-center md:px-14 md:py-9 xs:my-8 xs:w-full">

                <div className="h-[600px] md:w-[350px] xs:w-[70%] hover:scale-110 duration-300 ease-in-out xs:mb-10">
                    <a href="https://www.liv-pure.com/welcome?hop=dimpleb"><img src={img1} className=" bg-cyan-900 shadow-lg shadow-cyan-500/50 h-full w-full"/>
                    </a>
                    
                    </div>

               <div className="h-[600px] md:w-[350px] xs:w-[70%] hover:scale-110 duration-300 ease-in-out xs:mb-10"><a href="https://www.liv-pure.com/welcome?hop=dimpleb"><img src={img2} className="bg-cyan-900 shadow-lg shadow-cyan-500/50 h-full w-full"/>
              </a>
              </div>

                <div className="h-[600px] md:w-[350px] xs:w-[70%] hover:scale-110 duration-300 ease-in-out xs:mb-10"><a href="https://www.liv-pure.com/welcome?hop=dimpleb"><img src={img3} className="bg-cyan-900 shadow-lg shadow-cyan-500/50 h-full w-full"/>
                </a>
                
                </div>

                
            </div>

        </>
    )
}
export default SevenSection;