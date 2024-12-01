import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const inputEffects =
    "input w-full max-w-xs mt-5 rounded p-2 transition ease-in-out focus:outline-none focus:shadow-md";

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
          className="textarea mt-5 text-black rounded p-2 transition ease-in-out focus:outline-none focus:shadow-md"
          placeholder="Message"
        ></textarea>
        {errors.message?.type === "required" && (
          <p role="alert">A message is required</p>
        )}
        <input
          type="submit"
          value="Submit"
          className="my-5 btn border-none rounded p-2 bg-gray-50 text-blue-400 hover:bg-blue-500 hover:text-gray-50 active:bg-blue-600"
        />
      </form>
    </div>
  );
}
