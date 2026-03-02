import Card3 from "../components/Card3"
function Services(){
  return (
    <section className="py-20 px-6 bg-rose-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-4xl font-serif font-semibold text-rose-800 mb-6">Our Services</div>
        <div className="text-black-600 text-3xl max-w-6xl mx-auto mb-7">
          We provide a wide range of professional skincare treatments 
          using modern technology and the highest medical standards to help you look and feel more confident
        </div>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <Card3
          title="Facial basic"
          price="Rp 350.000"
          desc="This treatment is specially designed for deep blackhead removal. "
          buttonText="BOOK HERE"
          />
          <Card3
          title="Aqua facial"
          price="Rp 500.000"
          desc="An advanced facial treatment that combines dual technologies: exfoliation and serum infusion."
          buttonText="BOOK HERE"
          />
          <Card3
          title="Skin Booster Salmon DNA"
          price="Rp 1.600.000"
          desc="Skincare treatment that involves injecting fragments of DNA derived from salmon, into the skin."
          buttonText="BOOK HERE"
          />
          <Card3
          title="Skin Booster Nucleofil"
          price="Rp 3.000.000"
          desc="Nucleofill is an injectable treatment that involves injecting polynucleotides into the skin to improve overall appearance."
          buttonText="BOOK HERE"
          />
          <Card3
          title="PicoSure"
          price="Rp 3.000.000"
          desc="PicoSure is a non-invasive, picosecond laser system used for skin rejuvenation and treatment of pigmentation."
          buttonText="BOOK HERE"
          />
          <Card3
          title="Thermage"
          price="Rp 7.000.000"
          desc="Thermage is a non-invasive cosmetic treatment that uses radiofrequency(RF) to tighten, smooth, and contour the skin."
          buttonText="BOOK HERE"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
