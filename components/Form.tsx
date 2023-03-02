import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

type Data = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Form() {
  const [loading, setLoading] = useState(false);
  const { register, resetField, handleSubmit } = useForm<Data>();

  const onSubmit: SubmitHandler<Data> = async ({
    name,
    email,
    subject,
    message,
  }) => {
    setLoading(!loading);
    const templateKeys = {
      name,
      email,
      subject,
      message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateKeys,
        process.env.NEXT_PUBLIC_KEY
      );
      Swal.fire({
        icon: "success",
        title: "Email enviado com sucesso!",
        confirmButtonColor: "#32a889",
      });
    } catch (err: unknown) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err}`,
        confirmButtonColor: "#32a889",
      });
    } finally {
      resetField("name");
      resetField("email");
      resetField("subject");
      resetField("message");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-fit mx-auto flex flex-col space-y-1 xs:space-y-2"
    >
      <div className="flex flex-col gap-1 xs:gap-2 md:flex-row ">
        <input
          className="contactInput"
          type="text"
          placeholder="Nome"
          required
          {...register("name")}
        />
        <input
          className="contactInput"
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />
      </div>
      <input
        className="contactInput"
        type="text"
        placeholder="Assunto"
        required
        {...register("subject")}
      />
      <textarea
        className="contactInput"
        placeholder="Mensagem"
        required
        {...register("message")}
      />
      <button
        type="submit"
        disabled={loading}
        className="py-1 xss:py-2 md:py-5 px-10 rounded-md text-sm xs:text-lg text-gray-700 font-bold bg-[#32a889] hover:brightness-110 disabled:opacity-40"
      >
        Enviar
      </button>
    </form>
  );
}
