import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className="flex justify-between flex-col items-center -mx-5 -mb-5 mt-32 bg-blue-400 dark:bg-slate-400 text-gray-50 dark:text-slate-800">
      <h3 className="mt-10 font-medium text-2xl">Check my socials</h3>
      <div>
        <div className="text-center my-5 flex justify-evenly">
          <a
            href="https://github.com/xScafu"
            className="hover:text-blue-950 dark:hover:text-slate-600"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/alessio-scarlata/"
            target="_blank"
            className="hover:text-blue-950 dark:hover:text-slate-600"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <hr className="mb-5" />
        <p className="font-serif font-normal text-sm text-end mb-5">
          Designed & Produced by:{" "}
          <span className="font-medium">Alessio Scarlata</span>
        </p>
      </div>
    </div>
  );
}
