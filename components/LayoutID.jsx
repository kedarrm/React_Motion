// 5. LAYOUT GROUPS

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'motion/react'

const cards = [
    {
        id: 1,
        description: "Lana Del Rey",
        title: "Summertime Sadness",
        src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: (
            <p className="text-[10px] text-neutral-500">
                Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                her melancholic and cinematic music style. Born Elizabeth Woolridge
                Grant in New York City, she has captivated audiences worldwide with
                her haunting voice and introspective lyrics. <br /> <br />
                Her songs often explore themes of tragic romance, glamour, and
                melancholia, drawing inspiration from both contemporary and vintage
                pop culture. With a career that has seen numerous critically acclaimed
                albums.
            </p>
        ),
    },
    {
        id: 2,
        description: "The Weeknd",
        title: "Blinding Lights",
        src: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: (
            <p className="text-[10px] text-neutral-500">
                The Weeknd, born Abel Tesfaye, is a Canadian artist known for his
                genre-blending music and dark, atmospheric production. His hit
                "Blinding Lights" became one of the most streamed songs of all time,
                fusing 80s synthwave with modern R&B. <br /> <br />
                With a signature falsetto and cinematic visuals, The Weeknd continues to
                redefine the sound and aesthetics of pop culture.
            </p>
        ),
    },
    {
        id: 3,
        description: "Taylor Swift",
        title: "Style",
        src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: (
            <p className="text-[10px] text-neutral-500">
                Taylor Swift is one of the most influential singer-songwriters of her
                generation. Known for her storytelling and emotional depth, she has
                seamlessly transitioned from country to pop to indie-folk. <br /> <br />
                Her song "Style" captures her signature mix of romance, nostalgia, and
                lyrical precision.
            </p>
        ),
    },
    {
        id: 4,
        description: "Dua Lipa",
        title: "Levitating",
        src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: (
            <p className="text-[10px] text-neutral-500">
                Dua Lipa is a British-Albanian pop sensation known for her disco-inspired
                sound and powerful vocals. "Levitating" became a global phenomenon,
                blending retro vibes with modern production. <br /> <br />
                Her energetic performances and chart-topping hits have made her one of
                the most exciting pop artists of the 2020s.
            </p>
        ),
    },
    {
        id: 5,
        description: "Billie Eilish",
        title: "Bad Guy",
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: (
            <p className="text-[10px] text-neutral-500">
                Billie Eilish revolutionized pop music with her whisper-soft vocals and
                genre-defying production. "Bad Guy" showcases her minimalist approach
                and dark aesthetic. <br /> <br />
                At a young age, she's become a cultural icon, influencing fashion,
                music, and a generation of artists.
            </p>
        ),
    },
]

export default function LayoutID() {
    const [current, setCurrent] = useState(null)

    return (
        <LayoutGroup>
            <div className="py-20 bg-gray-100 min-h-screen relative">
                <AnimatePresence>
                    {current && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            onClick={() => setCurrent(null)}
                            className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm cursor-pointer"
                        />
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {current && (
                        <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
                            <motion.div
                                layoutId={`card-${current.id}`}
                                className="relative bg-white w-80 rounded-2xl border border-neutral-200 shadow-xl pointer-events-auto overflow-hidden"
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                            >
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: { delay: 0.15, duration: 0.2 }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.8,
                                        transition: { duration: 0.1 }
                                    }}
                                    onClick={() => setCurrent(null)}
                                    className="absolute top-4 right-4 z-30 text-neutral-900 hover:text-neutral-950 cursor-pointer  rounded-full w-8 h-8 flex items-center justify-center"
                                >
                                    ✕
                                </motion.button>

                                <div className="p-4">
                                   
                                    <motion.img
                                       layoutId={`image-${current.id}`}
                                        src={current.src}
                                        alt={current.title}
                                        className="h-60 w-full object-cover rounded-xl"
                                    />

                                   
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { delay: 0.1, duration: 0.3 }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15 }
                                        }}
                                        className="flex flex-col justify-between items-start mt-4"
                                    >
                                        <div className="flex items-start justify-between w-full gap-2">
                                            <div className="flex flex-col items-start gap-1">
                                                <motion.h2
                                                    layoutId={`title-${current.id}`}
                                                    className="font-bold text-sm tracking-tight text-black"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 30
                                                    }}
                                                >
                                                    {current.title}
                                                </motion.h2>
                                                <motion.p
                                                    layoutId={`description-${current.id}`}
                                                    className="text-[10px] text-neutral-500"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 30
                                                    }}
                                                >
                                                    {current.description}
                                                </motion.p>
                                            </div>

                                            <motion.a
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: { delay: 0.2, duration: 0.2 }
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                    transition: { duration: 0.1 }
                                                }}
                                                href={current.ctaLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-1 bg-green-500 rounded-full text-white text-xs hover:bg-green-600 transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {current.ctaText}
                                            </motion.a>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                transition: { delay: 0.25, duration: 0.3 }
                                            }}
                                            exit={{
                                                opacity: 0,
                                                transition: { duration: 0.15 }
                                            }}
                                            className="h-40 overflow-auto mt-3 pr-1 w-full"
                                        >
                                            {current.content}
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <div className="max-w-3xl mx-auto flex flex-col gap-6 px-4">
                    {cards.map((card) => (
                        <motion.div
                            layoutId={`card-${card.id}`}
                            key={card.id}
                            onClick={() => setCurrent(card)}
                            className="p-4 rounded-lg flex cursor-pointer border border-neutral-300 justify-between items-center bg-white hover:shadow-md transition-shadow"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            <div className="flex gap-4 items-center">
                                <motion.img
                                    layoutId={`image-${card.id}`}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-14 w-14 object-cover rounded-2xl border border-neutral-200"
                                />
                                <div className="flex flex-col items-start gap-1 text-left">
                                    <motion.h2
                                        layoutId={`title-${card.id}`}
                                        className="font-bold text-lg text-black"
                                    >
                                        {card.title}
                                    </motion.h2>
                                    <motion.p
                                        layoutId={`description-${card.id}`}
                                        className="text-xs text-neutral-500"
                                    >
                                        {card.description}
                                    </motion.p>
                                </div>
                            </div>

                            <motion.a
                                href={card.ctaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-green-500 rounded-full text-white text-xs font-medium hover:bg-green-600 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {card.ctaText}
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </LayoutGroup>
    )
}