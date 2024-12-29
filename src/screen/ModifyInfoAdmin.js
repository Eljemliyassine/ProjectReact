import axios from "axios";
import { useEffect, useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ModifyInfoAdmin() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    handleUser();
  }, []);
  const handleUser = async () => {
    try {
      const res = await axios.get(
        `https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users/`
      );
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const { id } = useParams();
  const user = users.find((user) => user.id === id);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const [devise, setDevise] = useState("");
  const [pays, setPays] = useState("");
  const [image, setImage] = useState("");
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (user) {
      setNom(user?.nom);
      setPrenom(user?.prenom);
      setAge(user?.age);
      setUsername(user?.pseudo);
      setColor(user?.couleur);
      setDevise(user?.devise);
      setEmail(user?.email);
      setPassword(user?.motdepasse);
      setPays(user?.pays);
      setImage(user?.image);
      setAdmin(user?.admin);
    }
  }, [user]);

  const handleModify = async (e) => {
    e.preventDefault();
    if (!user) return;
    try {
      await axios.put(
        `https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users/${user?.id}`,
        {
          nom: nom,
          prenom: prenom,
          age: age,
          pseudo: username,
          couleur: color,
          devise: devise,
          email: email,
          motdepasse: password,
          pays: pays,
          image: image,
          admin: admin,
        }
      );
      navigate("/list_des_utilisateurs");
      toast.success(
        <p className="signup_toast">
          Les informations mise à jour avec succès!
        </p>
      );
    } catch (err) {
      toast.error(<p className="signup_toast">Quelque chose ne va pas!</p>);
    }
  };
  return (
    <>
      <h2 className="list_user_title">
        Modifier les informations (Id : {user?.id})
      </h2>
      <div className="form_container">
        <form className="form form_bg">
          <div className="input_container">
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="Votre age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Saisir votre couleur"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Devise"
              value={devise}
              onChange={(e) => setDevise(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Pays"
              value={pays}
              onChange={(e) => setPays(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Image url"
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
                value={admin}
                checked={admin === true}
                onChange={() => setAdmin((admin) => !admin)}
              />
            </div>
            <button className="login_btn" onClick={handleModify}>
              <MdAssignmentAdd className="login_signup_logo" />
              Modifier
            </button>
            <br />
          </div>
        </form>
      </div>
    </>
  );
}

export default ModifyInfoAdmin;
