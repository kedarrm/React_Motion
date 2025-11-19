//4. MOTION HOOKS 

'use client'

import { IconRocket } from '@tabler/icons-react'
import { useScroll, useTransform, motion, useMotionTemplate, useSpring, useMotionValueEvent } from 'motion/react'
import Image from 'next/image'
import React, { lazy, useRef, useState } from 'react'

const features = [
    {
        icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
        title: "Generate ultra realistic images in seconds",
        description:
            "With our state of the art AI, you can generate ultra realistic images in no time at all.",
        content: (
            <div>
                <Image
                    src="https://assets.aceternity.com/pro/car-1.jpg"
                    alt="car"
                    height={500}
                    width={500}
                    className="rounded-lg"
                />
            </div>
        ),
    },

    {
        icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
        title: "Replicate realistic images in seconds",
        description:
            "With our state of the art AI, you can generate ultra realistic images in no time at all.",
        content: (
            <div>
                <Image
                    src="https://assets.aceternity.com/pro/car-2.jpg"
                    alt="car"
                    height={500}
                    width={500}
                    className="rounded-lg"
                />
            </div>
        ),
    },

    {
        icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
        title: "Use realistic images in your projects in seconds",
        description:
            "With our state of the art AI, you can generate ultra realistic images in no time at all.",
        content: (
            <div className="relative flex justify-center items-center mt-6">

                {/* Middle Image */}
                <div className="absolute rotate-20 w-[320px] h-80 md:w-[400px] md:h-[400px] bg-neutral-800 rounded-xl overflow-hidden shadow-2xl opacity-90">
                    <Image
                        src="https://assets.aceternity.com/pro/car-2.jpg"
                        alt="car middle"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Top Image */}
                <div className="relative w-[320px] h-80 md:w-[400px] md:h-[400px] bg-neutral-900 rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src="https://assets.aceternity.com/pro/car-1.jpg"
                        alt="car front"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        ),
    },
]

const ScrollBg = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })

    const backgrounds = ['#2E273E', '#212f45', '#003047']
    const [background, setBackground] = useState(backgrounds[0])

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const index = Math.min(
            Math.floor(latest * backgrounds.length),
            backgrounds.length - 1
        )
        setBackground(backgrounds[index])
    })


    return (
        <motion.div
            ref={containerRef}
            animate={{
                background,
            }}
            transition={{
                duration:0.3,
                ease:"easeInOut"
            }}
            className='bg-neutral-800 flex justify-center items-center min-h-screen'>
            <div className='flex flex-col gap-10 max-w-4xl max-w-auto py-40'>
                {features.map((faeture, idsx) => (
                    <Card key={faeture.title} faeture={faeture} />
                ))}
            </div>
        </motion.div>
    )
}



const Card = ({ faeture }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const tarnslateContent = useSpring(useTransform(scrollYProgress, [0, 1], [200, -300]), {
        stiffness: 100,
        damping: 15,
        mass: 1,
    })
    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10])
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.3])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
    })

    return (

        <div ref={ref} key={faeture.title} className='grid grid-cols-2 gap-20 items-center py-40'>
            <motion.div style={{
                filter: useMotionTemplate`blur(${blur}px)`,
                scale,
            }} className='flex flex-col gap-5'>
                {faeture.icon}
                <h2 className='text-2xl text-neutral-100 font-bold'>{faeture.title}</h2>
                <p className='text-lg text-neutral-400'>{faeture.description}</p>
            </motion.div>
            <motion.div style={{
                y: tarnslateContent,
                opacity: opacityContent
            }}>
                {faeture.content}
            </motion.div>
        </div>
    )
}

export default ScrollBg