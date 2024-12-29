"use client";
import { Header } from "@/components/Header/header";
import { InputCard } from "@/components/Input-Card/input-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="input-card w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-8 border border-gray-400 shadow-lg rounded-md p-4 bg-white">
        <InputCard />
        <div className="border border-gray-600 border-width-2 mt-4 mx-6"></div>
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
          <p className="text-lg sm:text-2xl cursor-pointer">ans</p>
          <button
            onClick={() => {
              console.log("copied");
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600 transition"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
