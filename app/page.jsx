import Image from 'next/image'
import MainHero from '../components/home/mainHero'
import AboutLayout from '../components/home/AboutLayout'
export default function Home() {
  return (
    <>
      <main>
        <MainHero />
        <AboutLayout />
      </main>
    </>
  )
}
