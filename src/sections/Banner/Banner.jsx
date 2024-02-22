export default function Banner() {
  return (
    <div className="pb-40">
      <div className="flex justify-start w-full items-center pl-48 pt-20">
        <div>
          <h1 className="text-8xl font-semibold text-[#1D1E28] leading-tight">
            <span className="font-extrabold">
              Get the Sun to <br /> Power Your Home
            </span>
          </h1>
          <p className="text-[#1D1E28] mt-5 w-full text-3xl leading-loose">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit <br /> mus
            viverra orci dui consequat turpis scelerisque.
          </p>
          <div className="mt-10 flex gap-5">
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
          </div>
          <div className="mt-28">
            <p className="text-[#1D1E28] text-2xl">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui <br /> consequat turpis scelerisque faucibus.”
            </p>
            <div className="flex mt-10 items-center">
              <img
                src="/person.svg"
                alt="person"
                className="rounded-full w-[64px] h-[64px] mr-10"
              />
              <div>
                <p className="font-semibold text-[#1D1E28] text-xl">Rwanda Melflor</p>
                <p className="text-[#475569] text-md">zerowaste.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-start absolute top-0 right-0 -z-50">
        <img src="/banner.svg" alt="banner" className="w-[850px]" />
      </div>
    </div>
  );
}
