import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-richblack-800 text-richblack-50 py-6 mt-10">
      <div className=" mx-auto max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-white">Vishal's Portfolio</h1>
          <p className="mt-2 text-sm text-gray-400">
            Full Stack Developer | Passionate about Web & Machine Learning
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Vishal Patel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
