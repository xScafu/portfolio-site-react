export default function Certifications() {
  return (
    <>
      <div className="mt-10 flex flex-col align-middle items-center">
        <div className="w-96">
          <h2 className="text-center text-3xl font-serif">
            Some of my certifications
          </h2>
          <a href="https://www.credly.com/badges/9f6a4b87-a5dc-4e14-aad2-d8425f618e39/public_url">
            <img
              src="https://images.credly.com/size/340x340/images/ef99b79e-fd54-4eb5-b2a4-bf17e92a4837/ITS-Badges_JavaScript_1200px.png"
              alt="Certiport Javascript It Specialist badge"
              className="mt-10 max-w-60 mx-auto"
            />
            <p className="text-center mt-5 font-serif">
              <span className="text-2xl font-bold">Certiport</span> <br />{" "}
              <span className="text-xl font-semibold">
                Information Tecnology Specialist
              </span>{" "}
              <br /> <span className="text-xl">JavaScript</span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
