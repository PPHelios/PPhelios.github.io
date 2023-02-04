import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthenticate from "./authenticator";


const initialState = {
  email: "",
  password: "",
};
export default function SignupPage() {
  const [formData, setFormData] = useState(initialState);
  const signup = useAuthenticate().signup
  const logout = useAuthenticate().userLogout
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     signup(formData)
    setFormData(initialState);
  };

  return (
    <main className="contact--container">
      <div className="reachToUs">
        <p>Signup</p>
      </div>
      <form action="">
        <label htmlFor="email">
          Email Address
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your Email Address"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleFormChange}
            required
          />
        </label>
          <button onClick={handleSubmit}>SUBMIT</button>
      </form>
  <p>Already a Member? <Link to="/dass-coffee/login">Login</Link></p>
      <button onClick={()=>logout()}>logout</button>
    </main>
  );
}