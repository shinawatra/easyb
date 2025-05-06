import React from 'react';

function Header({
  setDisplay,
}: {
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function toggle() {
    const navBtn = document.getElementById('navBtn') as HTMLElement;
    navBtn?.classList.toggle('nav-toggle');
    setDisplay((prev: boolean) => !prev);
  }

  return (
    <header className="bg-white h-16 px-5 md:px-5 xl:px-30 py-10 flex justify-between items-center z-10 fixed left-0 right-0 top-0">
      <a href="#">
        <img src="logo.svg" alt="Logo" className="w-30" />
      </a>

      <nav
        id="navBtn"
        className="bg-white invisible md:visible absolute top-25 py-7 md:py-0 left-5 right-5 rounded-md sm:static"
      >
        <ul className="flex flex-col md:flex-row items-center">
          <li className="mb-3.5 md:mb-0">
            <a
              href="#"
              className="text-black md:text-[#9698a6] text-lg font-public md:text-base md:hover:text-black select"
            >
              Home
            </a>
          </li>
          <li className="mx-0 md:mx-6 mb-3.5 md:mb-0">
            <a
              href="#"
              className="text-black sm:text-[#9698a6] text-lg md:text-base font-public sm:hover:text-black select"
            >
              About
            </a>
          </li>
          <li className="mb-3.5 md:mb-0">
            <a
              href="#"
              className="text-black sm:text-[#9698a6] text-lg md:text-base font-public md:hover:text-black select"
            >
              Contact
            </a>
          </li>
          <li className="mx-0 md:mx-6 mb-3.5 md:mb-0">
            <a
              href="#"
              className="text-black sm:text-[#9698a6] text-lg md:text-base font-public md:hover:text-black select"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black sm:text-[#9698a6] text-lg md:text-base font-public md:hover:text-black select"
            >
              Careers
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="#"
        className="color text-white text-lg md:text-base px-8 py-2.5 rounded-4xl hover:opacity-70 hidden md:block"
      >
        Request Invite
      </a>

      <button className="block md:hidden" onClick={toggle}>
        <img src="icon-hamburger.svg" alt="Ham" className="h-7 w-8" />
      </button>
    </header>
  );
}

export default Header;
