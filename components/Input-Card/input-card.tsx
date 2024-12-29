import { Input } from "@/components/input";
import { useState } from "react";

export const InputCard = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <div>
        <form method="post" className="flex flex-col sm:flex-row items-center gap-2">
          <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant="outline"
            size="md"
            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
          />
          <button
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded-md disabled:opacity-50 hover:bg-gray-600 transition"
            disabled={value === ""}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
