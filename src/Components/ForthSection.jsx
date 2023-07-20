import img1 from "../Image/multipleCircle.webp";
import img2 from "../Image/scienticfic.webp";

const ForthSection = () =>{
    return (
        <>
        <div className="bg-sky-900 text-white font-semibold ">
            <h1 className="text-6xl items-center text-center p-6">Why Choose Liv Pure Liver Support Formula?
            </h1>
            </div>

            <div className="flex justify-center items-center py-9 flex-col">
                <img src={img1}/>
                <img src={img2}/>

            </div>

            
        </>
    )
}
export default ForthSection;