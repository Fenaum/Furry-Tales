"use client"

import { useState } from 'react';
import { useRouter } from "next/navigation";  
import "../user.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  async function login() {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.status === 200) {
      console.log(data)
      router.push("/");
    } else {
      alert(data.message);
    }
  }

  const { email, password } = formData;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  
 const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    login();
 };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Log In</h2>
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
          <button className="form-button" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}