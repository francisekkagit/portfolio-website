import UnderConstruction from "@/components/Tiles/Body/UnderConstruction"
import Hero1 from "@/components/Tiles/Heros/Hero1"
import Image from "next/image"

export const metadata = {
  title: 'Francis Ekka',
  description: 'Website for Web Developer Francis Ekka.',
}

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center py-3 px-3 sm:px-6 sm:py-5 lg:px-10 transition-all duration-300'>
      {/* <UnderConstruction/> */}
      <Hero1/>
    </div>
  )
}
