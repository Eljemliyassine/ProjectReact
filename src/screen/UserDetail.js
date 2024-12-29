import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

function UserDetail() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    handleUser();
  }, []);
  const handleUser = async () => {
    try {
      const res = await axios.get(
        "https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users"
      );
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const { id } = useParams();
  const user = users.find((user) => user.id === id);

  return (
    <div className="user_detail_container">
      <div className="test">
        <button
          className="modify_user_detail"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/modifier_pour_admin/${user?.id}`);
          }}>
          <FaEdit
            style={{ fontSize: "20px" }}
            title="Modifier les informations"
          />
        </button>
      </div>
      <div className="img_detail_name_container">
        <div className="img_detail_container">
          <img src={user?.image} alt={user?.nom} />
        </div>
        <div className="name_detail_container">
          <h4 className="name_detail_name">
            {user?.prenom} {user?.nom}, {user?.age}
          </h4>
        </div>
      </div>
      <div className="plus_detail_info_container">
        <div className="plus_detail_info">
          <table
            border="1"
            style={{
              width: "90%",
              margin: "0 auto",
              padding: "10px",
              borderCollapse: "collapse",
            }}>
            <tr>
              <th style={{ padding: "5px" }}>Id :</th>
              <td align="center">{user?.id}</td>
            </tr>
            <tr>
              <th style={{ padding: "5px" }}>Admin :</th>
              <td align="center">{user?.admin ? "true" : "false"}</td>
            </tr>
            <tr>
              <th style={{ padding: "5px" }}>Nom d'utilisateur :</th>
              <td align="center">{user?.pseudo}</td>
            </tr>
            <tr>
              <th style={{ padding: "5px" }}>E-mail :</th>
              <td align="center">{user?.email}</td>
            </tr>
            <tr>
              <th style={{ padding: "5px" }}>Mot de passe :</th>
              <td align="center">{user?.motdepasse}</td>
            </tr>
            <tr>
              <th style={{ padding: "5px" }}>Couleur :</th>
              <td align="center">{user?.couleur}</td>
            </tr>
            <tr>
              <th style={{ padding: "5px" }}>Devise :</th>
              <td align="center">{user?.devise}</td>
            </tr>
            <tr>
              <th style={{ padding: "5px" }}>Pays :</th>
              <td align="center">{user?.pays}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
