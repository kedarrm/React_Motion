//1. MOTION BASICS

'use client'

import React from 'react'
import { motion } from 'motion/react'

const Button = () => {
    return (
        <div
            className="[prespective::1000px] [transform-style::preserve-3d] flex justify-center items-center h-screen bg-neutral-900"
            style={{
                backgroundImage:
                    'radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.3) 0.5px, transparent 0.5px)',
                backgroundRepeat: 'repeat',
                backgroundSize: '10px 10px',
            }}
        >
            <motion.button
                whileHover={{
                    rotateX:25,
                    rotateY:10,
                    boxShadow:"0 20px 50px rgba(8,112,134,0.7)",
                    y:-10
                }}
                whileTap={{
                    y: 0
                }}
                style={{
                    translateZ: 100,
                }}
                transition={{
                    duration:0.3,
                    ease:"easeInOut"
                }}
                className="group relative text-neutral-500 px-16 py-6 rounded-lg bg-black
        shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0_rgba(255,255,255,0.1)_inset]
        cursor-grab"
            >
                <span className='group-hover:text-cyan-500 transition-colors duration-300'>Hello World!</span>
                <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-full blur-sm mx-auto"></span>
            </motion.button>
        </div>
    )
}

export default Button