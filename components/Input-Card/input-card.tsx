import { Input } from "@/components/input";
import { useState } from "react";

export const InputCard = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/shortner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();
      if (response.ok) {
        setShortUrl(data.shortUrl);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <form
          method="post" 
          className="flex flex-col sm:flex-row items-center gap-2"
          onSubmit={handleSubmit}
          >
          <Input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            variant="outline"
            size="md"
            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
          />
          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded-md disabled:opacity-50 hover:bg-gray-600 transition"
            disabled={longUrl === ""}
          >
            Submit
          </button>
        </form>
      </div>

      {shortUrl && (
        <div>
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};
