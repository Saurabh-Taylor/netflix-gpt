import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = ({ type = "sigin" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>
      <div className="w-full max-w-md p-8 space-y-8 bg-black bg-opacity-75 rounded-lg shadow-md z-10">
        <h2 className="text-3xl font-extrabold text-center text-white">
          {" "}
          {type == "signin" ? "Sign In " : "Sign Up"}{" "}
        </h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
           {type=="signin"? null :(
             <div>
             <label htmlFor="email-address" className="sr-only">
               Username
             </label>
             <input
               id="Username"
               name="username"
               type="text"
               required
               className="relative block w-full px-3 py-2 text-white placeholder-gray-500 bg-black border border-gray-300 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm mb-4"
               placeholder="UserName"
             />
           </div>
           )}

            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-500 bg-black border border-gray-300 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm mb-4"
                placeholder="Email address"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-500 bg-black border border-gray-300 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500  sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-0"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-400"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md group hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-sm text-center text-gray-400">
         {type=="signin"?( 
          <div> New to Netflix?{" "}
          <Link to="/signup" className="text-red-600 hover:text-red-500">
            Sign up now
          </Link>
          </div>
          ):(
            <div> Already Registered?{" "}
          <Link to="/" className="text-red-600 hover:text-red-500">
            Login now
          </Link>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
