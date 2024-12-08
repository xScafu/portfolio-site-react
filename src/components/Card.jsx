export default function Card({
  cardTitle,
  cardDescription,
  cardLink,
  cardImg,
}) {
  return (
    <div className="flex justify-center">
      <div className="card card-compact bg-gray-50 dark:bg-slate-400 dark:text-black shadow-xl rounded-md overflow-hidden w-[22rem] h-[30rem]">
        <figure className="h-40">
          <img
            className="scale-105 transition ease-in-out duration-300 hover:scale-110"
            src={cardImg}
            alt="website preview"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title m-3 font-bold text-2xl">{cardTitle}</h2>
          <p className="m-3 text-lg">{cardDescription}</p>
          <div className="card-actions justify-end">
            <a href={cardLink} target="_blank">
              <button className="btn border-none btn-primary m-5 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 active:scale-95 dark:bg-slate-800  text-gray-50 p-3 rounded-none">
                Go to website
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
