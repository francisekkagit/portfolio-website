import AboutTile from '@/components/Tiles/AboutTile'
import HeroTile from '@/components/Tiles/HeroTile'
import ProjectTile from '@/components/Tiles/ProjectTile'
import Image from 'next/image'

export const metadata = {
  title: 'Francis Ekka',
  description: 'Website for Web Developer Francis Ekka.',
}

export default function Home() {
  return (
    <div className='w-full'>
      <HeroTile/>
      <AboutTile/>
      <ProjectTile/>
    </div>
  )
}
