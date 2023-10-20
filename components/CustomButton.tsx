"use client"
import { CustomButtonProp } from '@/types'
import React from 'react'

const CustomButton: React.FC<CustomButtonProp> = (props: CustomButtonProp) => {

    const { handleClick, title, containerStyles } = props
    return (
        <button className={`custome-btn ${containerStyles}`} onClick={handleClick}>
            <span
                className={`flex-1`}

            >  {title}</span>

        </button >
    )
}

export default CustomButton