type Card = {
  title: string;
  desc: string;
  author: string;
  date: string;
  buttonText: string;
}

export default function Card({
  title,
  desc,
  author,
  date,
  buttonText,
}: Card) {
  return (
    <div className="bg-white rounded-lg p-8 text-left flex flex-col justify-between">
      <div>
        <div className="text-2xl font-semibold text-black-600 mb-2">
          {title}
        </div>
        <div className="text-black-600 text-1xl mb-4">
          {desc}
        </div>
        <div className="text-sm text-black-600 mb-5 flex flex-row">
          <div>By {author}</div>
          <div>{date}</div>
        </div>
      </div>
      <button className="mt-1 w-full bg-rose-600 text-white py-3 rounded-lg cursor-pointer">
        {buttonText}
      </button>
    </div>
  )
}