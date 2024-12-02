import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Form from "./Form";

export default function Footer() {
  return (
    <div className="flex justify-between flex-col items-center -mx-5 mt-32 bg-blue-400 text-gray-50">
      <h3 className="mt-10 font-medium text-2xl">Check my socials</h3>
      <div>
        <div className="text-center my-5 flex justify-evenly">
          <a
            href="https://github.com/xScafu"
            className="hover:text-blue-950"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/alessio-scarlata/"
            target="_blank"
            className="hover:text-blue-950"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <hr className="mb-5" />
        <h3 className="my-5 text-center font-medium text-2xl">
          Let's keep in touch
        </h3>
        <Form />
        <p className="font-serif font-normal text-sm text-end">
          Designed & Produced by:{" "}
          <span className="font-medium">Alessio Scarlata</span>
        </p>
      </div>
    </div>
  );
}
