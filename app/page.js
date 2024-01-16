import AboutTile from '@/components/Tiles/AboutTile'
import HeroTile from '@/components/Tiles/HeroTile'
import ProjectTile from '@/components/Tiles/ProjectTile'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full'>
      <HeroTile/>
      <AboutTile/>
      <ProjectTile/>
    </div>
  )
}
