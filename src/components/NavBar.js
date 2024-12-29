import { useSelector } from "react-redux";

function NavBar() {
  const user = useSelector((state) => state?.user?.user);
  const show = user?.admin;
  return (
    <>
      {user && (
        <div className="navbar_container">
          <ul className="navbar_ul">
            <li className="navbar_li">
              <a href={`/acceuil/${user?.id}`} className="navbar_a">
                Accueil
              </a>
            </li>
            <li className="navbar_li">
              <a href={`/mon_profile/${user?.id}`} className="navbar_a">
                Mon Profile
              </a>
            </li>
            {show && (
              <li className="navbar_li">
                <a href="/list_des_utilisateurs" className="navbar_a">
                  Les Utilisateurs
                </a>
              </li>
            )}
            {show && (
              <li className="navbar_li">
                <a href="/ajouter_un_utilisateur" className="navbar_a">
                  Ajouter Un Utilisateur
                </a>
              </li>
            )}
            <li className="navbar_li">
              <a href="/modifier_mon_couleur" className="navbar_a">
                Modifier Le Couleur
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
