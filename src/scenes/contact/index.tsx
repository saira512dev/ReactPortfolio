// src/scenes/contact/index.tsx
import { SelectedPage } from "@/shared/types";
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Contact({ setSelectedPage }: Props) {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    const isValid = await trigger();
    if (!isValid) return;

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/638638d47b67c85bbccd999e3f84fca1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setShowSuccess(true);
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="py-10
    bg-secondary
    dark:bg-background    
    shadow 
    px-2 "
    >
      <motion.div
        onViewportEnter={() => setSelectedPage("contact" as SelectedPage)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <motion.h2
          className="text-3xl text-center font-bold text-primary mb-10 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>
      </motion.div>

      <div className="flex justify-center items-center px-2 sm:px-4 md:px-0 py-10 md:py-10">
        <motion.div
          className="w-full max-w-md md:max-w-2xl lg:max-w-3xl bg-white dark:bg-card-dark rounded-xl shadow-lg pl-4 pr-4 py-8 sm:p-6 md:p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 100 })}
                className="w-full pl-10 pr-4 py-5 rounded-lg bg-gray-100 dark:bg-background text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
            </div>

            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="w-full pl-10 pr-4 py-5 rounded-lg bg-gray-100 dark:bg-background text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid Email Address."}
                </p>
              )}
            </div>

            <div className="relative">
              <MessageSquare className="absolute top-3 left-3 text-gray-400" />
              <textarea
                rows={4}
                placeholder="Your message"
                {...register("message", {
                  required: true,
                  maxLength: 1000,
                })}
                className="w-full pl-10 pr-4 py-8 rounded-lg bg-gray-100 dark:bg-background text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 1000 characters."}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-600 transition duration-300"
            >
              Submit
            </button>

            {showSuccess && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="relative w-[90%] max-w-sm md:max-w-md bg-white dark:bg-card-dark rounded-2xl shadow-xl p-6 md:p-8 text-center">
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                  <div className="text-green-600 text-2xl mb-2">🎉</div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    Thank you!
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Your message has been sent successfully. I’ll get back to
                    you soon.
                  </p>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
