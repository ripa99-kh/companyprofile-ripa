import Card4 from "../components/Card4"
function BlogList() {
  return (
    <section className="py-20 px-6 bg-rose-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-4xl font-serif font-semibold text-rose-800 mb-6">Our Blog</div>
        <div className="text-black-600 text-3xl max-w-6xl mx-auto mb-7">
            Explore expert skincare insights, treatment guides, and beauty tips
            written by our professional medical team to help you look and feel
            more confident.
        </div>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <Card4
          title="The Benefits of Regular Facial Treatments"
          desc="Discover how consistent facial treatments can improve skin texture, reduce acne, and boost your confidence."
          author="dr. Amanda Putri•"
          date="March 1, 2026"
          buttonText="READ MORE"
        />
        <Card4
          title="The Benefits of Regular Facial Treatments"
          desc="Discover how consistent facial treatments can improve skin texture, reduce acne, and boost your confidence."
          author="dr. Amanda Putri•"
          date="March 1, 2026"
          buttonText="READ MORE"
        />
        <Card4
          title="The Benefits of Regular Facial Treatments"
          desc="Discover how consistent facial treatments can improve skin texture, reduce acne, and boost your confidence."
          author="dr. Amanda Putri•"
          date="March 1, 2026"
          buttonText="READ MORE"
        />
        <Card4
          title="The Benefits of Regular Facial Treatments"
          desc="Discover how consistent facial treatments can improve skin texture, reduce acne, and boost your confidence."
          author="dr. Amanda Putri•"
          date="March 1, 2026"
          buttonText="READ MORE"
        />
        </div>
      </div>
    </section>
  )
}

export default BlogList