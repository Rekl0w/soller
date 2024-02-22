export default function Overview () {
  return (
    <div>
      <div className="flex text-center justify-center">
        <div className="absolute flex-col flex items-center text-center justify-center">
          <p className="text-[#D97706] text-center text-2xl">No more waste</p>
          <h1 className="text-7xl font-semibold text-[#1D1E28] leading-normal text-center">
            Pick the Sun
          </h1>
          <p className="text-[#4F5665] mt-5 w-full text-xl leading-loose text-center">
            Et pulvinar nec interdum integer id urna molestie porta nullam. A,
            donec ornare sed turpis pulvinar <br /> purus maecenas quam a. Erat
            porttitor pharetra sed in mauris elementum sollicitudin.
          </p>
        </div>
      </div>
      <div>
        <img src="/overview.svg" alt="" className="w-full h-full" />
      </div>
    </div>
  );
}
