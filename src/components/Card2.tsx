type Card= {
  image: string;
  name: string;
  desc: string;
}

export default function Card({
  image,
  name,
  desc,
}: Card) {
  return (
    <div className="w-full bg-white flex flex-col items-center pt-6">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 object-cover rounded-full"
      />
      <div className="p-4">
        <div className="text-2xl text-rose-800 mb-2 text-center">
          {name}
        </div>
        <div className="text-1xl text-black text-center">
          {desc}
        </div>
      </div>
    </div>
  )
}