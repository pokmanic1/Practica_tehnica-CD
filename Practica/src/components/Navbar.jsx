import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Navbar() {

    useEffect(() => {
        const burger = document.getElementById("burgerBtn")
        const menu = document.getElementById("burgerMenu")

        if (!burger || !menu) return

        const handleClick = () => {
            menu.classList.toggle("hidden")
        }

        burger.addEventListener("click", handleClick)

        return () => {
            burger.removeEventListener("click", handleClick)
        }
    }, [])

    return (
        <nav className='relative  min-w-[375px] w-full pr-[20px] md:px-[40px] sticky top-0 left-0 bg-white border-b-2 border-gray-300'>
            <div className='w-full h-[60px] flex justify-between items-center text-black'>

                <Link to="/">
                    <img
                        src="../../img/Logo.svg"
                        className='w-[70px] mt-[10px]'
                        alt="logo"
                    />
                </Link>

                <div className='hidden md:flex items-center gap-[40px]'>
                    <Link to="/service">Service</Link>
                    <Link to="/booking">Booking</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/tips">Tips</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <button id="burgerBtn" className="md:hidden flex flex-col gap-1">
                    <span className="w-6 h-[1px] bg-black"></span>
                    <span className="w-6 h-[1px] bg-black"></span>
                    <span className="w-6 h-[1px] bg-black"></span>
                </button>
            </div>

            <div id="burgerMenu" className="hidden   md:hidden z-10 flex flex-col gap-4 py-4 absolute top-[60px] left-0 bg-white w-full pl-[10px]">
                <Link to="/service" className='border-b border-gray-300'>Service</Link>
                <Link to="/booking" className='border-b border-gray-300'>Booking</Link>
                <Link to="/team" className='border-b border-gray-300'>Team</Link>
                <Link to="/tips" className='border-b border-gray-300'>Tips</Link>
                <Link to="/contact" className='border-b border-gray-300'>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar