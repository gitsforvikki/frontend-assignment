"use client";

import { loginAction } from "@/server-action";
import { AppleIcon, ChromeIcon, Eye, EyeOff, FacebookIcon } from "lucide-react";
import { useState } from "react";
import { Apple, Chrome, Facebook } from "lucide-react";
export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center bg-white px-4 py-8 lg:px-9 rounded-lg shadow-lg ">
      <div className="max-w-full px-0">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Sign up
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="text-teal-500 hover:text-teal-600 font-semibold"
            >
              Log in
            </a>
          </p>
        </div>

        {/* Form */}
        <form action={loginAction} className="space-y-4 mb-6">
          {/* First Name */}
          <div>
            <input
              type="text"
              required
              name="firstName"
              placeholder="First name"
              className="w-full px-4 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              required
              name="lastName"
              placeholder="Last name"
              className="w-full px-4 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full px-4 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password (8+ characters)"
                className="w-full px-4 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 py-2">
            <input
              type="checkbox"
              name="terms"
              required
              className="mt-1 rounded border-gray-300 text-teal-500 focus:ring-teal-500 cursor-pointer bg-transparent"
            />
            <label className="text-sm text-gray-600">
              I agree to Aeps's{" "}
              <a
                href="#"
                className="text-teal-500 hover:text-teal-600 underline"
              >
                Terms & Conditions
              </a>{" "}
              and acknowledge the{" "}
              <a
                href="#"
                className="text-teal-500 hover:text-teal-600 underline"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-full transition-colors mt-3"
          >
            Create account
          </button>
        </form>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button className="flex items-center justify-center h-11 border  rounded-lg transition-colors bg-black border-blue-600">
            <AppleIcon size={20} />
          </button>
          <button className="flex items-center justify-center h-11 border  rounded-lg transition-colors bg-violet-700 border-blue-600">
            <ChromeIcon size={20} />
          </button>
          <button className="flex items-center justify-center h-11 border rounded-lg transition-colors bg-blue-600 border-blue-600">
            <AppleIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
