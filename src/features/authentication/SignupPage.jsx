import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};
export default function SignupPage() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  const buttonText = isSubmitting ? "Registering" : "Register";
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Sync logout across tabs
   */
  const syncLogout = useCallback((event) => {
    if (event.key === "logout") {
      // If using react-router-dom, you may call history.push("/")
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", syncLogout);
    return () => {
      window.removeEventListener("storage", syncLogout);
    };
  }, [syncLogout]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const genericErrorMessage = "Something went wrong! Please try again later.";

    fetch("http://localhost:8081/users/signup", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.email,
        password: formData.password,
      }),
    })
      .then(async (response) => {
        setIsSubmitting(false);
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!");
          } else if (response.status === 401) {
            setError("Invalid email and password combination.");
          } else if (response.status === 500) {
            console.log(response);
            const data = await response.json();
            if (data.message) setError(data.message || genericErrorMessage);
          } else {
            setError(genericErrorMessage);
          }
        } else {
          const data = await response.json();
          console.log(data);
          login({ token: data.token });
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError(error);
      });
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
        <label htmlFor="firstName">
          First Name
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter Your First Name"
            value={formData.firstName}
            onChange={handleFormChange}
            required
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter Your Last Name"
            value={formData.lastName}
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
        Already a Member? <Link to="/dass-coffee/login">Login</Link>
      </p>
      <button onClick={() => logout()}>logout</button>
      <Link to="/dass-coffee/adminpanel/storeProducts">user</Link>
    </main>
  );
}
