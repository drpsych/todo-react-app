// src/components/Footer.jsx
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Todo React App. All rights reserved.</p>
      <nav>
        <a href="https://www.linkedin.com/in/brutoncole" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://www.github.com/drpsych" target="_blank">
          <FaGithub />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
