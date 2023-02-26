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
  const user = useStore((state) => state.user);
  const buttonText = isSubmitting ? "Signing In" : "Sign In";
  const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const genericErrorMessage = "Something went wrong! Please try again later.";
    setIsSubmitting(true);
    setError("");
    try {
      const userLogin = await login(formData);
      setIsSubmitting(false);
      navigate("/dass-coffee/products/storeProducts");
    } catch (err) {
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
        <h1>u r logged in {user.fistName}</h1>
      ) : (
        <main className="userForm--container">
          <h1>Login</h1>

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
            <button onClick={handleSubmit} disabled={isSubmitting}>
              {buttonText}
            </button>
          </form>
          {error && <h3 className="userForm--container-error">{error}</h3>}
          <p>
            Not Registered? <Link to="/dass-coffee/signup">sign Up</Link>
          </p>
        </main>
      )}
    </>
  );
}
