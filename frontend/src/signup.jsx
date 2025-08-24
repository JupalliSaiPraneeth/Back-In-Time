import { useState } from "react";
import axios from "axios";
import "./signup.css"


export default function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", { email, phone, password });
      alert(res.data.message);
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="signup">
     <div className="inside">
       <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" className="signup_giving" placeholder="Email" value={email}
               onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" className="signup_giving" placeholder="Phone Number" value={phone}
               onChange={(e) => setPhone(e.target.value)} />
        <input type="password" className="signup_giving" placeholder="Password" value={password}
               onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="signup_btn">Signup</button>
      </form>
     </div>
    </div>
  );
}
