import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 px-6">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-slate-500 dark:text-slate-400">
          The page you're looking for doesn't exist or has been moved.
          Let’s get you back to safety.
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 text-white font-medium shadow-lg hover:bg-teal-600 transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Decorative Glow */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full w-96 h-96 mx-auto top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}