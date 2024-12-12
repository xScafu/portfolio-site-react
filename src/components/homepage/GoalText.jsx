import Divider from "@mui/material/Divider";

export default function GoalText() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-5">What is my goal?</h2>
      <Divider sx={{ backgroundColor: "white" }} className="w-11/12"></Divider>
      <p className="m-5 md:leading-7 dark:font-light">
        I have always been <span className="font-bold">passionate</span> about
        the structure behind a{" "}
        <span className="font-bold">well-developed website</span>, one that is
        also pleasing from a purely {""}
        <span className="font-bold">aesthetic perspective</span>. <br />
        This passion has led me to set a{" "}
        <span className="font-bold">significant goal</span> for myself:{" "}
        <span className="font-bold">to turn my passion into my profession</span>
        . <br />
        With <span className="font-bold">sacrifice</span> and{" "}
        <span className="font-bold">dedication</span>, this milestone is getting{" "}
        <span className="font-bold">closer every day</span>, and I can't wait to
        share my feelings and experience through websites that meet current{" "}
        <span className="font-bold">market demands</span> in terms of both{" "}
        <span className="font-bold">functionality</span> and{" "}
        <span className="font-bold">aesthetics</span>.
      </p>
    </div>
  );
}
