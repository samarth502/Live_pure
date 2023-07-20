import img3 from "../Image/ladius.webp";
import indicatePic from "../Image/indicate.svg";

const SectionThird = () =>{
    return (
        <>
        <div className="flex justify-evenly items-center">

            <div>
                <img src={img3} className="" />
            </div>
            <div className="">
                <h1 className="text-6xl font-bold text-red-600">Boost Your Liver Health with</h1>
                <h2 className="text-4xl">Livpure: The Powerhouse Organ</h2>
                <h3 className="text-2xl">Support Supplement.</h3>


           <div className="flex flex-col w-[88%] items-center justify-center mt-8">
                
           <div className="flex justify-evenly items-center w-[88%]">
                    <img src={indicatePic} className="w-12"/>
                    <p className="text-2xl font-semibold ">It is easy to consume as it comes in the form of capsules.and benificial</p>
                </div>
                <div className="flex justify-evenly items-center w-[88%]">
                    <img src={indicatePic} className="w-12"/>
                    <p className="text-2xl font-semibold  justify-evenly items-center">It can boost energy levels while also assisting in the breakdown of fat..</p>
                </div>
                <div className="flex justify-evenly items-center w-[88%]">
                    <img src={indicatePic} className="w-12"/>
                    <p className="text-2xl font-semibold ">It has the potential to strengthen the heart, gallbladder, lung, and joint factions..</p>
                </div>
                <div className="flex justify-evenly items-center w-[88%]">
                    <img src={indicatePic} className="w-12"/>
                    <p className="text-2xl font-semibold ">It has the potential to improve a variety of cellular functions..</p>
                </div>
                <div className="flex justify-evenly items-center w-[88%]">
                    <img src={indicatePic} className="w-12"/>
                    <p className="text-2xl font-semibold ">It can help with the production of proteins as well as blood flow.

.</p>
                </div>
                <div className="flex justify-evenly items-center w-[88%]">
                    <img src={indicatePic} className="w-12"/>
                    <p className="text-2xl font-semibold ">Manufactured in an FDA-registered and GMP-certified facility..</p>
                </div>
                <div className="flex justify-evenly items-center w-[88%]">
                    <img src={indicatePic} className="w-12"/>
                    <p className="text-2xl font-semibold ">It has the potential to strengthen the heart, gallbladder, lung, and joint factions..</p>
                </div>

                </div>
                
            </div>

        </div>
        </>
    )
}
export default SectionThird;