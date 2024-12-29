import MainCountainerTwo from "../screen/MainCountainerTwo";
import { useSelector } from "react-redux";

function Main() {
  const user = useSelector((state) => state.user?.user);
  const show = user?.admin;
  return (
    <div className="main" style={{ backgroundColor: user?.couleur }}>
      <div className="main_container_one">
        <ul className="ul_main">
          <li className="li_main">
            <a href={`/acceuil/${user?.id}`} className="a_main">
              Accueil
            </a>
          </li>
          <li className="li_main">
            <a href={`/mon_profile/${user?.id}`} className="a_main">
              Mon Profile
            </a>
          </li>
          {show && (
            <li className="li_main">
              <a href="/list_des_utilisateurs" className="a_main">
                Les Utilisateurs
              </a>
            </li>
          )}
          {show && (
            <li className="li_main">
              <a href="/ajouter_un_utilisateur" className="a_main">
                Ajouter Un Utilisateur
              </a>
            </li>
          )}
          <li className="li_main">
            <a href="/modifier_mon_couleur" className="a_main">
              Modifier Le Couleur
            </a>
          </li>
        </ul>
      </div>
      <MainCountainerTwo />
    </div>
  );
}

export default Main;
