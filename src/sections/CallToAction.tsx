"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function CallToAction() {
    const [scope, animate ]=useAnimate()
    const animation = useRef<AnimationPlaybackControls>(null)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        animation.current = animate(
            scope.current, 
            {x: "-50%",}, 
            {duration: 30, repeat: Infinity, ease:"linear"}
        )
    },[])

    useEffect(() =>{
        if(animation.current){
            if(isHovered){
                animation.current.speed = 0.5
            }else{
                animation.current.speed = 1
            }
        }
    },[isHovered])
    return (
        <section className="py-24">
            <div className="overflow-x-clip flex">
                <motion.div
                    // initial={{ x: "100%" }}
                    ref={scope}
                    onMouseEnter = {() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">&#10038;</span>
                            <span className='group-hover:text-lime-400 transition '>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
