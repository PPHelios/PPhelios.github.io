import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber:"",
  gender:"",
  birthDate:"2019-07-22",
  dateToString:function(){
const x = this.birthDate
console.log(x)
if (typeof x !== String){
  console.log(x)
  console.log(new Date(x))
}
  },
  addresses:[""],
};
export default function SignupPage() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  const buttonText = isSubmitting ? "Registering" : "Register";
  
  const handleFormChange = (e) => {
    const {name} = e.target
    if (name === "birthDate" ){
      const date = new Date(e.target.value)
      setFormData({ ...formData, birthDate: date });
    } else if(name === "addresses"){
      setFormData({ ...formData, addresses: [e.target.value] });
    } else {
      console.log('else '+ name, e.target.value , e.target.name)
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } 
  };

  console.log(formData)
  console.log(formData.dateToString())
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
        email: formData.email,
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
   // setFormData(initialState);
  };

  return (
    <main className="contact--container">
      <div className="reachToUs">
        <p>Signup</p>
      </div>
      <form action="">
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
        <label htmlFor="lastName">
        Phone Number
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeholder="Enter Your Phone Number"
            value={formData.phoneNumber}
            onChange={handleFormChange}
            required
          />
        </label>
        <label htmlFor="gender">
        Gender
          <input
            id="gender"
            name="gender"
            type="text"
            placeholder="Enter Your Gender"
            value={formData.gender}
            onChange={handleFormChange}
            required
          />
        </label>
        <label htmlFor="birthDate">
        Birth Date
          <input
            id="birthDate"
            name="birthDate"
            type="date"
            placeholder="Enter Your Birth Date"
            value={formData.birthDate}
            onChange={handleFormChange}
            required
          />
        </label>
        <label htmlFor="address">
        Address
          <input
            id="address"
            name="addresses"
            type="text"
            placeholder="Enter Your Address"
            value={formData.addresses[0]}
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
      <Link to="/dass-coffee/adminpanel/products/storeProducts">user</Link>
    </main>
  );
}
