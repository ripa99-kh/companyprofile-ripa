function CompanyOverview() {
  return (
     <section className="bg-rose-50 h-[100vh] flex flex-row">
        <div className="w-[50%] h-[100vh]">
            <img src="/CLINIC.png" alt="Clinic" className="w-150 h-150 object-cover"/>
        </div>
        <div className=" flex flex-col justify-center px-6 py-16 w-[50%] h-[100vh]">
            <div className="text-4xl font-serif text-rose-800 mb-4">OUR CLINIC</div>
            <div className="text-rose-800 mb-4" >══════════</div>
            <div className="text-2xl font-semibold text-rose-800 mb-2">Background</div>
            <div className="text-black-600 text-1xl mb-4">
              Founded with a vision to redefine aesthetic care through medically driven innovation, we merge advanced technology with precision expertise to create next-generation skincare solutions. 
              Every treatment is designed through a data-informed, personalized approach—by integrating innovation, clinical excellence, and a forward-thinking mindset, 
              we create a modern aesthetic experience where technology enhances natural beauty and confidence evolves with every transformation.
            </div>
            <div className="text-2xl font-semibold text-rose-800 mb-2">Team</div>
            <div className="text-black-600 text-1xl mb-4">
              Our team is composed of highly skilled doctors and aesthetic professionals with extensive expertise in dermatology and medical aesthetics, delivering precision-driven and science-backed treatments.
            </div>
            <div className="text-2xl font-semibold text-rose-800 mb-2">Culture</div>
            <div className="text-black-600 text-1xl">
              We cultivate a professional and welcoming work culture, driven by a strong commitment to client satisfaction and upheld by the highest standards of integrity.
            </div>
          </div>
    </section>
  )
}

export default CompanyOverview