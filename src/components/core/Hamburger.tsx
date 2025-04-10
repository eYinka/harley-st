export default function Hamburger() {
  return (
    <span className="flex flex-col items-center cursor-pointer">
      <span className="w-4 h-0.5 bg-black block mb-1.5"></span>
      <span className="w-5 h-0.5 bg-black block mb-1.5"></span>
      <span className="w-4 h-0.5 bg-black block"></span>
    </span>
  );
}
