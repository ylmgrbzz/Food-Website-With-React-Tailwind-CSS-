import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mx-auto flex justify-between items-center p-4 max-w-[1640px] ">
      <div className="flex items-center">
        <div onClick={() => setShowMenu(!showMenu)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2  ">Delivery</p>
          <p className=" p-2 ">Pickup</p>
        </div>
      </div>

      <div className="">
        <AiOutlineSearch size={25} />
        <input className="" type="" placeholder="" />
      </div>
      <button className="">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {showMenu ? <div className=""></div> : ""}

      <div className={showMenu}>
        <AiOutlineClose
          onClick={() => setShowMenu(!showMenu)}
          size={30}
          className=""
        />
        <h2 className="">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
