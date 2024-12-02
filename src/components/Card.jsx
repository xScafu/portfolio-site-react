export default function Card() {
  return (
    <div>
      <div className="card bg-gray-50 image-full shadow-xl rounded-md overflow-hidden">
        <figure>
          <img
            src="../public/vecteezy_web-programming-illustration-in-laptop-building-web-or_7872956-1-noBackground.png"
            alt="program"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title m-3 font-bold text-2xl">NASA APOD</h2>
          <p>NASA picture of the day</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Go to website</button>
          </div>
        </div>
      </div>
    </div>
  );
}
