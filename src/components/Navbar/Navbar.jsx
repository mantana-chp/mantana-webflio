import './Navbar.css'
import { Sun } from 'lucide-react'
import { Moon } from 'lucide-react'

function NavBar() {
  return (
    // bg-white bg-opacity-50 shadow-md
    <div className="NavBar font-poppins fixed top-0 w-full  z-50">
      <div className="flex justify-between px-12 py-5">
        <h1 className="tracking-[.6em] text-xl ">MANTANA WEBFLIO</h1>
        <div className="flex gap-10 items-center">
          <button>
            <Sun />
            {/* <Moon /> */}
          </button>
          <button className="home-btn btn hover:text-red-400 ">Home</button>
          <button className="about-btn btn hover:text-orange-400">
            About me
          </button>
          <button className="skills-btn btn hover:text-[#3CA598]">
            Skills
          </button>
          <button className="proj-btn btn hover:text-[#DF61A5]">
            Projects
          </button>
          <button className="contact-btn btn hover:text-[#2583C7]">
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
export default NavBar
