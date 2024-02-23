export default function Buy() {
    return (
      <div
        className="w-full h-[1300px] bg-no-repeat bg-cover overflow-hidden px-20 "
        style={{ backgroundImage: "url(/last.svg)" }}
      >
        <div className="flex justify-between items-center mt-20">
          <div>
            <p className="text-[#D97706] text-2xl font-medium">
              Get the Sun to power your home
            </p>
            <h1 className="text-7xl font-semibold text-white leading-normal">
              All the power that you need for <br /> your house is now available
            </h1>
          </div>
          <div>
            <div className="flex-col flex justify-center items-center">
              <button
                href="/"
                className="font-bold items-center justify-center flex h-20 w-96 text-3xl border-2 border-[#FCD24C] bg-[#FCD24C] text-[#884917] px-6 py-2 rounded-full hover:bg-white transition duration-300 ease-in-out"
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
              <p className="mt-10 text-[#78350F] text-lg">
                Egestas fringilla aliquam leo
              </p>
            </div>
          </div>
        </div>
      </div>
    );
    }