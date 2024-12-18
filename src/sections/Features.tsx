import { avater1, avater2, avater3, avater4 } from "@/assets/images";
import Avater from "@/components/Avater";
import FeatureCard from "@/components/FeatureCard";
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
                <h2 className="text-6xl font-medium text-center mt-6">Where power meets <span className="text-lime-400">simplicity</span></h2>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing">
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
                            <div className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full">

                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <Avater>
                                <Image src={avater1} alt="avater 1"/>
                            </Avater>
                            <Avater>
                                <Image src={avater2} alt="avater 2"/>
                            </Avater>
                            <Avater>
                                <Image src={avater3} alt="avater 3"/>
                            </Avater>
                        </div> */}
                    </FeatureCard >

                    <FeatureCard title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly" />

                    <FeatureCard title="Interative Prototyping" description="Engage your clients with prototypes that" />
                </div>
                <div>
                    {features.map((feature) => (
                        <div key={feature}>
                            <span></span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
