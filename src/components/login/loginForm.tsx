"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

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
        <form className="space-y-4 mb-6">
          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-full px-4 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
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
          <button className="flex items-center justify-center h-11 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-xl">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.08 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.48-2.53 3.28l-.35-.28z" />
              </svg>
            </span>
          </button>
          <button className="flex items-center justify-center h-11 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-xl">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.45h3.53v-3.6h-3.53c-.29-1.45-1.63-2.49-3.19-2.49-1.82 0-3.31 1.42-3.31 3.15 0 .77.31 1.49.82 2.02H5.97v3.6h2.34c.52.52 1.23.84 2.02.84 1.56 0 2.9-1.04 3.19-2.49m-.36-5.84c.99 0 1.81.73 1.97 1.7h-3.94c.16-.97.98-1.7 1.97-1.7z" />
              </svg>
            </span>
          </button>
          <button className="flex items-center justify-center h-11 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-blue-600 border-blue-600">
            <span className="text-xl">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.396-.116-2.183-.116-2.15 0-3.946 1.648-3.946 4.646v2.167z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
