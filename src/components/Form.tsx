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
        "service_okxr4vu",
        "template_y32qy06",
        templateKeys,
        "BziRpwGBWgGvU7URO"
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
      className=" w-fit mx-auto flex flex-col space-y-2"
    >
      <div className="flex flex-col gap-2 md:flex-row ">
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
        className="py-5 px-10 rounded-md text-lg text-gray-700 font-bold bg-[#34ebcd] hover:brightness-110 disabled:opacity-40"
      >
        Enviar
      </button>
    </form>
  );
}
