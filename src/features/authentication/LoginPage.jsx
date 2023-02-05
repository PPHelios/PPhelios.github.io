import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
// import useAuthenticate from "./authenticator";
import { useCartStore } from "../../store/store";

const initialState = {
  email: "",
  password: "",
};
export default function LoginPage() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  // const login = useAuthenticate().authLogin
const login = useCartStore((state) => state.login)
const logout = useCartStore((state) => state.logout)
const token = useCartStore((state) => state.loggedIn)
const  buttonText = isSubmitting ? "Signing In" : "Sign In"

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     const genericErrorMessage = "Something went wrong! Please try again later."
    setIsSubmitting(true)
    setError("")

    fetch("http://localhost:8081/users/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: formData.email, password:formData.password }),
    })
      .then(async response => {
        setIsSubmitting(false)
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!")
          } else if (response.status === 401) {
            setError("Invalid email and password combination.")
          } else {
            setError(genericErrorMessage)
          }
        } else {
          const data = await response.json()
          console.log(data)
          login({token:data.token})
        }
      })
      .catch(error => {
        setIsSubmitting(false)
        setError(error)
      })
    // setFormData(initialState);
  };

  const verifyUser = useCallback(() => {
    fetch("http://localhost:8081/users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(async response => {
      if (response.ok) {
        const data = await response.json()
        login({token:data.token})
      } else {
        login(null)
      }
      // call refreshToken every 5 minutes to renew the authentication token.
      setTimeout(verifyUser, 5 * 60 * 1000)
    })
  }, [login])

  // useEffect(() => {
  //   verifyUser()
  // }, [verifyUser])
  return (
    <>
{token.token ? <h1>u r logged in</h1> : (<main className="contact--container">
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
          <button onClick={handleSubmit} disabled={isSubmitting}
        >{buttonText}</button>
      </form>
      {error && <h3>{error}</h3>}
  <p>Not Registered? <Link to="/dass-coffee/signup">sign Up</Link></p>
  <button onClick={()=>logout()}>logout</button>
  
    </main>)}
    </>
  )
  
}