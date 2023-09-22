import React from 'react'

interface LogoProps {
    onClick?: () => void
}
function Logo({ onClick }: LogoProps) {
    return (
        <div onClick={onClick} className='cursor-pointer flex flex-1 text-[#fff] items-center text-[36px] font-[700] clash-text'>
            <h3>get</h3>
            <h3 className='text-[#D434FE]'>linked</h3>
        </div>

    )
}

export default Logo