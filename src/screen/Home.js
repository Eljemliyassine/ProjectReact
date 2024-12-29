import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
// import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

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
  // const user = useSelector((state) => state?.user?.user);
  // console.log(user);

  return (
    <>
      <div className="test">
        <button
          className="modify_user_detail"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/ajouter_description/${user?.id}`);
          }}>
          <FaEdit
            style={{ fontSize: "20px" }}
            title="Modifier les informations"
          />
          Ajouter un titre et un description
        </button>
      </div>
      <div className="home">
        <h1 className="home_text">
          Bienvenue{" "}
          <span className="home_span">
            {user?.prenom} {user?.nom}
          </span>
        </h1>
      </div>
      {user?.requests[0]?.status === "accepter" && (
        <div
          style={{
            width: "500px",
            height: "200px",
            margin: "0 auto",
          }}>
          <h1
            className="title_req"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "#be185d",
              marginBottom: "40px",
            }}>
            {user?.requests[0]?.title}
          </h1>
          <p
            className="desc_req"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {user?.requests[0]?.description}
          </p>
        </div>
      )}
    </>
  );
}

export default Home;
