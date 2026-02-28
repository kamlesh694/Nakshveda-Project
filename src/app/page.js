import Image from "next/image";
import HomeHero from "@/components/home/HomeHero"
import Slider from "@/components/home/Slider"
import Testimonials from "@/components/home/Testimonials"
import ProblemsSection from "@/components/home/ProblemSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import CTA from "@/components/home/CTA";
export default function Home() {
  return (
    <>
    <HomeHero/>
    <Slider/>
    <ProblemsSection/>
    <ServicesPreview/>
    <AboutPreview/>
    <Testimonials/>
    <CTA/>
    
    </>
  );
}
