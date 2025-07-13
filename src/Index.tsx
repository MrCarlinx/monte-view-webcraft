import Header from '@/Header';
import HeroSection from '@/HeroSection';
import ServicesSection from '@/ServicesSection';
import AboutSection from '@/AboutSection';
import ContactSection from '@/ContactSection';
import Footer from '@/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
