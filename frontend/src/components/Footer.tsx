import github from "../images/github_logo.png";
import linkedin from "../images/linkedin_logo.png";
import { useNavigate } from 'react-router-dom';

function Footer() {

  return (
    <div className="flex justify-center w-screen items-center px-10 py-5 bg-gray-200">
      <div className="flex items-center gap-x-20">
        <img src={github} alt="github_icon" className="w-10 rounded object-cover" />
        <img src={linkedin} alt="linkedin_icon" className="w-10" />
      </div>
    </div>
  );
}

export default Footer;
