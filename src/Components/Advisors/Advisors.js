import React, { useState } from "react";

const getYear = () => {
  const d = new Date();
  const y = d.getFullYear();
  return y;
};

const Images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
];

const Advisors = ({ advisors = [] }) => {
  const [year, setYear] = useState(getYear);
  const [imageIndex, setImageIndex] = useState(0);

  const updateYear = (operator) => {
    if (operator === "+") {
      setYear(year + 1);
      setImageIndex(imageIndex + 1);
    } else {
      setYear(year - 1);
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <div className="mt-5 mb-10 p-5">
      <div className="w-11/12 lg:w-4/5 mx-auto rounded-md">
        <img
          src={Images[imageIndex]}
          alt=""
          className="w-full rounded-md shadow-sm"
        />
      </div>
      <div className="w-3/5 lg:w-2/5 mt-5 mx-auto flex justify-around items-center text-[#939393]">
        <button
          className="text-xl lg:text-2xl 2xl:text-2xl hover:text-orange-500"
          onClick={() => updateYear("-")}
          disabled={imageIndex === 0}
        >
          {"<"}
        </button>
        <button className="text-lg lg:text-xl 2xl:text-2xl hover:text-orange-500 uppercase underline decoration-orange-500 underline-offset-2">
          {year}
        </button>
        <button
          className="text-xl lg:text-2xl 2xl:text-2xl hover:text-orange-500"
          onClick={() => updateYear("+")}
          disabled={imageIndex === Images.length - 1}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Advisors;
