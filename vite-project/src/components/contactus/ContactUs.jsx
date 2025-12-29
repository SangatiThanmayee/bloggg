import React, { useState, useRef } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;

    if (formData.name.trim() === "") {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (formData.email.trim() === "") {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (formData.phoneNumber.trim() === "") {
      setPhoneNumberError("Phone number is required");
      valid = false;
    } else {
      setPhoneNumberError("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby3D_wFInpH16t2VYyYy1cGQhsuhSST2op_XIGeqLIhfdqXXeKViTiejD33GsNDwo3g/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          subject: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen mt-24 md:mt-28 flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
      <div className="w-full max-w-5xl flex flex-col items-center gap-6 pb-20">

        <form
          ref={formRef}
          name="form"
          method="post"
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex flex-col gap-4 p-8 rounded-2xl shadow-xl bg-white"
        >
          <h2 className="text-4xl md:text-5xl text-center font-semibold italic text-blue-500">
            Contact Us
          </h2>

          <label htmlFor="name" className="text-purple-500 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-gray-800 bg-transparent rounded-xl border border-purple-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
          />
          {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

          <label htmlFor="email" className="text-purple-500 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-gray-800 bg-transparent rounded-xl border border-purple-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

          <label htmlFor="phoneNumber" className="text-purple-500 font-medium">
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full text-gray-800 bg-transparent rounded-xl border border-purple-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
          />
          {phoneNumberError && (
            <p className="text-red-500 text-sm">{phoneNumberError}</p>
          )}

          <label htmlFor="subject" className="text-purple-500 font-medium">
            Message:
          </label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            rows="4"
            cols="50"
            required
            className="w-full text-gray-800 bg-transparent rounded-xl border border-purple-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
          ></input>

          <div
            className={`mx-auto mt-4 border-4 border-gray-200 border-t-blue-500 rounded-full w-10 h-10 animate-spin ${
              isSubmitting ? "block" : "hidden"
            }`}
          ></div>

          <input
            type="submit"
            value="Submit"
            className="w-full text-center text-white text-lg font-semibold rounded-xl py-3 mt-2 bg-gradient-to-br from-purple-600 to-pink-500 hover:opacity-90 transition"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
