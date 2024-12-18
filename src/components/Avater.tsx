import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Avater(props: HTMLAttributes<HTMLDivElement>) {
    const {className, children, ...otherProps}=props
    return (
        <div className={twMerge('size-20, rounded-full overflow-hidden border-4 p-1 bg-neutral-900 border-blue-500', className)} {...otherProps}>
            {className}
        </div>
    )
}
