import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
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
    setTimeout(() => {
      setSuccessMessage("Message sent successfully ✅");
      reset();
    }, 800);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // Contact Info Data
  const contactInfo = [
    {
      icon: <MdEmail />,
      label: "EMAIL",
      value: "vp1088124@gmail.com",
      link: "mailto:vp1088124@gmail.com",
    },
    {
      icon: <FaPhoneAlt/>,
      label: "PHONE",
      value: "+91 6391044971",
      link: "tel:+916391044971",
    },
    {
      icon: <FaSquareGithub />,
      label: "GITHUB",
      value: "github.com/VishalPatel63",
      link: "https://github.com/VishalPatel63",
    },
    {
      icon: <FaLinkedin />,
      label: "LINKEDIN",
      value: "linkedin.com/in/vishal-patel-03569925a/",
      link: "https://www.linkedin.com/in/vishal-patel-03569925a/",
    },
  ];

  return (
    <>
      {/* Success Toast */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 px-6 py-3 rounded-xl bg-transparent text-white font-medium shadow-xl z-50"
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-transparent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <p className="text-lg text-pure-greys-5 leading-relaxed">
                I'm currently looking for new opportunities in Software Enginneer , Software developer and full stack developer ,web developer . 
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="group flex items-center gap-4 bg-[#111827] hover:bg-transparent 
                           border border-white/10 rounded-2xl p-5 transition-all duration-300"
              >
                <div className="text-3xl text-pure-greys-5">{item.icon}</div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-pure-greys-5 mb-1">
                    {item.label}
                  </p>
                  <p className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#111827] border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>

            <form onSubmit={handleSubmit(createFormdata)} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-pure-greys-5 mb-2">NAME</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full bg-[#1f2937] border border-gray-600 focus:border-cyan-400 rounded-xl px-5 py-4 text-white placeholder-pure-greys-5 focus:outline-none transition"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">Name is required</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-pure-greys-5 mb-2">EMAIL</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full bg-[#1f2937] border border-gray-600 focus:border-cyan-400 rounded-xl px-5 py-4 text-white placeholder-pure-greys-5 focus:outline-none transition"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">Email is required</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-pure-greys-5 mb-2">SUBJECT</label>
                <input
                  type="text"
                  {...register("subject", { required: true })}
                  className="w-full bg-[#1f2937] border border-gray-600 focus:border-cyan-400 rounded-xl px-5 py-4 text-white placeholder-pure-greys-5 focus:outline-none transition"
                  placeholder="Subject"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">Subject is required</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-pure-greys-5 mb-2">MESSAGE</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full bg-[#1f2937] border border-gray-600 focus:border-cyan-400 rounded-2xl px-5 py-4 text-white placeholder-pure-greys-5 focus:outline-none transition resize-none"
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">Message is required</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-cyan-400 to-blue-600 
                           hover:from-cyan-300 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30"
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};
