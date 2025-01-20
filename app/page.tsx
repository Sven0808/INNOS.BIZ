import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Solution from "@/components/Solution";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Services from "@/components/Services"
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="w-full bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <FloatingNav
          navItems={navItems} />
      <Intro />
      <Services />
      <div className="max-w-7xl justify-content-center right-100">
        <RecentProjects />
        <Client />
        <Experience />
        <Skills />
        <Solution />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}