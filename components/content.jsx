// 2. EXIT ANIMATIONS IN MOTION

import React from 'react'
import Card from './card'

const Content = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
        <Card />
    </div>
  )
}

export default Content

// 'use client'

// import {
//     Icon24Hours,
//     Icon360View,
//     Icon3dCubeSphere,
//     IconDice3Filled,
//     IconPlus,
//     IconX
// } from '@tabler/icons-react'
// import React, { useState } from 'react'
// import { AnimatePresence, motion } from 'motion/react'

// const Card = () => {
//     const [open, setOpen] = useState(true)

//     return (
//         <div className="flex flex-col items-center justify-center h-screen w-full gap-4 bg-neutral-200">
//             <AnimatePresence>
//                 {open && (
//                     <motion.div
//                         key="card"
//                         initial={{
//                             opacity: 0,
//                             scale: 0.98,
//                             filter: 'blur(10px)',
//                         }}
//                         animate={{
//                             opacity: 1,
//                             scale: 1,
//                             filter: 'blur(0px)',
//                         }}
//                         exit={{
//                             opacity: 0,
//                             scale: 0.95,
//                             filter: 'blur(10px)',
//                         }}
//                         transition={{
//                             duration: 0.4,
//                             ease: 'easeInOut',
//                         }}
//                         className="w-96 h-128 rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 flex flex-col bg-neutral-50"
//                     >
//                         <h2 className="text-[15px] font-bold">Simple Components</h2>
//                         <p className="text-[12px] text-neutral-600 font-medium pt-1">
//                             A collection of beautiful UI components. Simple, clean, and ready to use.
//                         </p>

//                         <div className="flex justify-center items-center mt-3">
//                             <button
//                                 onClick={() => setOpen(false)}
//                                 className="flex items-center gap-1 cursor-pointer shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md p-2"
//                             >
//                                 <h2 className="text-xs font-bold text-neutral-800">
//                                     SC Simple Components
//                                 </h2>
//                                 <IconX className="w-3 h-3 text-neutral-400" />
//                             </button>
//                         </div>

//                         <div className="bg-gray-200 flex-1 mt-4 rounded-lg border border-dashed border-neutral-300 relative overflow-hidden">
//                             <motion.div
//                                 initial={{
//                                     opacity: 0,
//                                     scale: 0.98,
//                                     filter: "blur(10px)",
//                                 }}
//                                 whileHover={{
//                                     opacity:1,
//                                     scale:1.05,
//                                     filter:"blur(0px)"
//                                 }}
//                                 transition={{
//                                     type: 'spring',
//                                     stiffness: 100,
//                                     damping: 15,
//                                 }}
//                                 className="absolute inset-0 h-full w-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200"
//                             >
//                                 {[
//                                     {
//                                         icon: <Icon3dCubeSphere className="h-4 w-4 text-neutral-600" />,
//                                         title: 'Some other components',
//                                         subtitle: 'Here goes another subtitle',
//                                     },
//                                     {
//                                         icon: <IconDice3Filled className="h-4 w-4 text-neutral-600" />,
//                                         title: 'Copy And Paste',
//                                         subtitle: 'Simple copy paste components',
//                                     },
//                                     {
//                                         icon: <Icon24Hours className="h-4 w-4 text-neutral-600" />,
//                                         title: 'No Packages Required',
//                                         subtitle: 'Just drop in and use',
//                                     },
//                                     {
//                                         icon: <Icon360View className="h-4 w-4 text-neutral-600" />,
//                                         title: 'Reusable components',
//                                         subtitle: 'Clean and scalable design',
//                                     },
//                                 ].map((item, i) => (
//                                     <div key={i} className="flex gap-2 p-4">
//                                         <div className="h-7 w-7 shrink-0 bg-linear-to-br from-white to-neutral-100 shadow rounded-md flex items-center justify-center">
//                                             {item.icon}
//                                         </div>
//                                         <div className="flex flex-col">
//                                             <p className="text-[12px] font-bold text-neutral-600">{item.title}</p>
//                                             <p className="text-neutral-400 text-[12px] mt-1">{item.subtitle}</p>
//                                         </div>
//                                     </div>
//                                 ))}

//                                 <div className="flex gap-2 p-4 items-center justify-center">
//                                     <div className="h-4 w-4 shrink-0 bg-linear-to-br from-white to-neutral-100 shadow rounded-md flex items-center justify-center">
//                                         <IconPlus className="h-4 w-4 text-neutral-700" />
//                                     </div>
//                                     <p className="text-neutral-500 font-bold text-[12px]">Create Project</p>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {!open && (
//                 <motion.button
//                     key="open-btn"
//                     initial={{
//                         opacity: 0,
//                         scale: 0.95,
//                         filter: 'blur(10px)',
//                     }}
//                     animate={{
//                         opacity: 1,
//                         scale: 1,
//                         filter: 'blur(0px)',
//                     }}
//                     transition={{
//                         duration: 0.4,
//                         ease: 'easeInOut',
//                     }}
//                     onClick={() => setOpen(true)}
//                     className="px-8 py-2 bg-gray-100 border border-gray-100 text-[12px] font-bold rounded-md shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] cursor-pointer hover:scale-105 transition-transform"
//                 >
//                     Open Card
//                 </motion.button>
//             )}
//         </div>
//     )
// }

// export default Card