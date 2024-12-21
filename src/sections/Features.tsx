import { avater1, avater2, avater3, avater4 } from "@/assets/images";
import FeatureCard from "@/components/FeatureCard";
import Key from "@/components/Key";
import Tag from "@/components/Tag";
import Image from "next/image";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];


export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl mt-6 max-w-2xl mx-auto font-medium text-center">Where power meets <span className="text-lime-400">simplicity</span></h2>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
                    <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing" className="md:col-span-2 lg:col-span-1 group">
                        <div className="aspect-video flex items-center justify-center">
                            <div className="size-20, rounded-full overflow-hidden border-4 p-1 bg-neutral-900 border-blue-500 z-40">
                                <Image src={avater1} alt="avater 1" className="rounded-full" />
                            </div>
                            <div className="size-20, rounded-full overflow-hidden border-4 p-1 bg-neutral-900 border-indigo-500 -ml-6 z-30">
                                <Image src={avater2} alt="avater 1" className="rounded-full" />
                            </div>
                            <div className="size-20, rounded-full overflow-hidden border-4 p-1 bg-neutral-900 border-amber-500 -ml-6 z-20">

                                <Image src={avater3} alt="avater 1" className="rounded-full" />
                            </div>
                            <div className="-ml-6 border-transparent group-hover:border-green-500 rounded-full border-4 transition">
                                <div className="size-20 bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image src={avater4} alt="avater4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100" />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span key={i} className="size-1.5 rounded-full bg-white inline-flex"></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FeatureCard >

                    <FeatureCard title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly" className="md:col-span-2 lg:col-span-1 group">
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition duration-500">We&lsquo;ve achived <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                <span>incredible</span>
                                <video src="/gif-incredible.mp4" autoPlay muted loop playsInline className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl sahdow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500" />
                            </span> {' '}
                                growth this year</p>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Interative Prototyping" description="Engage your clients with prototypes that" className="md:col-span-2 md:col-start-2 lg:col-start-auto lg:col-span-1 group">
                        <div className="aspect-video flex justify-center items-center gap-4">
                            <Key className="w-28 outline outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500">shift</Key>
                            <Key className="outline outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-150">alt</Key>
                            <Key className="outline outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-200">C</Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center group">
                    {features.map((feature) => (
                        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 item-center md:px-5 md:py-3 hover:scale-105 transition duration-500">
                            <span className="bg-lime-400 text-neutral-950 rounded-full inline-flex items-center justify-center size-5 text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
