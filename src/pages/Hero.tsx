function Hero() {
  return (
    <section className="bg-rose-100 h-[100vh] flex flex-row">
      <div className=" flex flex-col justify-center px-6 py-16 w-[50%] h-[100vh]">
        <div className="text-6xl font-serif text-rose-800 leading-[1.3]">
            Radiate Your Beauty
            Elevate Your Confidence
        </div>
        <div className="mt-7 text-xl text-black-600 max-w-[600px]">
            Cyber Chic delivers modern, safe, and trusted skincare designed to keep your skin glowing and your confidence on point. 
            Our mission is to provide high-quality treatments with expert care and a personalized touch — because your skin deserves the best.
        </div>
      </div>
      <div className="w-[50%] h-[100vh]">
        <img src="/HERO.png" alt="Hero Image" className="w-full h-full object-cover"/>
      </div>
    </section>
  )
}

export default Hero