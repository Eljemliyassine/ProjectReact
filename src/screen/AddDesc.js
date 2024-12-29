import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AddDesc() {
  const [titre, setTitre] = useState("");
  const [desc, setDesc] = useState("");

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
  //   const xx = user?.requests[0];
  const handleReq = async (id, status) => {
    try {
      await axios.put(
        `https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users/${id}`,
        {
          requests: [{ title: titre, description: desc, status }],
        }
      );
      navigate(`/acceuil`);
      toast.success(
        <p className="signup_toast">la description est ajouter avec succes</p>
      );

      setTitre("");
      setDesc("");
    } catch (err) {
      toast.error(<p className="signup_toast">Quelque chose ne va pas!</p>);
    }
  };
  return (
    <div className="add_desc">
      <h2 className="list_user_title">Add a New Request</h2>
      <input
        type="text"
        placeholder="titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <textarea
        placeholder="Description"
        style={{
          outline: "none",
          marginTop: "30px",
          padding: "20px ",
          width: "100%",
          height: "300px",
        }}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <button
        className="login_btn"
        onClick={() => handleReq(user?.id, "pending")}>
        Submit Request
      </button>
    </div>
  );
}

export default AddDesc;
