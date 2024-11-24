import Meme from "@/components/meme";
import Customs from "../components/customs";

export default function Home() {
  return (
    <main className="flex gap-4 justify-center items-center min-h-[90vh] md:overflow-hidden">
      <Customs />
      <Meme />
    </main>
  );
}
