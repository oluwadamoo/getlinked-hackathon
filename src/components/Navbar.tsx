import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import Logo from './Logo'

function Navbar() {
    const NAVITEMS = [
        {
            title: "Timeline",
            url: '#'
        },
        {
            title: "Overview",
            url: '#'
        },
        {
            title: "FAQs",
            url: '#'
        },
        {
            title: "Contact",
            url: '/contact'
        },
    ]

    const [showMenu, setShowMenu] = useState(false)

    const navigate = useNavigate()
    return (
        <nav className='z-[10000000000] relative px-[8.47%] border-b-[1px] border-b-[#FFFFFF2E] pt-[4.43%] pb-[1.98%] flex items-center justify-between'>
            {/* Logo */}
            <Logo />
            {/* Nav Items */}
            <section className='flex items-center flex-1 justify-between max-[620px]:hidden'>
                <ul className='flex items-center mr-[100px]'>
                    {NAVITEMS.map(({ title, url }, index) => (
                        <li className={`text-[16px] text-[#fff] ${index > 0 ? 'ml-[56px]' : ''}`} key={index}>
                            <Link to={url}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <RegisterButton onClick={() => navigate('/register')} />
            </section>

            <button onClick={() => setShowMenu(true)} className='sm:hidden'>
                <img alt='menu' src='/assets/images/menu.svg' />
            </button>

            {showMenu && <div className='p-[8.47%] sm:hidden flex flex-col nav-mobile-menu fixed left-0 top-0 h-[100vh] w-[100vw] bg-[#150E28] z-[100000000000000]'>
                <button className='w-[23px] h-[23px] flex items-center justify-center relative self-end'
                    onClick={() => setShowMenu(false)}
                >
                    <img alt='linear-gradient' src='/assets/images/circle.svg' className='w-[23px] h-[23px]' />
                    <img alt='close' src='/assets/images/close.svg' className='absolute top-[25%] left-[25%]' />
                </button>


                <ul className='mt-[70px] nav-mobile-items'>
                    {
                        NAVITEMS.map(({ title, url }, index) => (
                            <li className={`text-[18px] text-[#fff] ${index > 0 ? 'mt-[26px]' : ''}`} key={index}>
                                <Link to={url}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }

                    <RegisterButton className='mt-[26px]' onClick={() => navigate('/register')} />
                </ul>
            </div>}
        </nav>
    )
}

export default Navbar