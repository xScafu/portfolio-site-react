import LinkedInIcon from "@mui/icons-material/LinkedIn";

import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router";

export default function Socials() {
  return (
    <div className="text-center my-5 ml-8 flex flex-col gap-2 items-start">
      <h3 className=" font-medium text-xl xl:text-3xl mb-5">
        Check my socials
      </h3>
      <a
        href="https://github.com/xScafu"
        className="hover:text-blue-950 dark:hover:text-slate-950"
        target="_blank"
      >
        <GitHubIcon fontSize="large" />
        <p className="inline ml-2">GitHub</p>
      </a>
      <a
        href="https://www.linkedin.com/in/alessio-scarlata/"
        target="_blank"
        className="hover:text-blue-950 dark:hover:text-slate-950 "
      >
        <LinkedInIcon fontSize="large" />
        <p className="inline ml-2">LinkedIn</p>
      </a>
      <NavLink
        to={"/contact"}
        className="bg-gray-50 dark:bg-slate-600 dark:text-gray-50 text-blue-400 font-sans text-lg mt-5 p-5 py-2 transition ease-in-out hover:bg-blue-950 dark:hover:bg-slate-800 hover:text-gray-50 active:bg-blue-600 active:scale-95"
      >
        Contact me
      </NavLink>
    </div>
  );
}
