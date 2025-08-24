import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import "./snow.css";
// eslint-disable-next-line no-unused-vars
import ben10 from "./ben.png"
// eslint-disable-next-line no-unused-vars
import doreamon from "./doreamon.png"
// eslint-disable-next-line no-unused-vars
import shinchan from "./shinchan.png"
// eslint-disable-next-line no-unused-vars
import kick from "./kick.png"
// eslint-disable-next-line no-unused-vars
import tom from "./tom.png"
// eslint-disable-next-line no-unused-vars
import bheem from "./bheem.png"
// eslint-disable-next-line no-unused-vars
import krishna from "./krishna.png"
// eslint-disable-next-line no-unused-vars
import dannam from "./dannam.png"

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Check token on mount → auto-login if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      alert(res.data.message);

      // ✅ Save token in localStorage for persistence
      localStorage.setItem("token", res.data.token);

      // ✅ Switch to MainWebsite in App.jsx
      setIsLoggedIn(true);
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    
    <div className="login">
       <img src={krishna} alt="kri" className="krishna_bg"/>
        <img src={bheem} alt="chota" className="bheem_bg" />
         <img src={tom} alt="tom" className="tom_bg" />
        <img src={kick} alt="kick" className="kick_bg" />
            <img src={shinchan} alt="shin" className="shin_bg" />
      <img src={doreamon} alt="do" className="do_bg" />
      <img src={ben10} alt="cutout" className="ben_bg"/>
      <img src={dannam} alt="dan" className="dan_bg"/>
      <h2 className="greet">Welcome to BIT</h2>
      <div className="main">
        <h2 className="HT">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="giving">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login_btn">Login</button>
        </form>
        <p className="not_reg">
          Not registered? <a href="/signup" className="sign_up">Sign up</a>
        </p>
      </div>
    </div>
  );
}
