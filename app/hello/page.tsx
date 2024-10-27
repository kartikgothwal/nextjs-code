"use client";
import { useTheme } from '@/components/theme-providers'
import React from 'react'

const Page = () => {
    const value = useTheme();
    console.log("🚀 ~ Page ~ value:", value)

    return (
        <div>
            <h1>{value.primary}</h1>
            <h1>{value.secondary}</h1>
            <h1>Je</h1>
        </div>
    )
}

export default Page
