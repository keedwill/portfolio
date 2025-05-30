import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex-shrink-0  flex items-center">
        <a href="/" aria-label="Home" className="text-2xl font-bold ">
          PO
        </a>
      </div>

      <div className="flex items-center justify-center m-8 gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/princewill-owoh-201745131/"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-cyan-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/keedwill"
          aria-label="Github"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-cyan-400"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
