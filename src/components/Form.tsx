export function Form() {
  return (
    <form className=" w-fit mx-auto flex flex-col space-y-2">
      <div className="flex flex-col gap-2 md:flex-row ">
        <input className="contactInput" type="text" placeholder="Nome" />
        <input className="contactInput" type="email" placeholder="Email" />
      </div>
      <input className="contactInput" type="text" placeholder="Assunto" />
      <textarea className="contactInput" placeholder="Mensagem" />
      <button className="py-5 px-10 rounded-md text-lg text-gray-700 font-bold bg-[#34ebcd] hover:brightness-110">
        Enviar
      </button>
    </form>
  );
}
