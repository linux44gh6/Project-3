import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import Profile from "@/myComponents/DashBoard/UserDashBoard/Profile";
import AdminProfile from "@/myComponents/DashBoard/AdminDashBoard/AdminProfile";

const ProtectedProfile = () => {
  const user = useSelector((state: RootState) => state.auth.user) as { userRole: string } | null;
  const role = user?.userRole
  return role === "admin" ? <AdminProfile /> : <Profile />;
};

export default ProtectedProfile;
