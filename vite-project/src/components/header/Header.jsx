import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/blog_logo.png";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();

  const contextValue = useContext(AuthContext);

  console.log("📌 Header received context:", contextValue);

  const { user, dispatch } = contextValue || {};

  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    dispatch?.({ type: "LOGOUT" });

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    toast("Logout successfully");

    navigate("/register", { replace: true });
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-24 h-auto" />
        </Link>

        <button
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 bg-white"
          type="button"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`w-full lg:w-auto lg:flex items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 mt-4 lg:mt-0 text-gray-800">

            <li><Link to="/" className="font-semibold text-lg">Home</Link></li>

            <li><Link to="/contactus" className="font-semibold text-lg">Contact us</Link></li>

            <li><Link to="/createNewBlog" className="font-semibold text-lg">Create blog</Link></li>

            {user ? (
              <>
                <li>
                  <button onClick={logout} className="font-semibold text-lg">
                    Logout
                  </button>
                </li>

                <li>
                  <Link to={`/user/${user._id}`}>
                    <button className="px-5 py-2 rounded-full bg-cyan-500 text-white font-serif text-lg tracking-wide hover:bg-cyan-600 transition">
                      {user?.name}
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/signin" className="font-semibold text-lg">
                  Signin
                </Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
