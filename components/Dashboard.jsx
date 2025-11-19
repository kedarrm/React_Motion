//3. MOTION VARIANTS

'use client'

import { IconNotification } from '@tabler/icons-react'
import { Bell } from 'lucide-react'
import React from 'react'

const stats = [
    {
        title: 'Total Users',
        value: '2,543',
        change: '+12%',
        changeType: 'positive',
        subtext: 'Increased by 257 since last month',
    },
    {
        title: 'Revenue',
        value: '$45,257',
        change: '+8%',
        changeType: 'positive',
        subtext: 'Increased by $3,257 since last month',
    },
    {
        title: 'Active Sessions',
        value: '1,325',
        change: '+5%',
        changeType: 'positive',
        subtext: 'Increased by 103 since yesterday',
    },
    {
        title: 'Conversion Rate',
        value: '12.3%',
        change: '-2%',
        changeType: 'negative',
        subtext: 'Decreased by 1.8% since last week',
    },
]

export default function Dashboard() {
    return (
        <>
            <div className='bg-white h-18 p-4 flex justify-between items-center shadow-sm'>
                <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
                <div className='flex items-center gap-4' >
                    <Bell className='w-6 h-6' />
                <div className='w-8 h-8 rounded-full bg-gray-300'></div>
                </div>
            </div>
            <div className="p-6 bg-gray-100 min-h-screen">

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                        >
                            <div className="flex items-start justify-between">
                                <h2 className="text-gray-600 text-sm font-medium">
                                    {item.title}
                                </h2>
                                <span
                                    className={`text-xs font-semibold px-2 py-1 rounded ${item.changeType === 'positive'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                        }`}
                                >
                                    {item.change}
                                </span>
                            </div>

                            <p className="text-3xl font-semibold text-gray-900 mt-2">
                                {item.value}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">{item.subtext}</p>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* User Activity */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            User Activity
                        </h3>
                        <div className="h-60 flex items-center justify-center text-gray-400 text-sm bg-gray-50 rounded-lg border border-dashed border-gray-200">
                            Chart Placeholder
                        </div>
                    </div>

                    {/* Revenue Overview */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Revenue Overview
                        </h3>
                        <div className="h-60 flex items-center justify-center text-gray-400 text-sm bg-gray-50 rounded-lg border border-dashed border-gray-200">
                            Chart Placeholder
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mt-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Overall Stats
                    </h3>
                    <div className="h-60 flex items-center justify-center text-gray-400 text-sm bg-gray-50 rounded-lg border border-dashed border-gray-200">
                        Chart Placeholder
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                    {/* User Activity */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            User Activity
                        </h3>
                        <div className="h-60 flex items-center justify-center text-gray-400 text-sm bg-gray-50 rounded-lg border border-dashed border-gray-200">
                            Chart Placeholder
                        </div>
                    </div>

                    {/* Revenue Overview */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Revenue Overview
                        </h3>
                        <div className="h-60 flex items-center justify-center text-gray-400 text-sm bg-gray-50 rounded-lg border border-dashed border-gray-200">
                            Chart Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
