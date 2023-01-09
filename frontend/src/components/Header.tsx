import logout from "../images/logout.svg";
import logo from "../images/logo-cabralbuster.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const navigate = useNavigate();

  function userLogout() {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <div className="flex bg-sky-900 ring-2 ring-white justify-between w-screen items-center px-20 py-8">
      <button
        onClick={() => navigate("/movies")}
        className="hover:opacity-80"
      >
        <img src={logo} className="max-h-20 object-cover" />
      </button>
      <div className="flex items-center gap-x-10">
        <img
          src={user.image}
          alt="profileIcon"
          className="inline-block h-12 w-12 ring-1 rounded-full ring-white object-cover"
        />
        <button
          onClick={() => navigate("/users/movies")}
          className="w-full py-2 px-5 rounded text-sky-900 font-bold text-md font-mono bg-amber-500 hover:bg-amber-700"
        >
          Meus filmes
        </button>
        <img onClick={() => userLogout()} src={logout} alt="logoutIcon" className="w-10 fill-amber-500 cursor-pointer hover:opacity-80" />
      </div>
    </div>
  );
}

export default Header;
