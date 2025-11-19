'use client'

import { motion } from "motion/react"
import Link from "next/link"
import React, { useState } from "react"

const navItems = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    { title: "Contact", href: "#" },
]

export default function HoverNav() {
    const [hovered, setHovered] = useState(null)

    return (
        <div className="py-40">
            <nav className="max-w-xl mx-auto bg-gray-300 rounded-full px-2 py-1 flex">
                {navItems.map((item, idx) => (
                    <Link
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        className="w-full relative group text-center py-3 text-xs text-neutral-500"
                        href={item.href}
                        key={item.title}
                    >
                        {hovered === idx && (
                            <motion.div
                                layoutId="hover"
                                className="absolute inset-0 rounded-full w-full h-full bg-black"
                            />
                        )}
                        <span className="relative group-hover:text-white">
                            {item.title}
                        </span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}
