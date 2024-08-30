import React from "react";

const CertificateDisplay = () => {
  return (
    <div className="bg-certificate max-h-full max-w-4xl mx-auto  p-6 bg-white text-center">
      <div className="h-full flex flex-col  pt-80  ">
        <h2 className="text-8xl uppercase font-extralight mb-2">Certificate</h2>
        <p className="text-3xl mb-2 uppercase tracking-wider ">
          of Appreciation
        </p>
        <div className="px-80">
          <p className=" border-b-black border-b-[1px] w-full  "></p>
        </div>

        <p className="my-16 uppercase font-semibold text-xl tracking-widest">
          Proudly Presented to
        </p>
        <div className="flex items-stretch justify-center gap-4 mb-16">
          <h3 className="text-6xl font-medium italic capitalize">Name</h3>

          <h3 className="text-6xl font-medium italic capitalize ">last Name</h3>
        </div>
        <p className="mb-4 text-2xl font-normal tracking-widest">
          For the outstanding completion of course on the
        </p>
        <p className="mb-16 text-3xl uppercase font-normal">
          NOLTE FZE LEARNING PLATFORM
        </p>
        <div className="flex justify-around mt-6 mb-36">
          <div>
            <p className="text-xl capitalize font-medium mb-1 text-start">
              Name
            </p>
            <p className="text-lg capitalize mb-12 text-start">
              Training Manager
            </p>

            <p className=" border-b-black border-b-[2px] w-full  "></p>

            <p className="mt-2 text-start text-lg">
              Dubai, {new Date().toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-xl capitalize font-medium mb-1 text-start">
              Name
            </p>
            <p className="text-lg capitalize mb-12 text-start">
              Managing Director
            </p>

            <p className=" border-b-black border-b-[2px] w-full  "></p>

            <p className="mt-2 text-start text-lg">
              Dubai, {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;
