import HeroCarousel from "../components/HeroCarousel";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import SafetyTipsGallery from "../components/SafetyTipsGallery";
import ContactSection from "../components/ContactSection";
import MediaGallery from "@/components/MediaGallery";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <AboutSection />
      <MediaGallery />
      {/* <SafetyTipsGallery /> */}
      <ContactSection />
    </>
  );
};

export default Home;
