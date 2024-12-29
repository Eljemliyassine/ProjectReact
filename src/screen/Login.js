import axios from "axios";
import { useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../slices/userSlice";
import { toast } from "react-toastify";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState([]);
  const [tentative, setTentative] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users?pseudo=${username}&motdepasse=${password}`
      );
      const user = res.data[0];
      dispatch(login(user));
      if (user) {
        toast.success(
          <p className="signup_toast">Vous êtes alors connecté avec succès </p>
        );
        navigate(`/acceuil/${user?.id}`);
      }
    } catch (err) {
      toast.error(
        <p className="signup_toast">
          Nom d'utilisateur ou mot de passe incorrect
        </p>
      );
      setError([...error, err.message]);
      setTentative(tentative + 1);
    }
  };
  return (
    <div className="form_container special">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="login_btn" disabled={tentative >= 3}>
            <IoIosLogIn className="login_signup_logo" />
            Se connecter
          </button>
          <br />
          {tentative >= 3 && (
            <p className="message">
              Vous avez été bloqué après 3 tentatives infructueuses.
            </p>
          )}
          <div className="error_list_container">
            <ul className="list" style={{ color: "red" }}>
              {error.map((err, i) => (
                <li className="error_list" key={i}>
                  {err}
                </li>
              ))}
            </ul>
          </div>
          <p className="not_registred">
            Pas encore inscrit ?
            <Link className="create_account" to="/creer_un_compte">
              Créer un compte
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
