import img3 from "../Image/ladius.webp";
import indicatePic from "../Image/indicate.svg";

const SectionThird = () => {
    return (
        <>
            <div className="md:w-[90%] flex md:justify-evenly md:m-auto items-center md:flex-row xs:flex-col">

                <div className="md:w-[40%]">
                    <img src={img3} className="md:w-full" />
                </div>
                <div className="xs:mt-8 xs:w-[88%] md:w-[60%] xs:m-auto md:-mr-14">
                    <h1 className="md:text-6xl xs:text-4xl font-bold text-red-600">Boost Your Liver Health with</h1>
                    <h2 className="text-4xl xs:text-3xl xs:font-bold xs:mt-3">Livpure: The Powerhouse Organ</h2>
                    <h3 className="text-2xl">Support Supplement.</h3>


                    <div className="flex flex-col items-center justify-center mt-8 md:w-[85%]">

                        <div className="flex items-center ">
                            <img src={indicatePic} className="w-12" />
                            <span className="text-2xl font-semibold  justify-evenly items-center">It is easy to consume as it comes in the form of capsules.and benificial</span>
                        </div>
                        <div className="flex justify-evenly items-center text-2xl font-semibold">
                            <img src={indicatePic} className="w-12" />
                            <span className="text-2xl font-semibold  justify-evenly items-center">can boost energy levels while also assisting in the breakdown of faItt</span>
                        </div>
                        <div className="flex justify-evenly items-center">
                            <img src={indicatePic} className="w-12" />
                            <span className="text-2xl font-semibold ">It has the potential to strengthen the heart, gallbladder, lung, and joint factions..</span>
                        </div>
                        <div className="flex justify-evenly items-center">
                            <img src={indicatePic} className="w-12" />
                            <p className="text-2xl font-semibold ">It has the potential to improve a variety of cellular functions..</p>
                        </div>
                        <div className="flex justify-evenly items-center">
                            <img src={indicatePic} className="w-12" />
                            <p className="text-2xl font-semibold ">It can help with the production of proteins as well as blood flow.

                                .</p>
                        </div>
                        <div className="flex justify-evenly items-center">
                            <img src={indicatePic} className="w-12" />
                            <p className="text-2xl font-semibold ">Manufactured in an FDA-registered and GMP-certified facility..</p>
                        </div>
                        <div className="flex justify-evenly items-center">
                            <img src={indicatePic} className="w-12" />
                            <p className="text-2xl font-semibold ">It has the potential to strengthen the heart, gallbladder, lung, and joint factions..</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default SectionThird;