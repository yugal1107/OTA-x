import { useContext } from "react";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import { UserContext } from "./UserContext";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import DriverDashboard from "./DriverDashboard";

export default function Routes() {
  const { username, id, role } = useContext(UserContext);

  if (username) {
    if (role === 'admin') {
      return <AdminDashboard />;
    }else if(role === 'driver'){
      return <DriverDashboard />;
    }else {
      return <UserDashboard />;
    }
  }

  return <RegisterAndLoginForm />;
}
