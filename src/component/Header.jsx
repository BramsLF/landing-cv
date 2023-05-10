import { useState } from "react";
import logo from "../assets/logo/logo.png";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center py-[2.125rem]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-slate-900/5" />
          <a className="items-center mr-auto flex text-slate-900" href="">
            <img className="h-12 w-auto" src={logo} alt="BramsLF" />
            <span className="ml-1.5 ">BramsLF</span>
          </a>
          <div className="hidden lg:flex lg:items-center">
            <a
              className="hover:bg-blue-100 font-semibold py-2.5 px-4 rounded-lg"
              href=""
            >
              Home
            </a>
            <a
              className="hover:bg-blue-100 font-semibold py-2.5 px-4 rounded-lg ml-8 text-"
              href=""
            >
              About Me
            </a>
            <a
              className="hover:bg-blue-100 font-semibold py-2.5 px-4 rounded-lg ml-8 text-"
              href=""
            >
              Curriculum
            </a>
            <a
              className="hover:bg-blue-100 font-semibold py-2.5 px-4 rounded-lg ml-8 text-"
              href=""
            >
              Portfolio
            </a>
          </div>
          <button
            type="button"
            className={`-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden transition-transform ${
              !isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
              <path
                d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
            <a
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
              href=""
            >
              <span>
                Contact Me <span>🍵</span>
              </span>
            </a>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity opacity-100"></div>
          <div
            className="fixed inset-0 flex items-start justify-end overflow-y-auto"
          >
            <div className="min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl ring-1 ring-black/10 transition-transform duration-700 ease-in-out transform translate-x-0">
              <button
                type="button"
                className="absolute right-6 top-5 flex h-8 w-8 items-center justify-center"
                tabIndex={0}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close navigation</span>
                <svg
                  className="h-3.5 w-3.5 overflow-visible stroke-slate-900"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L14 14M14 0L0 14" />
                </svg>
              </button>
              <nav className="divide-y divide-slate-900/10 text-base leading-7 text-slate-900">
                <div className="px-8 py-6">
                  <a className="block w-9 overflow-hidden" href="">
                    <span className="sr-only">BramsLF</span>
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="px-8 py-6">
                  <div className="-my-2 items-start space-y-2">
                    <a
                      className="block w-full py-2 font-semibold hover:bg-blue-100 rounded-lg px-2"
                      href=""
                    >
                      Home
                    </a>
                    <a
                      className="flex w-full items-center py-2 font-semibold hover:bg-blue-100 rounded-lg px-2"
                      href=""
                    >
                      About Me
                    </a>
                    <a
                      className="block w-full py-2 font-semibold hover:bg-blue-100 rounded-lg px-2"
                      href="/"
                    >
                      Curriculum
                    </a>
                    <a
                      className="block w-full py-2 font-semibold hover:bg-blue-100 rounded-lg px-2"
                      href="/"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>
                <div className="px-8 py-6">
                  <div className="-my-2 space-y-4">
                    <a
                      className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full"
                      href="/all-access"
                    >
                      <span>
                        Contact Me <span aria-hidden="true">🍵</span>
                      </span>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
