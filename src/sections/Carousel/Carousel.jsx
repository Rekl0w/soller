import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";

export default function Carousel() {
  const [hoverR, setHoverR] = useState(true);
  const [hoverL, setHoverL] = useState(true);

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "slider",
      startAt: 1,
      perView: 3,
      focusAt: "center",
      gap: 0,
      autoplay: 3000,
      hoverpause: true,
      peek: {
        before: 210,
        after: 210,
      },
    });
    glide.mount();
  }, []);

  const userReviews = [
    {
      id: 0,
      avatar: "/person2.svg",
      img: "/cloud.svg",
      name: "Jane Cooper",
      location: "10KWh",
      comment:
        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    },
    {
      id: 1,
      avatar: "/person3.svg",
      img: "/stars.svg",
      name: "Ralph Edwards",
      location: "32KWh",
      comment:
        "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    },
    {
      id: 2,
      avatar: "/person.svg",
      img: "/castle.svg",
      name: "Courtney Henry",
      location: "6KWh",
      comment:
        "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    },
    {
      id: 3,
      avatar: "/person4.svg",
      img: "/time.svg",
      name: "Cameron Williamson",
      location: "12KWh",
      comment:
        "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    },
  ];

  return (
    <div
      className="bg-no-repeat w-full bg-cover bg-center h-[1250px] mt-40 overflow-hidden flex flex-col justify-center items-center relative"
      style={{ backgroundImage: "url(/bg-purple.svg)" }}
    >
      <div className="flex justify-around w-full mb-40">
        <div>
          <p className="text-[#FCD34D] text-2xl">Join other Sun harvesters</p>
          <h1 className="text-6xl font-semibold text-white leading-tight">
            <span className="font-extrabold">Make something awesome</span>
          </h1>
          <p className="text-white mt-5 w-full text-2xl leading-loose">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique <br /> condimentum congue fusce nunc, donec
            magnis commodo.
          </p>
        </div>
        <div className="flex items-center justify-center ">
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
      </div>
      <div className="glide flex justify-start items-start">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides flex">
            {userReviews.map((review) => (
              <li className="glide__slide" key={review.id}>
                <div className="max-w-md h-[550px] w-[1000px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col justify-between ">
                  <img
                    className="p-8 w-[120px] h-[120px]"
                    src={review.img}
                    alt=""
                  />
                  <blockquote className="mt-4 px-8 lg:mb-4 -mb-4 ">
                    <p className="text-gray-600 lg:text-2xl text-lg">
                      {review.comment}
                    </p>
                  </blockquote>
                  <div className="p-8 mt-6">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={review.avatar}
                        alt={`Avatar of ${review.name}`}
                      />
                      <div className="ml-4">
                        <p className="text-sm font-semibold text-gray-800">
                          {review.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
