import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const inputEffects =
    "input bg-gray-50 w-full max-w-xs xl:max-w-md mt-5 rounded p-2 transition ease-in-out focus:outline-offset-0 dark:focus:outline-offset-1 focus:outline-blue-500 dark:focus:outline-blue-200 focus:shadow-md dark:bg-slate-200";

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        action=""
        method="post"
        className="flex flex-col text-black w-3/4 items-center"
      >
        <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
          type="text"
          placeholder="Your name here*"
          className={inputEffects}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert" className="dark:text-red-500">
            First name is required
          </p>
        )}
        <input
          {...register("lastName", { required: true })}
          aria-invalid={errors.lastName ? "true" : "false"}
          type="text"
          placeholder="Your surname here*"
          className={inputEffects}
        />
        {errors.lastName?.type === "required" && (
          <p role="alert" className="dark:text-red-500">
            Last name is required
          </p>
        )}
        <input
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
          type="text"
          placeholder="Your e-mail here*"
          className={inputEffects}
        />
        {errors.email?.type === "required" && (
          <p role="alert" className="dark:text-red-500">
            Email is required
          </p>
        )}
        <textarea
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
          className="textarea bg-gray-50 mt-5 text-black rounded p-2 w-full xl:max-w-md transition ease-in-out focus:outline-offset-0 dark:focus:outline-offset-1 focus:outline-blue-500 dark:focus:outline-blue-200 focus:shadow-md dark:bg-slate-200"
          placeholder="Message*"
        ></textarea>
        {errors.message?.type === "required" && (
          <p role="alert" className="dark:text-red-500">
            A message is required
          </p>
        )}
        <input
          type="submit"
          value="Submit"
          className="my-5 btn border-none rounded px-2 w-28 transition ease-in-out bg-gray-50 dark:bg-slate-600 text-blue-400 dark:text-gray-50 hover:bg-blue-950 dark:hover:bg-slate-800 hover:text-gray-50 active:bg-blue-600 active:scale-95"
        />
      </form>
    </div>
  );
}
