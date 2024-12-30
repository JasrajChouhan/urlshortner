"use client";
import { Header } from "@/components/Header/header";
import { InputCard } from "@/components/Input-Card/input-card";
import { useState } from "react";

export default function Home() {

  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [shortId, setShortId] = useState('');

  const hanldeShortUrlClick = async () => {
    console.log(shortId);

    try {
      if (!shortId) {
        alert("Invalid URL");
        return;
      }
      const response = await fetch(
        `/api/${shortId}`,
        {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          },
          mode: "no-cors"
        }
      )
      console.log(response)

      if (response.ok) {
        const data = await response.json();
        setShortUrl(data.shortUrl);
        window.location.href = data.shortUrl
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="input-card w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-8 border border-gray-400 shadow-lg rounded-md p-4 bg-white">
        <InputCard
          longUrl={longUrl}
          setLongUrl={setLongUrl}
          setShortUrl={setShortUrl}
          setShortId={setShortId}
        />
        <div className="border border-gray-600 border-width-2 mt-4 mx-6"></div>
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
          {
            shortUrl && (
              <p
                className="text-lg sm:text-2xl cursor-pointer border border-gray-300 rounded-md p-2"
                // onClick={hanldeShortUrlClick}
                onClick={() => window.location.href = `${window.location.origin}/api/${shortId}`}
              >
                {window.location.origin}/api/{shortId}
              </p>
            )
          }

          {
            shortUrl && (
              <button
                onClick={() => {
                  window.navigator.clipboard.writeText(`${window.location.origin}/api/${shortId}`);
                  alert("Copied to clipboard");
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600 transition"
              >
                Copy
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}
