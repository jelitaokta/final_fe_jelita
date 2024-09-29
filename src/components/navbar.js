import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 p-4 shadow-md">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center ml-4">
            <img
              src="/foto/logo.png"
              alt="logo"
              style={{
                width: "120px", // Ukuran logo diperkecil
                height: "100px",
              }}
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold" style={{ color: "#6a0dad" }}>
                Curiculum Vitae
              </h1>
              <p className="text-sm" style={{ color: "#6a0dad" }}>
                Posted by Jelita
              </p>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" style={{ color: "#6a0dad" }}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/overview" style={{ color: "#6a0dad" }}>
                OVERVIEW
              </Link>
            </li>
            <li>
              <Link to="/aboutme" style={{ color: "#6a0dad" }}>
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link to="/skillpengalaman" style={{ color: "#6a0dad" }}>
                SKILL & PENGALAMAN
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="btn btn-primary btn-sm bg-pink-500 hover:bg-pink-700 ml-4"
              >
                JOIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
