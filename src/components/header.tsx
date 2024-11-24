import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTwitterXLine } from "react-icons/ri";
import { VscCoffee } from "react-icons/vsc";

export default function Header() {
  const formatTime = (date: Date): string => {
    return date.toLocaleString("en-US", {
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <header className="h-[70px] px-8 py-2 flex justify-between items-center top-6 mb-4">
      <h1>{formatTime(new Date(Date.now()))}</h1>
      <div className="flex justify-center items-center gap-4">
        <Link href={""}>
          <VscGithubAlt />
        </Link>
        <Link href={""}>
          <RiTwitterXLine />
        </Link>
        <Link href={""}>
          <VscCoffee />
        </Link>
      </div>
    </header>
  );
}
