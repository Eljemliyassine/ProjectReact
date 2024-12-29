import { FaCheck, FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function ListUser() {
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

  const handleDetail = async (id) => {
    navigate(`/detail_utilisateur/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users/${id}`
      );
      setUsers(users.filter((user) => user.id !== id));
      alert("Es-tu sûr?");
      toast.success(
        <p className="signup_toast">
          Supprimez ensuite l'utilisateur avec succès
        </p>
      );
    } catch (error) {
      console.error(error);
    }
  };

  const xx = users[0]?.requests[0];

  const changeStatus = async (id, status) => {
    try {
      await axios.put(
        `https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users/${id}`,
        {
          requests: [{ ...xx, status }],
        }
      );
      toast.success(
        <p className="signup_toast">Status changer avec success "Accepter"</p>
      );
    } catch (err) {
      toast.error(<p className="signup_toast">Quelque chose ne va pas!</p>);
    }
  };
  const deleteReq = async (id, status) => {
    try {
      await axios.put(
        `https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users/${id}`,
        {
          requests: [{ ...xx, status }],
        }
      );
      toast.success(
        <p className="signup_toast">Status changer avec success "Refuser"</p>
      );
    } catch (err) {
      toast.error(<p className="signup_toast">Quelque chose ne va pas!</p>);
    }
  };

  const user_length = users.length;

  return (
    <div className="list_user">
      <h2 className="list_user_title">
        Liste des utilisateurs ({user_length})
      </h2>
      <table className="table" border="1">
        <tr>
          <th className="th">Id</th>
          <th className="th">Prénom</th>
          <th className="th">Nom</th>
          <th className="th">Age</th>
          <th className="th">Nom d'utilisateur</th>
          <th className="th">E-mail</th>
          <th className="th">Admin</th>
          <th className="th">#</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td className="td_container">
              <div className="td">{user?.id}</div>
            </td>
            <td className="td_container">
              <div className="td">{user?.prenom}</div>
            </td>
            <td className="td_container">
              <div className="td">{user?.nom}</div>
            </td>
            <td className="td_container">
              <div className="td">{user?.age}</div>
            </td>
            <td className="td_container">
              <div className="td">{user?.pseudo}</div>
            </td>
            <td className="td_container">
              <div className="td">{user?.email}</div>
            </td>
            <td className="td_container">
              <div className="td">
                {user?.admin ? (
                  <FaCheck style={{ color: "green" }} />
                ) : (
                  <TiDeleteOutline style={{ color: "red" }} />
                )}
              </div>
            </td>
            <td className="td btn">
              <button className="user_btn_table">
                <FaUser
                  className="view"
                  title="Voir ce compte"
                  onClick={() => handleDetail(user?.id)}
                />
              </button>
              <button className="user_btn_table">
                <MdDelete
                  className="del"
                  title="Supprimer l'utilisateur"
                  onClick={() => handleDelete(user?.id)}
                />
              </button>
            </td>
          </tr>
        ))}
      </table>
      <h2 className="list_user_title">Les demandes</h2>
      <table className="table" border="1">
        <tr>
          <th className="th">ID</th>
          <th className="th">Titre</th>
          <th className="th">Description</th>
          <th className="th">Statut</th>
          <th className="th">Decision</th>
        </tr>
        {users.map(
          (user) =>
            user?.requests[0]?.title && (
              <tr>
                <td className="td_container">
                  <div className="td">{user?.id}</div>
                </td>
                <td className="td_container">
                  <div className="td">{user?.requests[0]?.title}</div>
                </td>
                <td className="td_container">
                  <div
                    className="td"
                    style={{ textAlign: "center", width: "400px" }}>
                    {user?.requests[0]?.description}
                  </div>
                </td>
                <td className="td_container">
                  <div
                    className="td"
                    style={
                      user?.requests[0].status === "pending"
                        ? { color: "orange" }
                        : user?.requests[0].status === "accepter"
                        ? { color: "green" }
                        : { color: "red" }
                    }>
                    {user?.requests[0].status}
                  </div>
                </td>
                <td className="td btn">
                  <button className="user_btn_table">
                    <FaCheck
                      className="view"
                      title="accepter"
                      onClick={() => changeStatus(user?.id, "accepter")}
                    />
                  </button>

                  <button className="user_btn_table">
                    <MdDelete
                      className="del"
                      title="refuser"
                      onClick={() => deleteReq(user?.id, "refuser")}
                    />
                  </button>
                </td>
              </tr>
            )
        )}
      </table>
    </div>
  );
}

export default ListUser;
