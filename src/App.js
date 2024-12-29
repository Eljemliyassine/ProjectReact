import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Main from "./components/Main";
import MainCountainerTwo from "./screen/MainCountainerTwo";
import MyProfile from "./screen/MyProfile";
import AddUser from "./screen/AddUser";
import ListUser from "./screen/ListUser";
import ModifyColor from "./screen/ModifyColor";
import UserDetail from "./screen/UserDetail";
import Home from "./screen/Home";
import ModifyInfoAdmin from "./screen/ModifyInfoAdmin";
import ModifierInfoUser from "./screen/ModifierInfoUser";
import AddDesc from "./screen/AddDesc";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index={true} path="/" element={<Login />} />
            <Route path="/creer_un_compte" element={<Signup />} />
            <Route path="/" element={<Main />}>
              <Route path="/" element={<MainCountainerTwo />}>
                <Route index={true} path="/acceuil/:id" element={<Home />} />
                <Route path="/mon_profile/:id" element={<MyProfile />} />
                <Route path="/list_des_utilisateurs" element={<ListUser />} />
                <Route path="/ajouter_un_utilisateur" element={<AddUser />} />
                <Route path="/modifier_mon_couleur" element={<ModifyColor />} />
                <Route
                  path="/detail_utilisateur/:id"
                  element={<UserDetail />}
                />
                <Route
                  path="/modifier_pour_admin/:id"
                  element={<ModifyInfoAdmin />}
                />
                <Route
                  path="/modifier_pour_User/:id"
                  element={<ModifierInfoUser />}
                />
                <Route path="/ajouter_description/:id" element={<AddDesc />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
