import React from 'react'

interface BrightLightProps {
    className?: string
}
function BrightLight({ className }: BrightLightProps) {
    return (
        <div className={`bright-light ${className}`} />
    )
}

export default BrightLight