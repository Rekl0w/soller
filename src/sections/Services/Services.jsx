export default function Services() {
  return (
    <div className="w-full h-screen relative">
      <img
        src="/services.svg"
        alt=""
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 flex-col flex justify-start mt-20 items-center ml-96 pl-96">
        <div>
          <p className="text-[#D97706] text-2xl font-medium">Services</p>
          <h1 className="text-7xl font-semibold text-[#1D1E28] leading-normal">
            Personalized services
          </h1>
          <p className="mt-5 text-2xl leading-loose">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis <br /> semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <div className="flex gap-40 mt-20">
          <div className="flex-col flex gap-20">
            <div>
              <img src="/truck.svg" alt="truck" />
              <h3 className="text-2xl mt-4 font-medium">Et mauris</h3>
              <p className="mt-5 text-lg">
                Posuere quis sed mauris non curabitur <br /> pretium elementum
                eget. Feugiat sed <br /> maecenas eu accumsan tristique.
              </p>
            </div>
            <div>
              <img src="/walk.svg" alt="truck" />
              <h3 className="text-2xl mt-4 font-medium">
                Imperdiet pellentesque
              </h3>
              <p className="mt-5 text-lg">
                Platea arcu dapibus non magna cursus <br /> lectus id
                sollicitudin. Enim viverra <br /> parturient tristique nulla.
              </p>
            </div>
          </div>

          <div className="flex-col flex gap-20">
            <div>
              <img src="/cup.svg" alt="truck" />
              <h3 className="text-2xl mt-4 font-medium">Eget sit</h3>
              <p className="mt-5 text-lg">
                Sit bibendum donec dolor fames neque <br /> vulputate non sit
                aliquam. Consequat <br /> turpis natoque leo, massa.
              </p>
            </div>
            <div>
              <img src="/pig.svg" alt="truck" />
              <h3 className="text-2xl mt-4 font-medium">Non libero</h3>
              <p className="mt-5 text-lg">
                Congue mauris sem vel, urna viverra. <br /> Urna, nibh leo
                suscipit purus ut sed eros, <br /> consectetur viverra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
