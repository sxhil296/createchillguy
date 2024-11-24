export default function Meme({ solidBg }: { solidBg: string }) {
  return (
    <div
      className="w-[400px] h-[400px] rounded-md shadow-md"
      style={{ backgroundColor: solidBg }}
    >
      hello
    </div>
  );
}
