import Navbar from './Navbar'
import Hero from './Hero'
import CompanyOverview from './CompanyOverview'
import Products from './Products'
import Testimonial from './Testimonial'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <CompanyOverview/>
      <Products/>
      <Testimonial/> 
    </>
  )
}

export default Home