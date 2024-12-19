"use client"
import { logoImage } from '@/assets/images';
import Button from '@/components/Button';
import Image from 'next/image';
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';


const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <section className='py-4 lg:py-8 flex justify-center items-start fixed w-full top-0 z-50'>
                <div className='container max-w-5xl'>
                    <div className='border-white/15 bg-neutral-950/70 border rounded-[27px] md:rounded-full backdrop-blur'>
                        <div className='grid px-4 grid-cols-2 lg:grid-cols-3 items-center p-2 md:pr-2'>
                            <div>
                                <Image src={logoImage} alt='logo' className='h-9 w-auto md:h-auto' />
                            </div>
                            <div className='lg:flex justify-center items-center hidden'>
                                <nav className='flex gap-6 font-medium'>
                                    {navLinks.map((link) => (
                                        <a href={link.href} key={link.label}>{link.label}</a>
                                    ))}
                                </nav>
                            </div>
                            <div className='flex justify-end gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                    <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && 'rotate-45 -translate-y-1')}></line>
                                    <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && 'opacity-0')}></line>
                                    <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", isOpen && '-rotate-45 translate-y-1')}></line>
                                </svg>
                                <div className='md:flex justify-end gap-4 hidden'>
                                    <Button variant='secondary'>Login</Button>
                                    <Button variant='primary'>Sign Up</Button>
                                </div>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }} className='overflow-hidden'>
                                    <div className='flex flex-col items-center gap-4 py-4'>
                                        {navLinks.map((link) => (
                                            <a href={link.href}>{link.label}</a>
                                        ))}
                                        <Button variant='primary'>Login</Button>
                                        <Button variant='secondary'>Sign Up</Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className='pb-[86px] md:pb-[98px] lg:pb-[130px]'></div>
        </>
    )
}
