import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";
import Sucesso from "../Sucesso";
import Error from "../Error";
import "./contato.css";
export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  // botao
  // carregando
  const [loading, setLoading] = useState(false);
  // sucesso
  const [success, setSuccess] = useState(false);
  // error
  const [error, setError] = useState(false);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_j72sp18",
        "template_n3ltznv",
        form.current,
        "-UjOEThCmDQW5AsGt"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <section
      className="flex min-h-full flex-1 flex-col justify-center  pt-24 lg:px-8 md:pt-11 lg:pt-24 "
      id="contato"
    >
      <div className="relative  text-center ">
        <h2 className="   font-light text-green-800  font-handwriting text-4xl">
        Contato
        </h2>
     
        <div className="
       absolute left-32 top-0 z-0  h-10 w-44 rounded-lg bg-green-600/10 lg:left-1/3   md:ml-40 xl:ml-32 
        " />
          {/* <div className="absolute left-24 top-0 z-0  h-10 w-52 rounded-lg bg-green-600/10 lg:ml-28  md:ml-28   " /> */}
      </div>

      {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> */}
      <div className="py-10 px-5">
        <form ref={form} onSubmit={sendEmail}>
          <div className=" flex flex-col md:flex-row">
            <div className="basis-1/2  md:mr-10">
              <label
                htmlFor="nome"
                className=" font-medium font-headline text-green-900 mt-3"
              >
                Nome:
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Digite Seu Nome aqui"
                className="mb-5 mt-2  w-full rounded-lg border p-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="  basis-1/2">
              <label
                htmlFor="email"
                className="font-medium font-headline text-green-700 mt-3"
              >
                Email:
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mb-5 mt-2  w-full rounded-lg border p-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                placeholder="Digite Seu Email aqui"
              />
            </div>
          </div>

          <input
            id="assunto"
            name="assunto"
            type="text"
            required
            placeholder="Assunto"
            className="mb-5 mt-2  w-full rounded-lg border p-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
          />

          <label
            htmlFor="messagem"
            className=" font-medium font-headline text-green-900 mt-3"
          >
            Mensagem:
          </label>

          <textarea
            id="messagem"
            name="messagem"
            placeholder="Deixe sua mensagem aqui"
            required
            className="mb-5 mt-2 h-36 w-full rounded-lg border p-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
          />
          {success && <Sucesso />}

          <div>
            <button
              type="submit"
              className="btn w-full hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={loading}
            >
              {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
              Enviar mensagem
            </button>

            {error && <Error />}
          </div>
        </form>
      </div>
    </section>
  );
}
