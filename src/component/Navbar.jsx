import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-14 bg-blue-500">
      <div className="lg:container mx-auto">
        <div className="flex">
          <div className="w-2/12 h-14 flex items-center ">
            <p className="uppercase font-bold text-lg text-white">
              Movie Marketplace
            </p>
          </div>
          <div className="w-8/12 h-14   flex justify-center items-center  ">
            <div className="relative flex shadow-ทก rounded-full overflow-hidden">
              <input className="h-10 w-80   outline-none p-4 pr-12    " />
              <div className="h-10 w-12   absolute right-0 rounded-r-full flex justify-center items-center    ">
                <SearchIcon className=" " />
              </div>
            </div>
          </div>
          <div className="w-2/12 h-14">
            <ul className="flex w-full h-full bg-red items-center cursor-pointer ">
              <li className=" w-full h-full   hover:bg-blue-600">
                <Link to="/home" className=" w-full h-full flex justify-center items-center">
                  <HomeIcon />
                  Home
                </Link>
              </li>
              <li className=" w-full h-full   hover:bg-blue-600">
                <Link to="/cart" className=" w-full h-full flex justify-center items-center relative">
                  <p className="absolute top-0 right-1 bg-yellow-400 rounded-full px-1 text-sm">
                    20
                  </p>
                  <ShoppingCartIcon />
                  Cart
                </Link>
              </li>
              <li className=" w-full h-full   hover:bg-blue-600">
                <Link to="/admin" className=" w-full h-full flex justify-center items-center">
                  <SupervisorAccountIcon />
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;