import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import logo from "../../assets/images/blog_logo.png";
import { RiHomeOfficeFill } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-gray-100 text-gray-600 mt-12">
        <section className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-3 border-b border-gray-200">
          <div className="hidden lg:block text-sm">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="flex items-center gap-5">
            <Link to="https://www.instagram.com/instagram/" className="hover:text-gray-900">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link to="https://www.linkedin.com/in/linkedin/" className="hover:text-gray-900">
              <CiLinkedin className="text-2xl" />
            </Link>
            <Link to="https://github.com/SangatiThanmayee" className="hover:text-gray-900">
              <FaGithub className="text-2xl" />
            </Link>
            {/* <Link to="https://helvaradarsh.vercel.app/" className="hover:text-gray-900">
              <CgWebsite className="text-2xl" />
            </Link> */}
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto px-6 mt-10 text-center md:text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

              <div>
                <h6 className="uppercase font-semibold text-gray-700 mb-3 flex items-center gap-3 justify-center md:justify-start">
                  <img src={logo} alt="" className="w-10 h-10 object-contain" />
                  CCS TECH
                </h6>

                <p className="text-gray-600 leading-relaxed">
                  Where Tech Meets Tomorrow, We Lead the Way. Innovate, Elevate, and Inspire,
                  Crafting Solutions That Redefine the Digital Landscape and Propel Success
                </p>
              </div>

              <div>
                <h6 className="uppercase font-semibold text-gray-700 mb-3">Products</h6>

                <ul className="space-y-2 text-gray-600">
                  <li><Link to="" className="hover:text-gray-900">Web Development</Link></li>
                  <li><Link to="" className="hover:text-gray-900">Android Development</Link></li>
                  <li><Link to="" className="hover:text-gray-900">Education</Link></li>
                  <li><Link to="" className="hover:text-gray-900">Finserv</Link></li>
                </ul>
              </div>

              <div>
                <h6 className="uppercase font-semibold text-gray-700 mb-3">Useful Links</h6>

                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/createNewBlog" className="hover:text-gray-900">Create Blog</Link></li>
                  <li><Link to="/contactus" className="hover:text-gray-900">Contact</Link></li>
                  <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
                  <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
                </ul>
              </div>

              <div>
                <h6 className="uppercase font-semibold text-gray-700 mb-3">Contact</h6>

                <ul className="space-y-3 text-gray-600">

                  <li className="flex gap-2 justify-center md:justify-start">
                    <RiHomeOfficeFill className="mt-1" />
                    <span>#10, Bengaluru-Honnavar Rd, Sagara, Karnataka 577401</span>
                  </li>

                  <li className="flex gap-2 items-center justify-center md:justify-start">
                    <CgMail />
                    <a href="mailto:adarshaadi1997@gmail.com" className="hover:text-gray-900">
                      thanmayee@gmail.com
                    </a>
                  </li>

                  <li className="flex gap-2 items-center justify-center md:justify-start">
                    <FaPhoneAlt />
                    <a href="tel:+918660435323" className="hover:text-gray-900">
                      +91 9876543256
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center py-3 mt-8 bg-gray-200 text-gray-700">
          © {date} Copyright:
          <span className="font-semibold ml-1">SANGATI THANMAYEE</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
