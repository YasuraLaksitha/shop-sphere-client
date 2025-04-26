import {FaShoppingCart, FaSignInAlt, FaStore} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";
import {Badge} from "@mui/material";
import {useState} from "react";
import {RxCross2} from "react-icons/rx";
import {IoIosMenu} from "react-icons/io";

export default function Navbar() {
    const path: string = useLocation().pathname;
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    return (
        <div className={'bg-slate-800 h-[70px] z-50 text-white flex items-center'}>
            <div className={'lg:px-14 sm:px-8 px-4 w-full flex justify-between'}>
                <Link to={'/'} className={'text-2xl flex gap-2 font-bold items-center'}>
                    <FaStore className={'mr-2'} size={40}/>
                    <span className={'font-bold font-[Poppins]'}>Shop Sphere</span>
                </Link>

                <div>
                    <ul className={`lg:flex items-center gap-10  ${isNavbarOpen ?
                        'items-start flex flex-col w-full left-0 absolute top-[65px] bg-slate-800 z-50  p-4 ' :
                        'hidden'}`
                    }>
                        <li className={`font-[500] transition-all duration-150 
                        ${path === '/home' ? 'text-gray-300 ' : 'hover:text-yellow-400'}`}>
                            <Link to={'/home'} className={'font-semibold'}>Home</Link>
                        </li>

                        <li className={`font-[500] transition-all duration-150 
                        ${path === '/products' ? 'text-gray-300 ' : 'hover:text-yellow-400'}`}>
                            <Link to={'/products'} className={'font-semibold'}>Products</Link>
                        </li>

                        <li className={`font-[500] transition-all duration-150 
                        ${path === '/about' ? 'text-gray-300 ' : 'hover:text-yellow-400'}`}>
                            <Link to={'/about'} className={'font-semibold'}>About</Link>
                        </li>

                        <li className={`font-[500] transition-all duration-150 
                        ${path === '/contact' ? 'text-gray-300 ' : 'hover:text-yellow-400'}`}>
                            <Link to={'/contact'} className={'font-semibold'}>Contact</Link>
                        </li>

                        <li className={`font-[500] transition-all duration-150 
                        ${path === '/cart' ? 'text-gray-300 ' : 'hover:text-yellow-400'}`}>
                            <Link to={'/cart'} className={'font-semibold'}>
                                <Badge
                                    badgeContent={0}
                                    color="primary">
                                    <FaShoppingCart size={25}/>
                                </Badge>
                            </Link>
                        </li>

                        <li className={`font-[500] flex transition-all duration-150 px-2 py-1.5 rounded-md
                            ${isNavbarOpen ? 'w-full' : ''} bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-500 hover:to-red-500`}>
                            <Link to={'/login'} className={'font-semibold flex items-center w-20 gap-2 justify-center'}>
                                <FaSignInAlt/>
                                <span>Login</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <button
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                    className={'lg:hidden flex items-center justify-center'}
                >
                    {isNavbarOpen ? (
                        <RxCross2 size={30} className={'text-white'}/>
                    ) : (
                        <IoIosMenu size={30} className={'text-white'}/>
                    )}
                </button>
            </div>
        </div>
    );
}
