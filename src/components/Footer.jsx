import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useForm } from "react-hook-form";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-between flex-col items-center mt-32 bg-blue-400 text-gray-50">
      <h3 className="mt-10">Check my socials</h3>
      <div>
        <div className="text-center my-5">
          <a href="https://github.com/" className="hover:text-blue-950">
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/alessio-scarlata/"
            className="hover:text-blue-950"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <hr className="mb-5" />
        <h3 className="my-5 text-center">Let's keep in touch</h3>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          action=""
          method="post"
        >
          <input
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
            type="text"
            placeholder="Your name here"
            className="input w-full max-w-xs"
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
          <input
            {...register("lastName", { required: true })}
            aria-invalid={errors.lastName ? "true" : "false"}
            type="text"
            placeholder="Your surname here"
            className="input w-full max-w-xs"
          />
          {errors.lastName?.type === "required" && (
            <p role="alert">Last name is required</p>
          )}
          <input
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            type="text"
            placeholder="Your e-mail here"
            className="input w-full max-w-xs"
          />
          {errors.email?.type === "required" && (
            <p role="alert">Email is required</p>
          )}
          <textarea
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            className="textarea"
            placeholder="Message"
          ></textarea>
          {errors.message?.type === "required" && (
            <p role="alert">A message is required</p>
          )}
          <input type="submit" value="Submit" />
        </form>
        <p className="font-serif font-normal text-sm text-end">
          Designed & Produced by:{" "}
          <span className="font-medium">Alessio Scarlata</span>
        </p>
      </div>
    </div>
  );
}
