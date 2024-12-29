import axios from "axios";
import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Signup() {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("");
  const [devise, setDevise] = useState("");
  const [pays, setPays] = useState("");
  const [image, setImage] = useState("");
  const [admin, setAdmin] = useState(false);
  // const [requests, setRequests] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  console.log(errors);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error(
        <p className="signup_toast">Incompatibilité de mot de passe</p>
      );
    }
    try {
      await axios.post(
        "https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users",
        {
          admin: admin,
          requests: [
            {
              title: "",
              description: "",
              status: "pending",
            },
          ],
          nom: nom,
          prenom: prenom,
          age: age,
          pseudo: username,
          motdepasse: password,
          mail: email,
          couleur: color,
          devise: devise,
          pays: pays,
          image: image,
        }
      );
      toast.success(
        <p className="signup_toast">
          Vous avez alors créé avec succès un compte
        </p>
      );
      navigate("/");
    } catch (err) {
      toast.error(<p className="signup_toast">Quelque chose ne va pas!</p>);
    }
  };

  const validatePassword = (password) => {
    const errorsList = [];

    if (!/[A-Z]/.test(password)) {
      errorsList.push("At least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errorsList.push("At least one lowercase letter");
    }
    if (!/\d/.test(password)) {
      errorsList.push("At least one number");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errorsList.push("At least one special character");
    }
    if (password.length < 8) {
      errorsList.push("At least 8 characters");
    }

    return errorsList;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setErrors(validatePassword(newPassword));
  };
  return (
    <div className="form_container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            placeholder="Nom"
            required
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Prénom"
            required
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Votre age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Saisir votre couleur"
            required
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Devise"
            required
            value={devise}
            onChange={(e) => setDevise(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Pays"
            required
            value={pays}
            onChange={(e) => setPays(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Image url"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <button className="login_btn">
            <MdAssignmentAdd className="login_signup_logo" />
            S'inscrire
          </button>
          <br />
          <div>
            <ul style={{ backgroundColor: "#fff" }}>
              {errors?.map((error, index) => (
                <li
                  key={index}
                  style={{
                    color: "red",
                    textAlign: "center",
                    listStyleType: "none",
                  }}>
                  {error}
                </li>
              ))}
            </ul>
            {errors?.length === 0 && password.length > 0 && (
              <p
                style={{
                  color: "green",
                  backgroundColor: "#fff",
                  textAlign: "center",
                }}>
                Password is valid!
              </p>
            )}
          </div>
          <p className="not_registred">
            Déjà inscrit?
            <Link className="create_account" to="/">
              S'inscrire
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
