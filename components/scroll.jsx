'use client'

import { useMotionValueEvent, useScroll, useTransform, motion, useMotionTemplate } from 'motion/react'
import Image from 'next/image'
import React, { useRef } from 'react'

const Scroll = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })
    
    const rotateX = useTransform(scrollYProgress, [0, 0.1], [8, 0])
    const translateY = useTransform(scrollYProgress, [0, 0.1], [0, 50])
    const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1.3])
    const textScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])
    const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.5])
    const blur = useTransform(scrollYProgress, [0, 0.1], [0, 10])

    const finalBlur = useMotionTemplate`blur(${blur}px)`



    return (
        <div ref={containerRef} className='h-[400vh] w-full flex flex-col items-center bg-neutral-200 py-40 perspective-midrange transform-style-preserve-3d'>
            <motion.h1
                style={{
                    scale: textScale,
                    opacity: textOpacity,
                    filter: finalBlur
                }}
                className='text-7xl font-bold text-center'>
                Unleash the Power of <br /> Scroll Animations
            </motion.h1>
            <motion.div
                style={{
                    rotateX: rotateX,
                    translateZ: "60px",
                    scale,
                    y: translateY
                }}
                className='w-[40%] rounded-3xl -mt-5 h-[600px] bg-white p-2 border border-neutral-200 shadow-2xl'>
                <div className='w-full h-full rounded-2xl bg-black p-2'>
                    <div className='bg-neutral-100 rounded-xl w-full h-full'>
                        <Image src='https://assets.aceternity.com/linear-demo.webp' className='w-full h-full'
                            height={1024}
                            width={1024}
                            alt='demo'
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Scroll


// perspective-midrange transform-style:preserve-3d