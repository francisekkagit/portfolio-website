import HeroTileV2 from '@/components/Tiles/Heros/HeroTileV2'
import SkillsTile from '@/components/Tiles/Body/SkillsTile'
import OverviewTile from '@/components/Tiles/Body/OverviewTile'

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
