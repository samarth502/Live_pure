import img1 from "../Image/livepure.webp";


const Navbar = () =>{
    return (
        <>
           <div className="flex justify-between items-center shadow-lg bg-sky-900 px-36 py-7">
      
          <img
            src={img1}
            className="w-[160px] rounded-xl"
          />
        <nav className="">
            <ul className="flex text-4xl">
                <li className="px-7 font-semibold text-white font-mono hover:text-red-700"><a href="#">Home</a></li>
                <li className="px-7 font-semibold text-white font-mono hover:text-red-700"><a href="#">About</a></li>
                <li className="px-7 font-semibold text-white font-mono hover:text-red-700"><a href="#">Contact</a></li>



            </ul>
        </nav>
         <button className="p-4 bg-red-600 text-xl rounded-ee-3xl font-semibold text-white">Order now</button>
         {/* <input type="text" placeholder="please search" className="rounded-xl h-10 w-[200px] text-center"/> */}
        
      </div>
        </>
    )
}
export default Navbar;