import AboutMe from "@/components/Tiles/Body/AboutMe"
import ProjectsPreview from "@/components/Tiles/Body/ProjectsPreview"
import UnderConstruction from "@/components/Tiles/Body/UnderConstruction"
import Hero1 from "@/components/Tiles/Heros/Hero1"
import Image from "next/image"
import Projects from "./Projects/page"
import SkillsMasonry from "@/components/Tiles/Body/SkillsMasonry"

export const metadata = {
  title: 'Francis Ekka',
  description: 'Website for Web Developer Francis Ekka.',
}

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center pb-5 gap-3 md:gap-7 px-3 sm:px-6 lg:px-10 transition-all duration-300'>
      {/* <UnderConstruction/> */}
      <Hero1/>
      <AboutMe/>
      <SkillsMasonry/>
      <ProjectsPreview/>
      
    </div>
  )
}
