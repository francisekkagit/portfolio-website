import HeroTile from '@/components/Tiles/HeroTile'
import HeroTileV2 from '@/components/Tiles/HeroTileV2'
import OverviewTile from '@/components/Tiles/OverviewTile'
import SkillsTile from '@/components/Tiles/SkillsTile'
import Image from 'next/image'

export const metadata = {
  title: 'Francis Ekka',
  description: 'Website for Web Developer Francis Ekka.',
}

export default function Home() {
  return (
    <div className='w-full'>
      <HeroTileV2/>
      <OverviewTile/>
      <SkillsTile/>
    </div>
  )
}
