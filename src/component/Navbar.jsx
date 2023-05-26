import { useState } from "react";
import logo from "../assets/logo/logo.png";
import close from "../assets/icons/close.png";

const Navbar = () => {
  const [openLateralMenu, setOpenLateralMenu] = useState(false);
  const openMenu = () => {
    setOpenLateralMenu(!openLateralMenu);
  };

  return (
    <section className="lg:px-8 lg:h-24 fixed top-0 z-10 w-full flex p-2 justify-between bg-white lg:backdrop-blur-md lg:bg-opacity-70 h-16">
      
      <div className="flex items-center mx-2 w-1/5 text-slate-900">
        <img className="h-12 w-auto" src={logo} alt="BramsLF" />
        <span className="mx-1.5 hidden lg:block font-raleway font-bold text-myPalet-900 text-sm">BramsLF</span>
      </div>

      <nav className="w-full h-20 px-8 hidden lg:flex items-center">
        <ul className="flex items-center justify-center w-full">
          <li className="py-3 px-6 rounded-sm cursor-pointer hover:bg-myPalet-50 font-raleway font-bold text-myPalet-900 text-sm">
            HOME
          </li>
          <li className="py-3 px-6 rounded-sm cursor-pointer hover:bg-myPalet-50 font-raleway font-bold text-myPalet-900 text-sm">
            ABOUT ME
          </li>
          <li className="py-3 px-6 rounded-sm cursor-pointer hover:bg-myPalet-50 font-raleway font-bold text-myPalet-900 text-sm">
            CURRICULUM
          </li>
          <li className="py-3 px-6 rounded-sm cursor-pointer hover:bg-myPalet-50 font-raleway font-bold text-myPalet-900 text-sm">
            PORTAFOLIO
          </li>
        </ul>
        <button className="flex items-center justify-end w-1/5">
          <span className="text-sm font-semibold py-3.5 px-4 bg-myPalet-1000 text-myPalet-50 hover:bg-myPalet-900">
            CONTACT ME <span>🍵</span>
          </span>
        </button>
      </nav>

      <div className="lg:hidden w-full flex justify-end">
        <button
          className="flex items-center justify-end h-12 px-2"
          onClick={() => openMenu()}
        >
          <svg viewBox="0 0 24 24" className="w-8 stroke-slate-900">
            <path
              d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <section className="relative">
        <div
          className={`fixed inset-0 backdrop-blur-sm bg-slate-900/25 flex justify-end  transform transition-transform duration-700 ease-in-out ${
            openLateralMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white backdrop-blur-md bg-opacity-90 shadow-2xl">
            <div className="px-6 w-full h-20 flex justify-between items-center border-b-2">
              <img className="w-10" src={logo} alt="BramsLF" />
              <button className="w-5" onClick={() => openMenu()}>
                <img src={close} alt="close" />
              </button>
            </div>

            <div className="px-6 py-6 border-b-2">
              <ul className="space-y-2">
                <li className="flex w-full px-2 py-2 rounded-sm cursor-pointer hover:bg-myPalet-50 font-raleway font-bold text-myPalet-900 text-sm">
                  HOME
                </li>
                <li className="flex w-full px-2 py-2 rounded-sm cursor-pointer hover:bg-myPalet-50 font-raleway font-bold text-myPalet-900 text-sm">
                  ABOUT ME
                </li>
                <li className="flex w-full px-2 py-2 rounded-sm cursor-pointer hover:bg-myPalet-50 font-raleway font-bold text-myPalet-900 text-sm">
                  CURRICULUM
                </li>
                <li className="flex w-full px-2 py-2 rounded-sm cursor-pointer hover:bg-myPalet-50 font-raleway font-bold text-myPalet-900 text-sm">
                  PORTAFOLIO
                </li>
              </ul>
            </div>
            <div className="px-6 py-6">
              <button className="flex justify-center rounded-sm text-sm font-semibold py-3 px-4 bg-myPalet-1000 text-myPalet-50 hover:bg-myPalet-900 w-full">
                CONTACT ME 🍵
              </button>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
};

export default Navbar;
