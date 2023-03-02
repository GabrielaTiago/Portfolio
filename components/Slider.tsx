import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

type Props = {
  topics: string[];
};

export function Slider({ topics }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToItem = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <ul className="relative w-full text-[10px] md:text-[14px] xl:text-1lg list-disc">
      <li className="ml-5">{topics[currentIndex]}</li>
      <div className="w-full flex items-center justify-center py-2 ">
        {topics.map((_, index) => {
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
