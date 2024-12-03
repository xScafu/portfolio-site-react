export default function Card() {
  return (
    <div>
      <div className="card card-compact bg-gray-50 dark:bg-slate-400 dark:text-black shadow-xl rounded-md overflow-hidden">
        <figure>
          <img
            src="../public/vecteezy_web-programming-illustration-in-laptop-building-web-or_7872956-1-noBackground.png"
            alt="program"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title m-3 font-bold text-2xl">NASA APOD</h2>
          <p className="m-3 text-lg">NASA picture of the day</p>
          <div className="card-actions justify-end">
            <button className="btn border-none btn-primary m-5 bg-blue-400 dark:bg-slate-800 text-gray-50 p-3 rounded-md">
              Go to website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
