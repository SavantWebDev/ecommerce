import React from "react";

const SkeletonCards = () => {
  return (
    <div className="flex flex-col py-[1rem] max-w-[306px] 3xl:w-[306px] mx-auto w-full justify-center items-center relative lg:mx-auto mb:max-mn:mx-auto">
      <div className=" w-full relative h-[255px] rounded-[10px] bg-cinza-skeleton flex justify-center items-center">
        <div className="w-full max-w-[198px]  h-[186px] text-center flex flex-col items-center justify-center rounded-[10px] bg-gray-300 animate-pulse">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="text-center mt-[20px] px-1 w-full">
        <div className="inline-flex h-4 w-[290px] bg-cinza-skeleton rounded-full pb-[10px] animate-pulse"></div>
        <div className="inline-flex h-4 w-[290px] bg-cinza-skeleton rounded-full animate-pulse"></div>
        <div className="inline-flex h-4 w-[290px] bg-cinza-skeleton rounded-full pb-[2px] animate-pulse"></div>
        <div className="inline-flex h-4 w-[290px] bg-cinza-skeleton rounded-full mb-3 animate-pulse"></div>
      </div>
    </div>
  );
};

export default SkeletonCards;
