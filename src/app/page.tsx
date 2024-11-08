import React from "react";
import Header from "./components/Header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%] ">
        <div className=" w-1/2 flex flex-col top-[316px] justify-center items-start m-12">
          <h1 className="text-[44px]   font-bold">IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[32px] w-auto">
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] py-[10px] gap-10 w-[200px] rounded-[10px] text-[30px] h-[58px] flex items-center justify-center font-medium text-[#FFFFFF] ">Explore Now</button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={"/figma.png"}
            alt="hero image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;