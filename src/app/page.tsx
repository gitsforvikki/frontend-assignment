import { LoginForm } from "@/components/login/loginForm";
import { LoginInfo } from "@/components/login/loginInfo";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-orange-600">
      {/* Logo/Product Name */}

      <div className="flex items-center self-start gap-2 mx-5 lg:mx-10 pt-5 lg:pt-10 mb-2 md:mb-0">
        <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
        <span className="text-xl lg:text-2xl font-medium text-white">aps</span>
      </div>
      <div className="min-h-screen flex items-center">
        <div className="container h-full flex flex-col gap-y-10 lg:flex-row justify-between items-center">
          <LoginInfo />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
