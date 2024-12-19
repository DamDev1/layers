import { logoImage } from "@/assets/images";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    <div>
                        <Image src={logoImage} alt="Layer Logo" />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a href={link.href} className="text-white/50 text-sm">{link.label}</a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
