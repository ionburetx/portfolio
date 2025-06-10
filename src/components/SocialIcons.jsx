import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 text-3xl text-white">
      <a href="https://instagram.com/ionburetx" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-tomato transition" />
      </a>
      <a href="https://github.com/ionburetx" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-tomato transition" />
      </a>
      <a href="https://linkedin.com/in/ion-burgoa-204156324" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-tomato transition" />
      </a>
    </div>
  );
};

export default SocialIcons;
