"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../user.css";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const createUser = async () => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      alert("User created successfully");
      // redirect to login page
      router.push("/user/signin");
    } else {
      alert("Error creating user");
    }
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    createUser();
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-input"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-input"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-input"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button className="form-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
