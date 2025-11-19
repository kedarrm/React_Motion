//2. EXIT ANIMATIONS IN MOTIOn

'use client'

import { Icon24Hours, Icon360View, Icon3dCubeSphere, IconDice3Filled, IconPlus, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const Card = () => {
    const [open, setopen] = useState(true)

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)",
                        }}
                        animate={{
                            opacity: 1,
                            scale: 0.98,
                            filter: "blur(0px)",
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.98,
                            filter: "blur(10px)",
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                        className='w-96 h-128 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col bg-neutral-50'>
                        <h2 className='text-[15px] font-bold'>Simple Components </h2>

                        <p className='text-[12px] text-neutral-600 font-medium pt-1'>A collect of Beautiful UI components, lets get on with it. Simple components UI.</p>

                        <div className='flex justify-center items-center'>
                            <button onClick={() => setopen(false)} className='flex items-center gap-1 cursor-pointer shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md p-2'>

                                <h2 className='text-xs font-bold text-neutral-800'>SC Simple Components</h2>
                                <IconX className='w-3 h-3 text-neutral-400' />
                            </button>
                        </div>
                        <div className='bg-gray-200 flex-1 mt-4 rounded-lg border border-dashed border-neutral-300 relative'>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.98,
                                    filter: "blur(10px)",
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    filter: "blur(0)",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    // mass:2,
                                }}
                                className='absolute inset-0 h-full w-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200'>
                                <div className="flex gap-2 p-4">
                                    <div
                                        className="h-7 w-7 shrink-0 bg-linear-to-br from-white to-neutral-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                   bg-white rounded-md flex items-center justify-center"
                                    >
                                        <Icon3dCubeSphere className="h-4 w-4 text-neutral-600" />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-[12px] font-bold text-neutral-600">
                                            Some other components
                                        </p>
                                        <p className="text-neutral-400 text-[12px] mt-1">
                                            Here goes another subtitle
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 p-4">
                                    <div
                                        className="h-7 w-7 shrink-0 bg-linear-to-br from-white to-neutral-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                   bg-white rounded-md flex items-center justify-center"
                                    >
                                        <IconDice3Filled className="h-4 w-4 text-neutral-600" />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-[12px] font-bold text-neutral-600">
                                            Copy And Paste
                                        </p>
                                        <p className="text-neutral-400 text-[12px] mt-1">
                                            Simple copy paste components
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 p-4">
                                    <div
                                        className="h-7 w-7 shrink-0 bg-linear-to-br from-white to-neutral-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                   bg-white rounded-md flex items-center justify-center"
                                    >
                                        <Icon24Hours className="h-4 w-4 text-neutral-600" />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-[12px] font-bold text-neutral-600">
                                            No Packages Required
                                        </p>
                                        <p className="text-neutral-400 text-[12px] mt-1">
                                            Here goes another subtitle
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 p-4">
                                    <div
                                        className="h-7 w-7 shrink-0 bg-linear-to-br from-white to-neutral-100 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                   bg-white rounded-md flex items-center justify-center"
                                    >
                                        <Icon360View className="h-4 w-4 text-neutral-600" />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-[12px] font-bold text-neutral-600">
                                            Reusable components
                                        </p>
                                        <p className="text-neutral-400 text-[12px] mt-1">
                                            Here goes another subtitle
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2 p-4 items-center justify-center">
                                    <div
                                        className="h-4 w-4 shrink-0 bg-linear-to-br from-white to-neutral-100 
                   shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                   bg-white rounded-md flex items-center justify-center"
                                    >
                                        <IconPlus className="h-4 w-4 text-neutral-700" />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-neutral-500 font-bold text-[12px] ">
                                            Create Project
                                        </p>
                                    </div>
                                </div>
                            </motion.div>


                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </>
    )
}

export default Card

