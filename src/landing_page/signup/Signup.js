import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        console.log(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Unable to connect to server");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;