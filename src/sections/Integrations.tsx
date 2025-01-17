import { figmaIcon, framerIcon, githubIcon, notionIcon, relumeIcon, slackIcon } from "@/assets/images";
import IntegrationColumn from "@/components/IntegrationColumn";
import Tag from "@/components/Tag";


const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationType = typeof integrations
export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center justify-center lg:gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with <span className="text-lime-400">others</span>
                        </h2>
                        <p className=" text-white/50 mt-4 text-lg">
                            Layers seamlessly connects with your favorites tools, making it easy to plug into any workflow and collaborate across platforms.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom, transparant, black_10%, black_90%, transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn revearse integrations={integrations.slice().reverse()} className="hidden md:flex" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
