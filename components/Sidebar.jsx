//3. MOTION VARIANTS

'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Home, Settings, User } from 'lucide-react'
import { IconAnalyze } from '@tabler/icons-react'
import Dashboard from './Dashboard'
import { motion } from "motion/react"

const links = [
    { name: 'Home', href: '#', icon: Home },
    { name: 'Analytics', href: '#', icon: IconAnalyze },
    { name: 'Settings', href: '#', icon: Settings },
    { name: 'Profile', href: '#', icon: User },
]

const sidebarVariant = {
    open: {
        width: "13rem"
    },
    close: {
        width: "5rem"
    }
}

const parentVariants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.1
        },
        close: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: -1
            }
        }
    }
}

const childVariants = {
    open: {
        opacity: 1,
        y: 0
    },
    close: {
        opacity: 0,
        y: -10
    }
}

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
    const toggleSidebar = () => setIsOpen(!isOpen)

    return (
        <div className="flex">
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "close"}
                exit="close"
                transition={{
                    duration: 0.5
                }}
                className={`border-r border-neutral-200 bg-white shadow-md min-h-screen transition-all duration-300 ${isOpen ? 'w-52' : 'w-20'
                    }`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2
                        className={`text-xl font-semibold text-gray-800 transition-opacity duration-300 ${!isOpen && 'sr-only'
                            }`}
                    >
                        Dashboard
                    </h2>

                    {/* Toggle Button */}
                    <button
                        onClick={toggleSidebar}
                        className="bg-gray-50 p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none cursor-pointer"
                        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
                    >
                        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </button>
                </div>

                {/* Links */}
                <motion.nav variants={sidebarVariant} className="p-4">
                    <motion.ul variants={parentVariants} className="space-y-2">
                        {links.map((link, index) => {
                            const Icon = link.icon
                            return (
                                <motion.li variants={childVariants} key={index}>
                                    <a
                                        href={link.href}
                                        className="flex items-center p-2 text-gray-600 rounded hover:bg-gray-100 transition-colors "
                                    >
                                        <Icon size={20} strokeWidth={1.5} />
                                        {isOpen && (
                                            <span className="ml-3 text-[17px] font-medium text-neutral-700">{link.name}</span>
                                        )}
                                    </a>
                                </motion.li>
                            )
                        })}
                    </motion.ul>
                </motion.nav>
            </motion.div>

            {/* Main content */}
            <div className="flex-1">
                <Dashboard />
            </div>
        </div>
    )
}
