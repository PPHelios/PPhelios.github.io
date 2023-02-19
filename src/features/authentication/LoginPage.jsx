import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";

const initialState = {
  email: "",
  password: "",
};
export default function LoginPage() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  const user = useStore((state) => state.user);
  const buttonText = isSubmitting ? "Signing In" : "Sign In";
const navigate = useNavigate()
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const genericErrorMessage = "Something went wrong! Please try again later.";
    setIsSubmitting(true);
    setError("");
try{
 const userLogin = await login(formData)
 setIsSubmitting(false);
 navigate("/dass-coffee/adminpanel/products/storeProducts");
} catch(err){
  console.log("Invalid Email Or Password: " + e.message);
      setIsSubmitting(false);
      const errMessage = err.message ? err.message : genericErrorMessage;
      setError(errMessage);
}
    
    // setFormData(initialState);
  };

  
  // useEffect(() => {
  //   verifyUser()
  // }, [verifyUser])
  return (
    <>
      {user._id ? (
        <h1>u r logged in</h1>
      ) : (
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
            <button onClick={handleSubmit} disabled={isSubmitting}>
              {buttonText}
            </button>
          </form>
          {error && <h3>{error}</h3>}
          <p>
            Not Registered? <Link to="/dass-coffee/signup">sign Up</Link>
          </p>
          <button onClick={() => logout()}>logout</button>
        </main>
      )}
    </>
  );
}
