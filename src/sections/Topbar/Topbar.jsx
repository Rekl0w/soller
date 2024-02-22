export default function Topbar() {
  return (
    <div className="w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-around gap-20 items-center text-center">
            <button href="/">
              <h1 className="text-4xl font-bold">soller</h1>
            </button>
            <div>
              <ul className="flex space-x-8 text-lg gap-8">
                <li className="flex ">
                  <button href="/" className="font-medium">
                    Products
                  </button>
                </li>
                <li className="flex ">
                  <button href="/" className="font-medium">
                    Solutions
                  </button>
                </li>
                <li className="flex ">
                  <button href="/" className="font-medium">
                    Services
                  </button>
                </li>
                <li className="flex ">
                  <button href="/" className="font-medium">
                    Configure
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <ul className="flex gap-10 items-center">
            <li>
                <button href="/" className="text-[#0269A0] font-bold flex items-center text-center justify-center gap-2">
                    <img src="/headphone.svg" alt="" className="w-[30px] h-[30px] -translate-y-0.5"/>
                    555 818 282
                </button>
            </li>
              <li>
                <button
                  href="/"
                  className="font-bold items-center justify-center flex h-14 border-2 border-[#FCD24C] bg-[#FCD24C] text-[#884917] px-6 py-2 rounded-full hover:bg-white transition duration-300 ease-in-out"
                >
                  Request a Quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 ml-2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
