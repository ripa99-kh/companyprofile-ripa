type Card = {
  image: string;
  title: string;
  desc: string;
  buttonText: string;
}

export default function Card({
  image,
  title,
  desc,
  buttonText,
}: Card) {
  return (
    <div className="w-full bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <div className="text-2xl mb-2">
          {title}
        </div>
        <div className="text-1xl text-black">
          {desc}
        </div>
      </div>
      <div className="flex justify-center pb-4">
          <button className="px-4 py-2 text-1xl border border-black bg-rose-200 text-black-600 rounded-md cursor-pointer">
            {buttonText}
          </button>
      </div>
    </div>
  )
}