import React from 'react'

interface RegisterButtonProps {
    title?: string;
    className?: string;
    onClick: () => void;
    loading?: boolean
}
function RegisterButton({ title, className, onClick, loading }: RegisterButtonProps) {
    return (
        <button
            disabled={loading}
            onClick={onClick}
            className={`${loading ? 'loading' : ''} font-[700] text-[#fff] text-[16px] rounded-[4px] h-[53px] w-[172px] register-btn ${className}`}
        >
            {title ? title : 'Register'}
        </button>
    )
}

export default RegisterButton