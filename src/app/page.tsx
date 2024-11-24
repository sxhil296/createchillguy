"use client";

import Meme from "../components/meme";
import Customs from "../components/customs";
import { useState } from "react";

export default function Home() {
  const [solidBg, setSolidBg] = useState("#1F4529");

  const handleSolidBg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.target.value;
    setSolidBg(selectedColor);
  };
  return (
    <main className="flex gap-4 justify-center items-center min-h-[90vh] md:overflow-hidden">
      <Customs solidBg={solidBg} handleSolidBg={handleSolidBg} />
      <Meme solidBg={solidBg} />
    </main>
  );
}
