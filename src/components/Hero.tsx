
import { BackgroundCircles, Picture, Typewriter } from "../components";

export function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Picture />
      <div className="flex flex-col mt-4 gap-2 z-20">
        <h2 className="uppercase text-sm text-gray-500 tracking-[11px]">
          Desenvolvedora Web Fullstack JR
        </h2>
        <Typewriter />

      </div>
    </div>
  );
}
