export const LoginInfo = () => {


  return (
    <div className="text-white flex-col justify-between w-full space-y-8 lg:space-y-40 xl:space-y-50">

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center gap-y-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Expert level Cybersecurity
          <br />
          in <span className="text-teal-400">hours</span> not weeks.
        </h1>

        {/* Features List */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
            What's included
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm">
              <span className="text-teal-400 font-bold">✓</span>
              <span>
                Effortlessly spider and map targets to uncover hidden security
                flaws
              </span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="text-teal-400 font-bold">✓</span>
              <span>
                Deliver high-quality, validated findings in hours, not weeks.
              </span>
            </li>
            <li className="flex gap-3 text-sm">
              <span className="text-teal-400 font-bold">✓</span>
              <span>
                Generate professional, enterprise-grade security reports
                automatically.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Trustpilot Rating */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-teal-400">★</span>
          <span className="font-semibold text-sm lg:text-base">Trustpilot</span>
        </div>
        <div className="text -xl lg:text-2xl font-bold">Rated 4.5/5.0</div>
        <div className="text-sm text-gray-400">(1000+ reviews)</div>
      </div>
    </div>
  );
};
