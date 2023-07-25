import img1 from "../Image/livepure.webp";
import { AiOutlineMenu } from 'react-icons/Ai';
import { AiOutlineClose } from 'react-icons/Ai';

import { useState } from "react";
import Buttonss from "./Buttonss";
import { faL } from "@fortawesome/free-solid-svg-icons";
// import { faL } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {

  const [Nav, SetNav] = useState(false);
  const ShoeMenu = () => {

    SetNav(!Nav);
  }

//  const Navs = ()=>{
  let Links = [
    {name:"Special Pricing",link:"#ben"},
    {name:"How it Works?",link:"#Works"},
    {name:"Ingrediants",link:"#Ingredients"}
  ];

//  }
  return (

    <>
      <div className="bg-sky-900 flex justify-between items-center px-12 py-4">

        <img
          src={img1}
          className="md:w-[100px] lg:w-[140px] xs:w-[150px] rounded-xl"
        />
        <nav className="">
          <ul className={`md:flex md:items-center xs:absolute xs:left-0  xs:text-black md:static w-full xs:h-[300px] md:h-[50px] bg-sky-900 xs:justify-center xs:flex xs:flex-col md:flex-row xs:items-center ${Nav ? "top-16 duration-1000 opacity-100 z-[1]" :"-top-[400px]"}`}>

            {
              Links.map((Link) =>(
                <li key={Link.name} className="md:ml-8 xs:text-2xl md:text-lg lg:text-2xl md:mt-9 xs:mb-9">
                  <a href={Link.link} className="text-white hover:text-yellow-500 duration-500 font-extrabold">{Link.name}</a>
                </li>
              ))
            }
            <Buttonss/>



          </ul>
        </nav>
        {/* <button className=" xs:hidden md:block md:px-2 py-1 lg:p-4 lg:text-xl lg:hover:bg-black  bg-red-600 md:text-sm rounded-ee-3xl font-semibold text-white  xl:block lg:block">Order now</button> */}
        {/* <input type="text" placeholder="please search" className="rounded-xl h-10 w-[200px] text-center"/> */}

        {/* <AiOutlineMenu className="w-12 h-14 text-white md:hidden"/> */}

        <div onClick={ShoeMenu} className="text-5xl text-white absolute top-4 right-8 md:hidden">
          {Nav ? <AiOutlineClose /> : <AiOutlineMenu />}

        </div>

      </div>

    </>
  )
}
export default Navbar;