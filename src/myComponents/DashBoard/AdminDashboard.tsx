
import { Home, Inbox,User2Icon,Package } from "lucide-react"; 
import { NavLink, Outlet } from "react-router-dom";
import React from "react";
const items = [
  {
    title: "Home",
    url: "/",
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: "Profile",
    url: "", 
    icon: <User2Icon className="w-5 h-5" />,
  },
  {
    title: "Users",
    url: "users", 
    icon: <User2Icon className="w-5 h-5" />,
  },
 
  {
    title: "Orders",
    url: "/dashboard/AdminOrder", 
    icon: <Inbox className="w-5 h-5" />,
  },
  {
    title: "Products",
    url: "/dashboard/AdminProduct", 
    icon: <Package className="w-5 h-5" />,
  },
  {
    title: "Create Products",
    url: "/dashboard/createProduct", 
    icon: <Package className="w-5 h-5" />,
  },
];
const AdminDashboard = () => {
    return (
       <div>
         <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-semibold mb-6">Admin Dashboard</h2>
        <ul>
          {items.map((item) => (
            <li key={item.title} className="mb-4">
              <NavLink
                to={item.url}
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
       </div>
    );
};

export default AdminDashboard;