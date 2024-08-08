// src/components/Footer.jsx
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Todo React App. All rights reserved.</p>
      <nav>
        <a href="https://www.linkedin.com/in/brutoncole">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/drspych">
          <FaGithub />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
