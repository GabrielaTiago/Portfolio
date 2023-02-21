import Image from "next/image";
import profile from "../../public/eu.jpeg";

export function Picture() {
  return (
    <Image
      className="w-32 h-32 mt-4 rounded-full object-cover"
      src={profile}
      alt="Gabriela, a woman with curly hair, wearing a pink jacket"
    />
  );
}
