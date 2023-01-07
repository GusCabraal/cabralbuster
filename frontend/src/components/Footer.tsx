import github from "../images/github_logo.png";
import linkedin from "../images/linkedin_logo.png";
import { useNavigate } from 'react-router-dom';

function Footer() {

  return (
    <div className="relative bottom-0 flex justify-center w-screen items-center px-10 py-10 mt-10 bg-sky-900 ring-2">
      <div className="flex items-center gap-x-20">
        <a href="https://github.com/GusCabraal" target="_blank">
          <img src={github} alt="github_icon" className="w-10 rounded object-cover" />
        </a>
        <a href="https://www.linkedin.com/in/guscabraal/" target="_blank">
          <img src={linkedin} alt="linkedin_icon" className="w-10" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
