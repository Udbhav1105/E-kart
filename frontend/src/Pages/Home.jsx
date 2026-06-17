
import Hero from '../components/ui/Hero'
import Products from '../components/ui/Products'
import BestSeller from '../components/ui/BestSeller'
import Features from '../components/ui/Features'
import NewHero from '../components/NewHero'
// import { View } from 'lucide-react'
import View from '../components/ui/View'

const Home = () => {
  return (
    <div className='object-cover'>
      <NewHero />
          {/* <Hero />
         <Products /> */}
         <BestSeller />
        <Features />
        {/* <View /> */}
    </div>
  )
}

export default Home
