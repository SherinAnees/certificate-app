import React from "react";

const CertificateDisplay = () => {
  return (
    <div className="bg-certificate max-h-full max-w-4xl mx-auto  p-6 bg-white text-center">
      <div className="h-full flex flex-col  pt-[300px]">
        <h2 className="text-2xl font-semibold mb-4">Certificate</h2>
        <p className="mb-2">of Appreciation</p>
        <p className="mb-2">Proudly Presented to</p>
        <h3 className="text-xl font-bold mb-4"></h3>
        <p className="mb-2">For the outstanding completion of course on the</p>
        <p className="mb-4">NOLTE FZE LEARNING PLATFORM</p>
        <p className="mb-4">Date: {new Date().toLocaleDateString()}</p>
        <div className="flex justify-around mt-6">
          <div>
            <p></p>
            <p className="text-sm">Training Manager</p>
          </div>
          <div>
            <p></p>
            <p className="text-sm">Managing Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDisplay;
