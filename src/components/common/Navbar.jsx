import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import studyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../../data/navbar-link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { category } from "../../../data/category";

function Navbar() {
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <nav className="z-[10] flex w-full h-14 items-center justify-center border-b-[1px] border-b-richblack-700 text-white translate-y-0 transition-all ">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to={"/"}>
          <img
            src={studyNotionLogo}
            width={160}
            height={42}
            loading="lazy"
            alt="Logo-Full-Light.png"
          />
        </Link>
        <ul className="hidden sm:flex gap-x-6 text-richblack-25">
          {NavbarLinks.map((link, index) => (
            <li key={index}>
              {link.title === "Catalog" ? (
                <div
                  className={`group relative flex cursor-pointer items-center gap-1 ${
                    matchRoute("/catalog/:catalogName")
                      ? "bg-yellow-25 text-black rounded-xl p-1 px-3"
                      : "text-richblack-25 rounded-xl p-1 px-3"
                  }`}
                >
                  <p>{link.title}</p>
                  <MdKeyboardArrowDown />
                  <div
                    className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] 
                  flex-col rounded-lg bg-richblack-5  text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible 
                  group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]"
                  >
                    <div className="absolute left-[50%] top-0 z-[100] h-6 w-5
                    rotate-45 translate-x-[80%] translate-y-[-40%] *:select-none rounde bg-richblack-5" />
                    <div className="max-h-[55vh] overflow-y-auto p-4 w-full">
                    {category?.map((sublink, i) => (
                      <Link
                        className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50 block"
                        key={i}
                        to={`/catalog/${sublink.name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`}
                      >
                        <p>{sublink.name}</p>
                      </Link>
                    ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link to={link.path}>
                  <p
                    className={`${
                      matchRoute(link?.path)
                        ? "bg-yellow-25 text-black"
                        : "text-richblack-25"
                    } rounded-xl p-1 px-3 `}
                  >
                    {link.title}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="flex gap-x-4 items-center">
          <Link to="/login">
            <button
              className={` px-[12px] py-[8px] text-richblack-100 rounded-md 
                                 ${
                                   matchRoute("/login")
                                     ? "border-[2.5px] border-yellow-50"
                                     : "border border-richblack-700 bg-richblack-800"
                                 } `}
            >
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button
              className={` px-[12px] py-[8px] text-richblack-100 rounded-md 
                                 ${
                                   matchRoute("/signup")
                                     ? "border-[2.5px] border-yellow-50"
                                     : "border border-richblack-700 bg-richblack-800"
                                 } `}
            >
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
