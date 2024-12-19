import { figmaIcon, notionIcon, slackIcon } from '@/assets/images';
import { type IntegrationType } from '@/sections/Integrations';
import Image from 'next/image';
import React from 'react'
import { twMerge } from 'tailwind-merge';
export default function IntegrationColumn(props:{
    integrations:IntegrationType,
    className?:string
}) {
    const {integrations, className} = props
    return (
        <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
            {integrations.map((integration) => (
                <div key={integration.name} className="bg-neutral-900 border border-white/15 rounded-3xl p-6">
                    <div className="flex justify-center">
                        <Image src={integration.icon} alt={`${integration.name} icon`} className="size-24" />
                    </div>
                    <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                    <p className="text-center text-white/50 mt-2">{integration.description}</p>
                </div>
            ))}
        </div>
    )
}