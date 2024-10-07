import AboutSection from "../components/AboutSection";
import ActionSection from "../components/ActionSection";
import WhyChooseUs from "../components/ChooseSection";
import ExperienceSection from "../components/ExperienceSection";
import DentalSection from "../components/facesSection";
import Hero from "../components/Hero";
import MapSection from "../components/Map";
import DemandeDevis from "../components/RequestForm";
import ReviewSlider from "../components/ReviewSlider";
import EnhancedDentalSection from "../components/ServicesSection";


export default function Home() {
  return (
    <main>
        <Hero/>
        <AboutSection/>
        <EnhancedDentalSection/>
        <ExperienceSection/>
        <WhyChooseUs/>
        <DentalSection/>
        <ReviewSlider/>
        <ActionSection/>
        <DemandeDevis/>
        <MapSection/>
    </main>
    );
}
