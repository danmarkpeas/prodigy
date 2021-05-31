import Hero from "./Hero";

function Navbar() {
  return (
    <div>
      <header className=" text-white font-inter font-semibold mt-10">
        <div className="container xl:w-3/4 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="hidden lg:flex lg:w-2/5 flex-wrap items-center text-sm md:ml-auto">
            <a className="mr-5 hover:text-yellow-500 hover:underline cursor-pointer">
              Work
            </a>
            <a className="mr-5 hover:text-yellow-500 hover:underline cursor-pointer">
              Services
            </a>
            <a className="mr-5 hover:text-yellow-500 hover:underline cursor-pointer">
              Our IPs & Properties
            </a>
            <a className="hover:text-yellow-500 hover:underline cursor-pointer">
              Newsroom
            </a>
          </nav>
          <a className="flex mx-auto lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0 cursor-pointer">
            <span className="ml-3 text-xl">
              <img className="filter saturate-100 w-52" src="logo.jfif" />
            </span>
          </a>

          <nav className="hidden lg:flex lg:w-2/5 flex-wrap items-center lg:justify-end text-sm md:ml-auto">
            <a className="mr-5 hover:text-yellow-500 hover:underline cursor-pointer">
              Career
            </a>
            <a className="mr-5 hover:text-yellow-500 hover:underline cursor-pointer">
              Work Culture
            </a>
            <a className="mr-5 hover:text-yellow-500 hover:underline cursor-pointer">
              Team
            </a>
            <a className="hover:text-yellow-500 hover:underline cursor-pointer">
              Let's Connect
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
