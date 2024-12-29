"use client";
import { Header } from "@/components/Header/header";
import { Input } from "@/components/input";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("hello world");
  return (
    <div>

      <Header />
      <div className="flex justify-center items-center mx-auto  min-h-screen" >
        <div >

          <Input
            type="text"
            value={value}
            onChange={(e) => { setValue(e.target.value) }}
            variant="outline"
            size="md"
            className="w-1/2"
          />

        </div>


        <UserButton />
        hello world</div>

    </div>
  )
}