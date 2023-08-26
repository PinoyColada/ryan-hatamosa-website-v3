import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Posts from "@/components/Posts";
import Navbar from "@/components/Navbar";

export const revalidate = 10;

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        {/* @ts-expect-error Server Component*/}
        <Posts />
      </main>
    </>
  );
}
