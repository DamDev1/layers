import { designExample1Image, designExample2Image } from "@/assets/images";
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import Image from "next/image";

export default function Hero() {
    
    return (
        <section className="py-24 overflow-hidden">
            <div className="container relative"> 
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1Image} alt="design example 1"/>
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2Image} alt="design example 2"/>
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="damdev"/>
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="samuel" color="red"/>
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold">✨ $7.5M seed round raised</div>
                </div>
                <h1 className="text-6xl md:text-7xl ml-auto mr-auto lg:text-8xl font-medium text-center mt-6">Impactful design,  created effortlessly</h1>
                <p className="mt-8 text-center text-xl text-white/50 max-w-2xl flex mx-auto">Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.</p>

                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-4 w-full"/>
                    <Button variant="primary" type="submit" className="whitespace-nowrap" size="sm">Sign Up</Button>
                </form>
            </div>
        </section>
    );
}
