import Divider from "@mui/material/Divider";

export default function PresentationText() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-5">Who am I?</h2>
      <Divider sx={{ backgroundColor: "white" }} className="w-11/12"></Divider>
      <p className="m-5 md:leading-7">
        Hi! My name is <span className="font-bold">Alessio Scarlata</span>, I’m
        a 31-year-old guy, and I live in a small town in the province of Turin,
        Italy. <br />
        I'm an emerging <span className="font-bold">
          Front-End Developer
        </span>{" "}
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
