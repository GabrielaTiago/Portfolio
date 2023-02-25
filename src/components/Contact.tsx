import { FiSmartphone, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { Form } from "@/components";

export function Contact() {
  return (
    <div className="relative h-screen px-[3%] mx-auto flex flex-col items-center justify-evenly text-center md:text-left md:flex-row">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contato
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          Eu tenho extamente o que você precisa.{" "}
          <span className="underline decoration-[#34ebcd]/50">
            Vamos conversar.
          </span>
        </h4>

        <div className=" space-y-4">
          <div className="flex items-center justify-center space-x-5">
            <FiMail size={22} color="#34ebcd" />
            <p>gabrielatiagodearaujo@outlook.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <FiSmartphone size={22} color="#34ebcd" />
            <p>+55 (62) 99176-9161</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <IoLocationOutline size={22} color="#34ebcd" />
            <p>Brasília, DF ,Brasil</p>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
}
