import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");
        console.log(data);

        // Save logged user in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));

        // redirect to dashboard
        window.location.href = "/dashboard";

      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Login to your account</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
