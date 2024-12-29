import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateColor } from "../slices/userSlice";
import { toast } from "react-toastify";

function ModifyColor() {
  const user = useSelector((state) => state.user?.user);
  const [newColor, setNewColor] = useState();
  const dispatch = useDispatch();

  const handleColor = async (e) => {
    e.preventDefault();
    try {
      if (!user) return;
      await axios.put(
        `https://675af48e9ce247eb19352d7d.mockapi.io/Stagiaire/users/${user?.id}`,
        { couleur: newColor }
      );
      dispatch(updateColor(newColor));
      alert("Color updated successfully!");
      toast.success(
        <p className="signup_toast">Couleur mise à jour avec succès! </p>
      );
    } catch (err) {
      toast.error(<p className="signup_toast">Quelque chose ne va pas!</p>);
    }
  };

  const userUnder = user?.age <= 15;
  return (
    <div className="modify_color">
      <h2 className="list_user_title">Modifier Mon Couleur</h2>
      <div className="modify_color_input">
        {userUnder ? (
          <h2 className="meassage_user_under">
            Vous ne pouvez pas changer de couleur préférée car vous avez moins
            de 15 ans
          </h2>
        ) : (
          <form>
            <select
              className="select"
              value={newColor}
              onChange={(e) => setNewColor(e.target.value)}>
              <option className="option" style={{ backgroundColor: "#d1d5db" }}>
                #d1d5db
              </option>
              <option className="option" style={{ backgroundColor: "#fca5a5" }}>
                #fca5a5
              </option>
              <option
                className="option"
                style={{ backgroundColor: " #fde047" }}>
                #fde047
              </option>
              <option className="option" style={{ backgroundColor: "#bfdbfe" }}>
                #bfdbfe
              </option>
              <option className="option" style={{ backgroundColor: "#fdba74" }}>
                #fdba74
              </option>
              <option className="option" style={{ backgroundColor: "#f9a8d4" }}>
                #f9a8d4
              </option>
              <option className="option" style={{ backgroundColor: "#d8b4fe" }}>
                #d8b4fe
              </option>
              <option className="option" style={{ backgroundColor: "#86efac" }}>
                #86efac
              </option>
              <option className="option" style={{ backgroundColor: "#f8fafc" }}>
                #f8fafc
              </option>
            </select>
            <button className="modify_color_btn" onClick={handleColor}>
              Modifier
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ModifyColor;
