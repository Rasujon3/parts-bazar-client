import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/requireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
