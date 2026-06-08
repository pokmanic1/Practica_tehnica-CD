import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='w-full px-[40px]  sticky top-0 left-0 bg-white border-b-2 border-gray-300'>
            <div className='nav-links  w-full h-[60px] flex  justify-between items-center gap-10  text-black '>
                <div className=''>
                    <Link to="/">Acasă</Link>
                </div>

                <div className=' w-[40%] flex items-center justify-end gap-[40px]'>
                    <Link to="/service" className='font-poppins'>Service</Link>
                    <Link to="/booking" className='font-poppins'>Booking</Link>
                    <Link to="/team" className='font-poppins'>Team</Link>
                    <Link to="/tips" className='font-poppins'>Tips</Link>
                    <Link to="/contact" className='font-poppins'>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar