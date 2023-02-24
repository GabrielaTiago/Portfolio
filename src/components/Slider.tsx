import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

export function Slider() {
  const items = [
    { item: "coisinhas que aprendi1" },
    { item: "coisinhas que aprendi2" },
    { item: "coisinhas que aprendi3" },
    { item: "coisinhas que aprendi4" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToItem = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <ul className="relative w-full text-sm xl:text-lg list-disc">
      <li className="ml-5">{items[currentIndex].item}</li>
      <div className="w-full flex items-center justify-center py-2 ">
        {items.map((_, index) => {
          return (
            <div
              key={index}
              className="text-xl md:text-2xl cursor-pointer"
              onClick={() => goToItem(index)}
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </ul>
  );
}
