export default function Features() {
  return (
    <div className="w-full h-screen relative mt-40">
      <img
        src="/features.svg"
        alt=""
        className="absolute right-0 object-cover"
      />
      <div className="absolute inset-0 flex-col flex justify-start mt-20 items-center mr-96 pr-96">
        <div>
          <p className="text-[#D97706] text-2xl font-medium">System features</p>
          <h1 className="text-7xl font-semibold text-[#1D1E28] leading-normal">
            Powerful features
          </h1>
          <p className="mt-5 text-2xl leading-loose">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis <br /> semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <div className="flex gap-40 mt-20">
          <div className="flex-col flex gap-20">
            <div>
              <img src="/tree.svg" alt="truck" />
              <h3 className="text-2xl mt-4 font-medium">Erat sit</h3>
              <p className="mt-5 text-lg">
                Id quis lectus pharetra, ultricies integer <br /> montes, amet,
                gravida consectetur. <br /> Nunc convallis fringilla nisl magna{" "}
                <br /> sagittis.
              </p>
            </div>
            <div>
              <img src="/upload.svg" alt="truck" />
              <h3 className="text-2xl mt-4 font-medium">Et pellentesque</h3>
              <p className="mt-5 text-lg">
                Mi vitae, massa eu molestie massa <br /> euismod volutpat
                condimentum. Blandit <br /> molestie ullamcorper hendrerit purus{" "}
                <br /> lorem vulputate.
              </p>
            </div>
          </div>
          <div className="flex-col flex gap-28">
            <div>
              <img src="/like.svg" alt="truck" />
              <h3 className="text-2xl mt-4 font-medium">Ullamcorper arcu</h3>
              <p className="mt-5 text-lg">
                Ipsum at id hendrerit amet faucibus <br /> commodo quam nullam.
                Lectus auctor <br /> habitant duis dictum.
              </p>
            </div>
            <div>
              <img src="/mesh.svg" alt="truck" />
              <h3 className="text-2xl mt-4 font-medium">Amet egestas</h3>
              <p className="mt-5 text-lg">
                Elementum, libero, lacus, vel ullamcorper <br /> at velit id.
                Malesuada velit et, <br /> ullamcorper malesuada amet, felis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
