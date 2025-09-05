
import { Logo } from "@/components/logo";
import Link from "next/link";
import Hero from "@/components/Hero";
import WhyUs from '@/components/WhyUs';
import FinalCTA from '@/components/FinalCTA'
import ContactForm from "@/components/ContactForm";
import ModelsGallery from "@/components/ModelsGallery";
import HowItWorks from '@/components/HowItWorks'
import Section from "@/components/Section";
import MediaCard from '@/components/MediaCard'


export default function Page() {
  return (
    <div>
       <header/>
       <Hero />
       <WhyUs />
       <MediaCard/>
        <FinalCTA/> 
       <ContactForm/>
       <ModelsGallery/>
       <HowItWorks/>
       <Section children={undefined}/>
       
    </div>
  );
}
