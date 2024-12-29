import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
function MyProfile() {
  // const user = useSelector((state) => state.user?.user);

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("pending");
  useEffect(() => {
    handleUser();
  }, []);
  const handleUser = async () => {
    try {
      const res = await axios.get(
        "https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users/"
      );
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  const { id } = useParams();
  const user = users.find((user) => user.id === id);

  const deleteReq = async (id) => {
    try {
      await axios.put(
        `https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users/${id}`,
        {
          requests: [{ title: title, description: desc, status: status }],
        }
      );
      toast.success(
        <p className="signup_toast">Votre demande et annuler avec suces</p>
      );
    } catch (err) {
      toast.error(<p className="signup_toast">Quelque chose ne va pas!</p>);
    }
  };
  return (
    <>
      <div className="test">
        <button
          className="modify_user_detail"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/modifier_pour_user/${user?.id}`);
          }}>
          <FaEdit
            style={{ fontSize: "20px" }}
            title="Modifier les informations"
          />
          Modifier mes informations
        </button>
      </div>
      <div className="my_profile">
        <h2 className="list_user_title">Mon Profile</h2>
        <div className="pic_name_container">
          <div className="pic_container">
            <img src={user?.image} alt={user?.nom} />
          </div>
          <div className="name_profile_container">
            <h4 className="name_profile">
              {user?.nom} {user?.prenom}, {user?.age}
            </h4>
          </div>
        </div>
        <table border="1" className="table_my_profile">
          <tr>
            <th className="th_my_profile">Identifiant</th>
            <th className="th_my_profile">Nom d'utilisateur</th>
            <th className="th_my_profile">E-mail</th>
            <th className="th_my_profile">Pays</th>
            <th className="th_my_profile">Couleur</th>
            <th className="th_my_profile">Devise</th>
          </tr>
          <tr>
            <td className="td_my_profile_container">
              <div className="td_my_profile">{user?.id}</div>
            </td>
            <td className="td_my_profile_container">
              <div className="td_my_profile">{user?.pseudo}</div>
            </td>
            <td className="td_my_profile_container">
              <div className="td_my_profile">{user?.email}</div>
            </td>
            <td className="td_my_profile_container">
              <div className="td_my_profile">{user?.pays}</div>
            </td>
            <td className="td_my_profile_container">
              <div className="td_my_profile">{user?.couleur}</div>
            </td>
            <td className="td_my_profile_container">
              <div className="td_my_profile">{user?.devise}</div>
            </td>
          </tr>
        </table>
        <h2 className="list_user_title">Mes demandes</h2>
        <table className="table" border="1">
          <tr>
            <th className="th">ID</th>
            <th className="th">Titre</th>
            <th className="th">Description</th>
            <th className="th">Statut</th>
            <th className="th">#</th>
          </tr>

          {users[0]?.requests[0].title && (
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
                  style={{ textAlign: "center", width: "300px" }}>
                  {user?.requests[0]?.description}
                </div>
              </td>
              <td className="td_container">
                <div
                  className="td"
                  style={
                    user?.requests[0]?.status === "pending"
                      ? { color: "orange" }
                      : user?.requests[0]?.status === "accepter"
                      ? { color: "green" }
                      : { color: "red" }
                  }>
                  {user?.requests[0]?.status}
                </div>
              </td>
              <td className="td btn">
                <button className="user_btn_table">
                  <MdDelete
                    className="del"
                    title="refuser"
                    onClick={() => deleteReq(user?.id)}
                  />
                </button>
              </td>
            </tr>
          )}
        </table>
      </div>
    </>
  );
}

export default MyProfile;
