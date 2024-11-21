import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className="flex justify-between items-center mt-5">
      <div>
        <GitHubIcon fontSize="large" />
        <LinkedInIcon fontSize="large" />
      </div>
      <div>
        <p className="font-serif font-normal text-sm text-end">
          Designed & Producted by:{" "}
          <span className="font-medium">Alessio Scarlata</span>
        </p>
      </div>
    </div>
  );
}
