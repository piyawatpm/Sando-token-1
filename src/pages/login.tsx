import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "src/layout/MainLayout";

interface FormData {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  let status;

  const {
    register,
    handleSubmit,
    watch,
   // formState: isLoading,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

//TODO check email and password entering

  const onSubmit = handleSubmit((email: any, password: any) => {
    alert(JSON.stringify(email, password));
    console.log(email, password);
  });

  //if (isLoading) {
   // return <div>Loading...</div>
 // }


  //console.log(watch("password")); // you can watch individual input by pass the name of the input

  const [check, setCheck] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleInputChange = (e: any) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="my-10 mx-auto bg-[#171717] w-96 h-fit rounded-2xl p-5 text-white">
          <div className="flex items-center justify-center pb-3">
            <img
              src="/images/sando-logo.png"
              alt="sando logo image"
              className="w-12 h-12"
            />
            <h1 className="text-2xl ml-2 text-white font-extrabold">
              SANDO TOKEN
            </h1>
          </div>
          <h1 className="text-xl font-bold">Login</h1>
          <form className="pt-3" onSubmit={onSubmit} >
            <label>
              <span className="font-normal">
                Email address <span className="text-red-600">*</span>
              </span>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                onChange={handleInputChange}
                className="mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] text-black w-full py-2 px-5 mt-2"
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
              <span className="font-normal">
                Password <span className="text-red-600">*</span>
              </span>
              <input
                minLength={8}
                {...register("password", { required: true, minLength: 8 })}
                className="mb-3 rounded-3xl bg-[#EBEBEB] focus:outline-none border border-[#C4C4C4] text-black w-full py-2 px-5 mt-2"
                name="password"
                type="password"
                id="password"
                onChange={handleInputChange}
              />
              {errors.password && (
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
                  This field is required.
                </p>
              )}
            </label>

            <div className="flex justify-between items-center my-5 ">
              {/* TODO add Forget password function */}
              <a href="/" className="text-[#65FFA3] underline   ">
                Forget password
              </a>
              <input
                value="Login"
                disabled={status}
                //onClick={onClickHandler}
                type="submit"
                className="cursor-pointer   items-end bg-[#FF0090] hover:bg-[#db037e] text-white text-sm font-bold py-2 px-10 rounded-3xl  "
              />
            </div>
            <span>
              Don't have an account?{" "}
              <a href="/register" className="underline font-bold">
                Register
              </a>
            </span>
            <div className="w-full my-5 flex justify-center items-center">
              <hr className="text-white w-1/3" />{" "}
              <span className="mx-1">or Login with</span>{" "}
              <hr className="text-white w-1/3" />
            </div>
            <div className="flex justify-center items-center space-x-7">
              <a href="/">
                <img src="/images/icons/google-icon.svg" alt="google-icon" />
              </a>
              <a href="/">
                <img src="/images/icons/facebook-icon.svg" alt="google-icon" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Login.layoutProps = {
  Layout: MainLayout,
};

export default Login;
