import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

export const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");

  const createFormdata = async (data) => {
    console.log(data);
    // Simulate API send
    setTimeout(() => {
      setSuccessMessage("Message sent successfully ✅");
    }, 300);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000); // hide after 3s
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const fields = ["name", "email", "subject", "message"];

  return (
    <>
      {/* Success Toast */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 right-6 px-5 py-3 rounded-lg bg-green-600 text-white font-semibold shadow-lg z-50"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col justify-center items-center mx-auto w-11/12 max-w-maxContent mt-14 p-5 rounded-lg border border-gray-500/30 
        bg-richblack-800 backdrop-blur-xl shadow-lg"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center sm:text-left bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-richblack-50 text-center sm:text-left"
        >
          Questions, thoughts, or just want to say hello?
        </motion.h3>

        {/* Form */}
        <div className="w-full flex justify-center mt-8">
          <motion.form
            onSubmit={handleSubmit(createFormdata)}
            className="w-full sm:w-[60%] space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {fields.map((field, idx) => (
              <div key={idx} className="relative">
                {field !== "message" ? (
                  <motion.input
                    id={field}
                    className="peer w-full bg-transparent border border-gray-400/40 p-3 pt-5 rounded-lg 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-transparent"
                    type={field === "email" ? "email" : "text"}
                    placeholder="Enter your value"
                    {...register(field, { required: true })}
                  />
                ) : (
                  <motion.textarea
                    id={field}
                    className="peer w-full bg-transparent border border-gray-400/40 p-3 pt-5 rounded-lg min-h-[120px]
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-transparent resize-none"
                    placeholder="Enter your value"
                    {...register(field, { required: true })}
                  />
                )}
                <label
                  htmlFor={field}
                  className="absolute left-3 top-1 text-gray-400 text-xs transition-all
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-400"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {errors[field] && (
                  <span className="text-sm text-red-400">
                    Please enter your {field}
                  </span>
                )}
              </div>
            ))}

            {/* Submit Button */}
            <motion.div className="flex justify-center">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(90, 24, 154, 0.7)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-[160px] text-center font-semibold border border-gray-400 px-4 py-3 text-[16px] cursor-pointer rounded-lg shadow-lg 
                bg-gradient-to-r from-[#5A189A] to-[#1E3A8A] text-white hover:shadow-purple-900/50"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};
