import { useState } from "react"
import { navItems } from "../constants"

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="w-full px-6 text-sm">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">

          <div className="flex items-center">
            <img className="h-10 w-20 mr-2" src="/assets/logo.png" alt="" />
            <span className="mt-1.5 text-xl tracking-tight">ImmersiVerse</span>
          </div>

          <ul className="hidden lg:flex justify-center space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex justify-end items-center space-x-4">
            <div className="hidden lg:flex space-x-4">
              <button className="cursor-pointer flex items-center justify-center py-2 px-3 border rounded-md">
                Sign In
              </button>
              <button className="cursor-pointer flex items-center justify-center bg-linear-to-r from-cyan-400 to-cyan-700 py-2 px-4 rounded-md">
                Create an account
              </button>
            </div>

            <button
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              className="lg:hidden ml-2 p-2 relative group"
            >
              <div className="w-6 h-4 relative">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-neutral-300 transition-all duration-300 ease-in-out ${
                    mobileDrawerOpen ? "top-2 rotate-45" : "top-0"
                  }`}
                />
                
                <span
                  className={`absolute left-0 top-2 w-full h-0.5 bg-neutral-300 transition-all duration-300 ease-in-out ${
                    mobileDrawerOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                
                <span
                  className={`absolute left-0 w-full h-0.5 bg-neutral-300 transition-all duration-300 ease-in-out ${
                    mobileDrawerOpen ? "top-2 -rotate-45" : "top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden grid overflow-hidden transition-all duration-300 ease-in-out ${
            mobileDrawerOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden min-h-0">
            <div className="mt-4 border-t border-neutral-700 pt-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
                <div className="flex flex-col space-y-4 pt-2">
                  <a href="#" className="py-2 px-3 border rounded-md text-center">
                    Sign In
                  </a>
                  <a
                    href="#"
                    className="bg-linear-to-r from-cyan-400 to-cyan-700 py-2 px-4 rounded-md text-center"
                  >
                    Create an account
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar