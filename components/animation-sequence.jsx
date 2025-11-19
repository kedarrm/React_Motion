'use client'

import React from 'react'
import { useAnimate, motion } from 'motion/react'

const AnimationSequence = () => {
    const [scope, animate] = useAnimate()

    const startAnimating = async () => {
        animate(".loader", {
            opacity: 1,
            width: "2rem",
        }, {
            duration: 0.1,
        })
        await animate(".loader", {
            rotate: 360 * 4
        }, {
            duration: 2,
        })
        animate(".loader", {
            opacity: 0,
            scale: 0,
        }, {
            duration: 0.1,
        })
        animate('.text', {
            display: 'none'
        }, {
            duration: 0.1
        })
        await animate('button', {
            width: "5rem",
            borderRadius: "1000px"
        }, {
            duration: 0.3,
        })
        animate('button', {
            opacity: 1,
            scale: [1, 1.2, 0.8, 1]
        }, {
            duration: 0.8
        })
        animate(
            "button", {
            background: "linear-gradient(to right, #00ff99, #00ccff"
        }, {
            duration: 0.8
        })
        animate(".check-icon", {
            opacity: 1,
        }, {
            duration: 0.1,
        },)
        animate(".check-icon path", {
            pathLength: 1,
        }, {
            duration: 0.3,
        })
    }

    return (
        <div ref={scope} className='relative flex justify-center items-center w-60 h-20'>
            <motion.button
                onClick={startAnimating}
                style={{
                    width: "30rem"
                }}
                className='h-20 flex items-center justify-center rounded-lg bg-linear-to-r from-purple-500 via-violet-600 to-indigo-500 text-white font-medium cursor-pointer'>

                <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="loader h-5 w-5 text-white"
                    initial={{
                        width: "0rem",
                    }}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3a9 9 0 1 0 9 9" />
                </motion.svg>
                <span className='text'>Purchase Now ($120)</span>
            </motion.button>
            {/* <motion.div
                style={{
                    opacity: 0,
                    scale: 0
                }}
                className='spinnig-circle h-20 w-20 rounded-full bg-green-500 inset-0 absolute m-auto'></motion.div> */}



            <motion.svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
                strokeWidth={3}
                className="check-icon h-10 w-10 absolute inset-0 m-auto z-50 pointer-events-none"
                style={{
                    opacity: 0,
                }}
            >
                <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    transition={{
                        duration: 0.3,
                        type: "tween",
                        ease: "easeInOut",
                    }}
                // animate={controls}
                />
            </motion.svg>
        </div>
    )
}

export default AnimationSequence