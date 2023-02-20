import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export function Header({}: Props) {
  return (
    <header className="max-w-7xl mx-auto p-5 sticky top-0 flex flex-row justify-between z-20">
      <div className="flex flex-row items-center">
        <SocialIcon
          className="hover:brightness-125"
          url="https://github.com/GabrielaTiago"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:brightness-125"
          url="https://linkedin.com/in/gabrielatiago"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:brightness-125"
          url="https://instagram.com/gabstiago"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer hover:brightness-125"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:brightness-90">
          Entre em contato
        </p>
      </div>
    </header>
  );
}
