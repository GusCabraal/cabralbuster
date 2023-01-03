import logout from "../images/logout.svg";
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
    <div className="flex bg-sky-900 ring-2 justify-between w-screen items-center px-20 py-8">
      <button
        onClick={() => navigate("/movies")}
        className="border-4 rounded-lg border-amber-500"
      >
        <h1 className="text-4xl text-center tracking-tighter text-amber-500 font-mono font-black p-4">
          CabralBuster
        </h1>
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
        <img onClick={() => userLogout()} src={logout} alt="logoutIcon" className="w-10 " />
      </div>
    </div>
  );
}

export default Header;
