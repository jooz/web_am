import HeroSection from "@/components/home/HeroSection";
import NewsSection from "@/components/home/NewsSection";
import ServicesSection from "@/components/home/ServicesSection";
import DevelopmentSection from "@/components/home/DevelopmentSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import FloatingSocialMenu from "@/components/layout/FloatingSocialMenu";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <ServicesSection />
        <DevelopmentSection />
        <ProjectsSection />
      </main>
      <Footer />
      <FloatingSocialMenu />
    </>
  );
}
