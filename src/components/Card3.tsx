type Card= {
  title: string;
  price: string;
  desc: string;
  buttonText:string;
}

export default function Card({
  title,
  price,
  desc,
  buttonText,
}: Card) {
  return (
    <div className="bg-white rounded-lg p-8 w-130 text-left">
      <div className="text-2xl font-semibold text-black-600 mb-2">
        {title}
      </div>
      <div className="text-rose-600 text-1xl mb-4">
        {price}
      </div>
      <div className="text-black-600 text-1xl mb-6">
        {desc}
      </div>
      <button className="mt-1 w-full bg-rose-600 text-white py-2 rounded-lg cursor-pointer">
        {buttonText}
      </button>
    </div>
  )
}