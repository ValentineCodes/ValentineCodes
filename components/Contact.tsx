import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Input = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    window.location.href = `mailto:valentineorga@gmail.com?subject=${data.subject}&body=Hi, My name is ${data.name}. ${data.message} [${data.email}]`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-20">
        <h4 className="text-2xl md:text-3xl font-semibold text-center">
          What are you working on? Let's discuss
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#93e718] h-7 w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">+2348140715721</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#93e718] h-7 w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">Valentineorga@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#93e718] h-7 w-7 animate-pulse" />
            <p className="text-1xl md:text-2xl">Anambra, Nigeria</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 mx-auto w-[300px] md:w-fit"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="contactInput w-[146px] md:w-fit"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="contactInput w-[146px] md:w-fit"
              required
            />
          </div>

          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="contactInput"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            required
          />

          <button
            type="submit"
            className="bg-[#93e718] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
