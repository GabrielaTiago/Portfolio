export function Skill() {
  return (
    <div className="relative flex cursor-pointer hover:group group max-w-[50px] max-h-[50px] md:max-w-[100px] md:max-h-[100px]">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        alt="icon"
        className="w-full h-full rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute w-full h-full rounded-full opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white z-0 flex items-center justify-center">
        <p className="text-sm font-bold text-gray-700 opacity-100">100%</p>
      </div>
    </div>
  );
}
