import PresentationImage from "./PresentationImage";

export default function Presentation() {
  return (
    <div className="mt-40 p-2 select-auto">
      <h3 className="text-lg font-normal">
        <span>Hi</span>, my name is
      </h3>
      <h1 className="text-7xl font-semibold">Alessio Scarlata</h1>
      <h2 className="text-5xl mt-5 font-medium">I build things for the web.</h2>
      <div className="my-20">
        <PresentationImage />
      </div>
      <p className="font-serif bg-slate-100 p-5 rounded-md">
        I'm an emerging <span className="font-bold">Front-End Developer</span>{" "}
        with a passion for creating dynamic and responsive web applications.{" "}
        <br />I am currently honing my skills in{" "}
        <span className="font-bold">React.js</span> to enhance my ability to
        build intuitive and visually appealing interfaces. <br />
        <span className="font-bold">Explore</span> my projects and see how I'm{" "}
        <span className="font-bold">leveraging</span> the latest{" "}
        <span className="font-bold">technologies</span> to bring{" "}
        <span className="font-bold">creative ideas to life.</span>
      </p>
    </div>
  );
}
