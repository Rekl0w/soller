export default function Case() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover overflow-hidden"
      style={{ backgroundImage: "url(/people.svg)" }}
    >
      <div className="flex-col flex justify-start mt-20 items-center ml-96 pl-96">
        <div className="mt-40">
          <p className="text-[#D97706] text-2xl font-medium">Case studies</p>
          <h1 className="text-7xl font-semibold text-[#1D1E28] leading-normal">
            Check how our systems <br /> have helped others
          </h1>
          <p className="mt-5 text-2xl leading-loose">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor <br /> turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <div className="flex ml-80 pl-6 mt-10 justify-start w-full">
          <button className="text-[#78350F] flex font-semibold">
            Find Case Studies
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
        </div>
      </div>
    </div>
  );
}
