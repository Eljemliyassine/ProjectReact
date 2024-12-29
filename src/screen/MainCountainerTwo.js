import { Outlet } from "react-router-dom";

function MainCountainerTwo() {
  return (
    <div className="main_container_two">
      {/* <ListUser /> */}
      {/* <MyProfile /> */}
      {/* <AddUser /> */}
      <Outlet />
    </div>
  );
}

export default MainCountainerTwo;
