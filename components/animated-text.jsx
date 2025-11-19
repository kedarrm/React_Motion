// 6. SEQUENCES IN MOTION
'use client'

import React, { useEffect } from 'react'
import { useAnimate, motion, stagger, } from 'motion/react'

const AnimatedText = () => {
    const [scope, animate] = useAnimate()
    const text =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse error hic cum consequatur officia cupiditate quasi soluta officiis! Inventore aperiam distinctio obcaecati fuga ipsam perferendis dolores, iste magnam earum magni!"

    // useEffect(() => {
    //     startAnimating()
    // }, [])

    const startAnimating = () => {
        animate("span", {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
        }, {
            duration: 0.5,
            ease: "easeInOut",
            delay: stagger(0.05)
        })
    }
    return (
        <div
            ref={scope}
            className="min-h-screen pt-50 bg-black p-20 text-4xl font-bold text-white">
            <button className='bg-neutral-800 px-4 py-2 rounded-md cursor-pointer active:scale-110 trans-200' onClick={startAnimating}>
                See Animation
            </button>
            {text.split(' ').map((word, index) => (
                <motion.span
                    style={{
                        opacity: 0,
                        filter: 'blur(10px)',
                        y: 10,
                    }}
                    key={word + index}
                    className="mr-3 inline-block"
                >
                    {word}
                </motion.span>
            ))}

        </div>
    )
}

export default AnimatedText