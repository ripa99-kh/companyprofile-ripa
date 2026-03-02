import Card2 from "../components/Card2"
function AboutUs() {
  return (
    <div className="py-16 bg-rose-100">
      <div className="py-10 px-6 text-center mx-auto">
        <div className="text-4xl font-serif font-semibold text-rose-800 mb-6">About Our Clinic</div>
        <div className="text-black-600 text-3xl max-w-6xl mx-auto">
          We are a professional beauty clinic committed to delivering 
          the best skin care solutions through modern technology and experienced medical experts.
        </div>
        <div/>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-3xl font-semibold text-rose-800 mb-5">Company History</div>
        <div className="text-black-600 mb-5 text-2xl">
          Our clinic was established in 2018 with a vision to help every individual feel confident through 
          healthy and well-maintained skin. Starting from a small practice room, we have grown into a modern 
          beauty clinic offering a wide range of premium services.
          Over time, we have continued to innovate by introducing the latest technologies such as 
          laser treatments and advanced skin rejuvenation. Thousands of clients have entrusted their 
          care to us, making us one of the most trusted clinics in the city.
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-3xl font-semibold text-rose-800 mb-5">Meet Our Team</div>
          <div className="flex gap-8">
            <Card2
              image="./DRLIEM.png"
              name="dr Liem"
              desc="Focuses on non-surgical anti-aging solutions, including laser therapy, skin tightening, and advanced rejuvenation treatments"
            />
            <Card2
              image="./DRDIAN.png"
              name="dr Dian"
              desc="Specializes in treating mild to severe acne, hormonal breakouts, and acne scars"
            />
            <Card2
              image="./DRSAVITRI.png"
              name="dr Savitri"
              desc="Highly experienced in treating melasma, dark spots, uneven skin tone, and post-inflammatory hyperpigmentation"
            />
          < div/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs