import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 max-w-[1920px] mx-auto right-0 z-10  bg-red-800 dark:bg-gray-800 pt-4">
      <div className="max-w-[1320px] mx-auto px-4 md:px-0 py-4 md:py-8 z-50">
        <div className="flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-2">
            <img
              className="w-[36px] h-[37px] sm:h-7"
              src="logo.png"
              alt="Logo"
            />
            <span className="text-[28px] text-[#FFFFFF]">Restaurant</span>
          </a>

          
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white text-sm lg:text-base hover:bg-opacity-20 px-2.5 py-2 transition duration-300 rounded-lg dark:hover:bg-gray-700"
                >
                  {item}
                </a>
              )
            )}
          </div>

          
          <div className="hidden lg:block ml-8">
            <a href="#booktable" className="uppercase bg-[#FEBF00] px-6 py-2 text-[#0A1425] font-bold text-sm lg:text-base">
              Book a table
            </a>
          </div>

          
          <div className="flex lg:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <img className="w-6 h-6" src="open.png" alt="menu" />
              )}
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="lg:hidden absolute inset-x-0 top-full z-20 w-full bg-red-800 dark:bg-gray-800 px-6 py-4">
            <div className="flex flex-col gap-4">
              {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white text-sm hover:bg-opacity-20 px-2.5 py-2 transition duration-300 rounded-lg dark:hover:bg-gray-700"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <div className="mt-4">
              <a href="#booktable" className="uppercase bg-[#FEBF00] px-6 py-2 text-[#0A1425] font-bold text-sm">
                Book a table
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
