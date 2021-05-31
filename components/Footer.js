function Footer() {
  return (
    <div>
      <footer className="relative text-gray-600 body-font">
        <div className="relative container px-5 py-8 mx-auto flex flex-col justify-center items-center z-10">
          <div className="mt-20">
            <img className="filter saturate-100 w-52" src="logo.jfif" />
          </div>
          <div>
            <nav className="flex text-white font-inter text-base font-bold mt-20">
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
          <div>
            <p className="text-sm text-white mt-10">
              Privacy Notice & Terms of Service
            </p>
          </div>
          <div className="flex mt-20">
            <a class="text-white border-4 bg-yellow-500 border-yellow-700 rounded-full p-3">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-5 text-white border-4 rounded-full self-center bg-yellow-500 border-yellow-700 p-3">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-5 text-white border-4 rounded-full self-center bg-yellow-500 border-yellow-700 p-3">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-5 text-white border-4 rounded-full self-center bg-yellow-500 border-yellow-700 p-3">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
          <div>
            <p className="text-white text-base mt-10">
              ©2021 Prodigy Communications
            </p>
          </div>
        </div>
        <div className="absolute top-0 z-0">
          <img
            className="filter brightness-50 saturate-0 w-full"
            src="https://content.mindshareapps.com/media/static/images/footers/homepage.jpg"
          />
        </div>
        <div className="absolute w-full h-96 top-0 bg-gradient-to-b from-yellow-500 to-transparent z-0" />
      </footer>
    </div>
  );
}

export default Footer;
