import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 text-3xl text-white">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-tomato transition" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-tomato transition" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-tomato transition" />
      </a>
    </div>
  );
};

export default SocialIcons;
