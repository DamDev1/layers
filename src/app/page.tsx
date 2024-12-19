import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";

export default function Home() {
  return <>
    <Header/>
    <Hero/>
    <LogoTicker/>
    <Introduction/>
    <Features/>
    <Integrations/>
    <Faqs/>
  </>;
}
