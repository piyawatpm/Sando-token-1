import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "src/layout/MainLayout";

interface FormInput {
  email: string;
  username: string;
  password: string;
  confirmedPassword: string;
}

const Register = (): JSX.Element => {
  let status;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmedPassword: "",
    },
  });

  console.log(watch("email")); // you can watch individual input by pass the name of the input

  const [check, setCheck] = useState({
    password: "",
    confirmedPassword: "",
  });
  const [error, setError] = useState(false);
  const handleInputChange = (e: any) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setError(check.password !== check.confirmedPassword);
  }, [check.password, check.confirmedPassword]);
  console.log(check);

  if (check.password === check.confirmedPassword) {
    status = false;
  } else {
    status = true;
  }

  const onClickHandler = (e: any) => {
    e.preventDefault();
    if (check.password === check.confirmedPassword) {
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="my-10 mx-auto bg-[#171717] w-96 h-fit rounded-2xl p-5 text-black">
          <div className="flex items-center justify-center pb-3">
            <img
              src="/images/sando-logo.png"
              alt="sando logo image"
              className="w-16 h-16"
            />
            <h1 className="uppercase text-2xl ml-2 mt-2 text-black font-extrabold text-white">
              Sando token
            </h1>
          </div>
          <h1 className="text-xl font-bold text-white">Register</h1>
          <form
            className="pt-3"
            onSubmit={handleSubmit((data) => {
              alert(JSON.stringify(data));
            })}
          >
            <label>
              <span className="font-normal text-white">
                Email address <span className="text-red-600">*</span>
              </span>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                className="mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2"
              />
              {errors.email && (
                <p className="flex text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  This field is required
                </p>
              )}
            </label>
            <label>
              <span className="font-normal text-white">
                Username <span className="text-red-600">*</span>
              </span>
              <input
                {...register("username", {
                  required: true,
                  maxLength: 20,
                })}
                type="text"
                name="username"
                className="mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] w-full py-2 px-5 mt-2"
              />
              {errors?.username?.type === "required" && (
                <p className="flex text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  This field is required
                </p>
              )}
              {errors?.username?.type === "maxLength" && (
                <p className="flex text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Username cannot exceed 20 characters
                </p>
              )}
            </label>
            <label>
              <span className="font-normal text-white">
                Password <span className="text-red-600">*</span>
              </span>
              <input
                {...register("password", { required: true, minLength: 8 })}
                className="mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] text-black w-full py-2 px-5 mt-2"
                name="password"
                value={check.password}
                type="password"
                id="password"
                onChange={handleInputChange}
              />
              {errors?.password?.type === "required" && (
                <p className="flex text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  This field is required
                </p>
              )}
              {errors?.password?.type === "minLength" && (
                <p className="flex text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Password must contain at least 8 characters
                </p>
              )}
            </label>
            <label>
              <span className="font-normal text-white">
                Confirm Password <span className="text-red-600">*</span>
              </span>
              <input
                {...register("confirmedPassword", {
                  required: true,
                  minLength: 8,
                })}
                className="mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] text-black w-full py-2 px-5 mt-2"
                value={check.confirmedPassword}
                type="password"
                name="confirmedPassword"
                id="confirm"
                onChange={handleInputChange}
              />
              {errors?.confirmedPassword?.type === "required" && (
                <p className="flex text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  This field is required
                </p>
              )}
              {errors?.confirmedPassword?.type === "minLength" && (
                <p className="flex text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Password must contain at least 8 characters
                </p>
              )}
            </label>
            {error && (
              <p className="flex text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Passwords do not match
              </p>
            )}

            <div className="flex justify-between ">
              <a
                href="/"
                className="cursor-pointer mt-5  items-end bg-[#C4C4C4] hover:bg-[#aaaaaa] text-black text-sm font-bold py-2 px-10 rounded-3xl  "
              >
                Back
              </a>
              <input
                value="Register"
                disabled={status}
                //onClick={onClickHandler}
                type="submit"
                className="cursor-pointer mt-5  items-end bg-[#FF0090] hover:bg-[#CC0274] text-white text-sm font-bold py-2 px-10 rounded-3xl  "
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Register.layoutProps = {
  Layout: MainLayout,
};
export default Register;

