import logout from "../images/logout.svg";
import { useNavigate } from 'react-router-dom';

function Header() {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-screen items-center px-10 py-5">
      <div>
        <h1>CabralBuster</h1>
      </div>
      <div className="flex items-center gap-x-5">
        <img src={user.image} alt="profileIcon" className="w-20 rounded object-cover" />
        <button>Meus dados</button>
        <button onClick={() => navigate('/users/movies')}>Meus filmes</button>
        <img src={logout} alt="logoutIcon" className="w-8" />
      </div>
    </div>
  );
}

export default Header;
