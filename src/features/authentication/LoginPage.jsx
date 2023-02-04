import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthenticate from "./authenticator";


const initialState = {
  email: "",
  password: "",
};
export default function LoginPage() {
  const [formData, setFormData] = useState(initialState);
  const login = useAuthenticate().authLogin

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     login(formData)
    setFormData(initialState);
  };

  return (
    <main className="contact--container">
      <div className="reachToUs">
        <p>Login</p>
      </div>
      <form action="">
        <label htmlFor="email2">
          Email Address
          <input
            id="email2"
            name="email"
            type="email"
            placeholder="Enter Your Email Address"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </label>
        <label htmlFor="password2">
        Password
          <input
            id="password2"
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
  <p>Not Registered? <Link to="/dass-coffee/signup">sign Up</Link></p>
    </main>
  );
}