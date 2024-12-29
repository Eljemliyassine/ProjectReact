import { RiLogoutBoxLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";
import { toast } from "react-toastify";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout());
    toast.success(
      <p className="signup_toast">Vous êtes ensuite déconnecté avec succès</p>
    );
    navigate("/");
  };
  return (
    <div className="header_container">
      <div className="logo_container">
        <img
          src="../logo192.png"
          alt="logo"
          onClick={(e) => {
            e.preventDefault();
            navigate("/acceuil");
          }}
        />
      </div>
      <div className="user_info_container">
        {user && (
          <div className="name_container">
            Bienvenue,
            <span
              className="name"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/mon_profile/${user?.id}`);
              }}>
              <FaUser />
              {user?.prenom} {user?.nom}
            </span>
            <button className="logout_btn" onClick={handleLogout}>
              <RiLogoutBoxLine className="login_signup_logo" />
              Se déconnecter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
