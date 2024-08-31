import React from "react";

const CertificateDisplay = () => {
  return (
    <div className="bg-certificate  max-h-full max-w-4xl mx-auto my-6 p-6 bg-white text-center">
      <div className="h-full flex flex-col pt-80 ">
        <p className="md:text-8xl uppercase font-extralight mb-2 text-6xl">
          Certificate
        </p>
        <p className="md:text-4xl mb-2 uppercase tracking-wider text-2xl ">
          of Appreciation
        </p>
        <div className="md:px-80 px-28">
          <p className=" border-b-black border-b-[1px] w-full "></p>
        </div>

        <p className="md:my-16 my-12 uppercase font-semibold text-xl tracking-widest">
          Proudly Presented to
        </p>
        <div className="flex items-stretch justify-center gap-4 md:mb-16 mb-12">
          <h3 className="md:text-6xl text-4xl font-medium italic capitalize">
            Name
          </h3>

          <h3 className="md:text-6xl text-4xl font-medium italic capitalize ">
            last Name
          </h3>
        </div>
        <p className="mb-4 md:text-2xl text-xl font-normal tracking-widest">
          For the outstanding completion of course on the
        </p>
        <p className="md:mb-16 mb-12 md:text-3xl text-2xl uppercase font-normal">
          NOLTE FZE LEARNING PLATFORM
        </p>
        <div className="flex justify-around md:mt-6 mt-4 md:mb-36 mb-28">
          <div>
            <p className="md:text-xl text-lg capitalize font-medium mb-1 text-start">
              Name
            </p>
            <p className="md:text-lg text-base capitalize md:mb-12 mb-10 text-start">
              Training Manager
            </p>

            <p className=" border-b-black border-b-[2px] w-full  "></p>

            <p className="mt-2 text-start md:text-lg text-base">
              Dubai, {new Date().toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="md:text-xl text-lg capitalize font-medium mb-1 text-start">
              Name
            </p>
            <p className="md:text-lg text-base capitalize md:mb-12 mb-10 text-start">
              Managing Director
            </p>

            <p className=" border-b-black border-b-[2px] w-full  "></p>

            <p className="mt-2 text-start md:text-lg text-base">
              Dubai, {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;
