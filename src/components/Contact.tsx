import { use } from "react";
import { FiSmartphone, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { Form } from "@/components";
import { PageInfo } from "@/Interfaces/sanityInterfaces";
import { fetchPageInfo } from "@/utils";

export function Contact() {
  const {
    props: { pageInfo },
  } = use(getPageInfoData());

  const { address, email, phoneNumber } = pageInfo;

  return (
    <div className="relative h-screen p-[3%] mx-auto flex flex-col items-center justify-evenly text-center md:text-left md:flex-row">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contato
      </h3>

      <div className="pt-[35%] xss:pt-0 flex flex-col space-y-3 xss:space-y-10">
        <h4 className="text-sm xss:text-2xl md:text-4xl font-semibold text-center">
          Eu tenho extamente o que você precisa.{" "}
          <span className="underline decoration-[#32a889]/50">
            Vamos conversar.
          </span>
        </h4>

        <div className="space-y-1 xss:space-y-4">
          <div className="flex items-center justify-center space-x-2 xs:space-x-5 text-[13px] xss:text-lg">
            <FiMail size={22} color="#32a889" />
            <p>{email}</p>
          </div>
          <div className="flex items-center justify-center space-x-2 xs:space-x-5 text-[13px] xss:text-lg">
            <FiSmartphone size={22} color="#32a889" />
            <p>{phoneNumber}</p>
          </div>
          <div className="flex items-center justify-center space-x-2 xs:space-x-5 text-[13px] xss:text-lg">
            <IoLocationOutline size={22} color="#32a889" />
            <p>{address}</p>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
}

async function getPageInfoData() {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: { pageInfo },
  };
}
