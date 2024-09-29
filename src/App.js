import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home/Home";
import Overview from "./pages/Overview/Overview";
import Aboutme from "./pages/AboutMe/AboutMe";
import SkillPengalaman from "./pages/SkillPengalaman/SkillPengalaman";
import ContactMe from "./pages/ContactMe/ContactMe";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./components/login";
import Register from "./components/register";
import Akun from "./pages/Akun/Akun";
import Profil from "./pages/Profil/profil";
import Masuk from "./pages/Masuk/Masuk";
import Sidebar from "./components/Sidebar";
import EditHome from "./dashboard/EditHome";
import EditOverview from "./dashboard/EditOverview";
import EditAboutMe from "./dashboard/EditAboutMe";
import EditSkillPengalaman from "./dashboard/EditSkillPengalaman"



function App() {
  // State untuk melacak apakah user login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Cek status login dari localStorage
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Fungsi untuk handle login
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  // Fungsi untuk handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/SkillPengalaman" element={<SkillPengalaman />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard/*" element={isLoggedIn ? <DashboardLayout/> : <Navigate to="/masuk" />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/akun" element={isLoggedIn ? <Akun/> : <Navigate to="/login" />}/>
          <Route path="/profil" element={<Profil />} />
          <Route path="/masuk" element={<Masuk onLogin={handleLogin} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function DashboardLayout() {
return(
    <div className="flex min-h-screen">
    <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="edit-home" element={<EditHome />} />
            <Route path="edit-overview" element={<EditOverview />} />
            <Route path="edit-aboutme" element={<EditAboutMe />} />
            <Route path="edit-skillpengalaman" element={<EditSkillPengalaman />} />
          </Routes>
        </div>
    </div>
)
}

export default App;
