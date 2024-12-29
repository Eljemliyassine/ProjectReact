import axios from "axios";
import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddUser() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [color, setColor] = useState("");
  const [devise, setDevise] = useState("");
  const [pays, setPays] = useState("");
  const [image, setImage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error(
        <p className="signup_toast">Incompatibilité de mot de passe</p>
      );
      return;
    }
    try {
      await axios.post(
        "https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users",
        {
          nom: nom,
          prenom: prenom,
          age: age,
          pseudo: username,
          email: email,
          motdepasse: password,
          couleur: color,
          devise: devise,
          pays: pays,
          image: image,
          admin: isAdmin,
          requests: [
            {
              title: "",
              description: "",
              status: "pending",
            },
          ],
        }
      );
      toast.success(
        <p className="signup_toast">
          Vous avez alors créé avec succès un compte
        </p>
      );
      navigate("/list_des_utilisateurs");
    } catch (err) {
      toast.error(<p className="signup_toast">Quelque chose ne va pas!</p>);
    }
  };
  return (
    <div className="add_user">
      <h2 className="list_user_title">Ajouter Un Utilisateur</h2>
      <div className="form_container_add_user">
        <form className="form form_bg" onSubmit={handleSubmit}>
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Confirmez le mot de passe"
              required
              value={confirmPassword}
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                color: "#fff",
                gap: "10px",
              }}>
              <label style={{ fontSize: "15px" }}>Admin: </label>
              <input
                style={{ cursor: "pointer" }}
                type="checkbox"
                value={isAdmin}
                checked={isAdmin === true}
                onChange={() => setIsAdmin((admin) => !admin)}
              />
            </div>
            <button className="login_btn">
              <MdAssignmentAdd className="login_signup_logo" />
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
