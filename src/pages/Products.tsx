import Card from "../components/Card"
function Products() {
  return (
    <div className="py-20 px-6 bg-rose-100">
      <div className="mx-auto text-center">
        <div className="text-4xl font-serif text-rose-800 mb-4">PRODUCT</div>
        <div className="text-[22px] mx-auto text-black-600 mb-14">
          We offer a comprehensive selection of aesthetic treatments designed to help you achieve healthy, 
          luminous, and beautifully radiant skin.
        </div>
        <div className="flex gap-8">
             <Card
             image="./PRODUCT.png"
             title="Facial"
             desc="Modern facial treatments with the latest technology"
             buttonText="BOOK HERE"
             />
            <Card
             image="./PRODUCT.png"
             title="Skin Booster"
             desc="Advanced hydration treatment with micro-injection technology"
             buttonText="BOOK HERE"
             />
            <Card
             image="./PRODUCT.png"
             title="PicoSure"
             desc="Next-generation picosecond laser technology for flawless skin"
             buttonText="BOOK HERE"
             />
            <Card
             image="./PRODUCT.png"
             title="Thermage"
             desc="Premium non-surgical skin tightening with radiofrequency"
             buttonText="BOOK HERE"
             />
        </div>
      </div>
    </div>
  )
}

export default Products