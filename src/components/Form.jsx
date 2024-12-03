import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const inputEffects =
    "input bg-gray-50 w-full max-w-xs mt-5 rounded p-2 transition ease-in-out focus:outline-none focus:shadow-md dark:bg-slate-200";

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        action=""
        method="post"
        className="flex flex-col"
      >
        <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
          type="text"
          placeholder="Your name here"
          className={inputEffects}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}
        <input
          {...register("lastName", { required: true })}
          aria-invalid={errors.lastName ? "true" : "false"}
          type="text"
          placeholder="Your surname here"
          className={inputEffects}
        />
        {errors.lastName?.type === "required" && (
          <p role="alert">Last name is required</p>
        )}
        <input
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
          type="text"
          placeholder="Your e-mail here"
          className={inputEffects}
        />
        {errors.email?.type === "required" && (
          <p role="alert">Email is required</p>
        )}
        <textarea
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
          className="textarea bg-gray-50 mt-5 text-black rounded p-2 transition ease-in-out focus:outline-none focus:shadow-md dark:bg-slate-200"
          placeholder="Message"
        ></textarea>
        {errors.message?.type === "required" && (
          <p role="alert">A message is required</p>
        )}
        <input
          type="submit"
          value="Submit"
          className="my-5 btn border-none rounded p-2 transition ease-in-out bg-gray-50 dark:bg-slate-800 text-blue-400 dark:text-gray-50 hover:bg-blue-500 dark:hover:bg-slate-600 hover:text-gray-50 active:bg-blue-600 active:scale-95"
        />
      </form>
    </div>
  );
}
