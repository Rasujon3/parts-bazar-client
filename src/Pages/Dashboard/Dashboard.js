import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "./../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl font-bold text-purple-500">
          Welcome to Your Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {user && !admin && (
            <>
              <li>
                <Link to="/dashboard">My Appointments</Link>
              </li>
              <li>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addAReview">Add A Review</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/updateProfile">Update Profile</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">Add a Doctor</Link>
              </li>
              <li>
                <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
              </li>
              {/* Parts */}
              <li>
                <Link to="/dashboard/manageAllOrders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addAProduct">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProducts">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
