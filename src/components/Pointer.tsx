import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Pointer(props: {
    name: string,
    color?: "red" | "blue"
}) {
    const { name, color } = props
    return (
        <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mouse-pointer size-5 text-white"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path></svg>
            <div className="absolute left-full right-full">
                <div className={twMerge("text-sm font-semibold bg-blue-500 inline-flex rounded-full px-2 rounded-tl-none", color === "red" ? "bg-red-400" : "bg-blue-400")}>
                    {name}
                </div>
            </div>
        </div>
    )
}
