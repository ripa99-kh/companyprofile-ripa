function Testimonial() {
  return (
    <section className="bg-rose-50 py-20 px-6">
      <div className="mx-auto text-center">
        <div className="text-4xl font-serif text-rose-800 mb-16">
          TESTIMONIAL
        </div>
        <div className="flex flex-rows-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="text-2xl text-rose-800 mb-4">
              Ripa | Enterpreneur
            </div>
            <div className="text-1xl text-black-600">
                “The clinic combines advanced technology with genuine care. From consultation to treatment, 
                everything was explained clearly and handled with expertise. I truly trust them with my skin.”
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl text-rose-800 mb-4">
              Aida | Pharmacist
            </div>
            <div className="text-1xl text-black-600">
                “I had such a wonderful experience at this clinic. The staff were incredibly professional and attentive, and the treatment was
                tailored perfectly to my needs. My skin feels healthier, smoother, and more radiant than ever.”
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl text-rose-800 mb-4">
              Cici | Student
            </div>
            <div className="text-1xl text-black-600">
                “As someone new to aesthetic treatments, I felt nervous at first. But the consultation was 
                thorough, and the staff made me feel completely at ease. I’m so happy with the outcome!”
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial