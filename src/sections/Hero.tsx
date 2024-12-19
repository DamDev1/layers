"use client"
import { cursorYou, designExample1Image, designExample2Image } from "@/assets/images";
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react";


export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate()
    const [leftPointerScope, leftPointerAnimate] = useAnimate()
    const [rightDesignScope, rightDesignAnimate] = useAnimate()
    const [rightPointerScope, righPointerAnimate] = useAnimate()

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: "easeInOut" }],
        ]);

        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5}]
        ]);

        righPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay:1.5 }],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5, }],
            [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: "easeInOut"}],
        ])

    }, [])
    return (
        <section className="py-24 overflow-hidden"
            style={{
                cursor: `url(${cursorYou.src}), auto`
            }}
        >
            <div className="container relative">
                <motion.div ref={leftDesignScope} drag initial={{ opacity: 0, y: 100, x: -100 }} className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1Image} draggable="false" alt="design example 1" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 100, x: -200 }} ref={leftPointerScope} className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="damdev" />
                </motion.div>
                <motion.div ref={rightDesignScope} drag initial={{ opacity: 0, y: 100, x: 100 }} className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2Image} alt="design example 2"  draggable="false" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 275, y: 100 }} ref={rightPointerScope} className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="samuel" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold">✨ $7.5M seed round raised</div>
                </div>
                <h1 className="text-6xl md:text-7xl ml-auto mr-auto lg:text-8xl font-medium text-center mt-6">Impactful design,  created effortlessly</h1>
                <p className="mt-8 text-center text-xl text-white/50 max-w-2xl flex mx-auto">Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.</p>

                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-4 w-full" />
                    <Button variant="primary" type="submit" className="whitespace-nowrap" size="sm">Sign Up</Button>
                </form>
            </div>
        </section>
    );
}
