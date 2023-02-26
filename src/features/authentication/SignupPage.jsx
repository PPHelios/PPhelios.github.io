import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";
import "./userForm.scss";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
  gender: "",
  birthDate: "2000-01-01",
  //   dateToString:function(){
  // const x = this.birthDate
  // console.log(x)
  // if (typeof x !== String){
  //   console.log(x)
  //   console.log(new Date(x))
  // }
  //   },
  addresses: [""],
  role: "",
};
const genderOptions = [
  { id: 0, value: "" },
  { id: 1, value: "Male" },
  { id: 2, value: "Female" },
];
const roleOptions = [
  { id: 0, value: "" },
  { id: 1, value: "User" },
  { id: 2, value: "Admin" },
];
export default function SignupPage() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const addUser = useStore((state) => state.addUser);
  const user = useStore((state) => state.user);
  const navigate = useNavigate();
  const buttonText = isSubmitting ? "Registering" : "Register";

  const handleFormChange = (e) => {
    const { name } = e.target;
    if (name === "addresses") {
      setFormData({ ...formData, addresses: [e.target.value] });
    } else {
      //  console.log('else '+ name, e.target.value , e.target.name)
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const genericErrorMessage = "Something went wrong! Please try again later.";
    setError("");
    try {
      const res = await addUser(formData);
      setIsSubmitting(false);
      console.log("User Added Successfully ");
      navigate("/dass-coffee/adminpanel/products/storeProducts");
    } catch (e) {
      console.log("Error Adding User: " + e.message);
      setIsSubmitting(false);
      const errMessage = e.message ? e.message : genericErrorMessage;
      setError(errMessage);
    }
  };

  return (
    <>
      {user._id ? (
        <h1>u r logged in {user.fistName}</h1>
      ) : (
        <main className="userForm--container">
          <h1>Signup</h1>

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
              />
            </label>
            <label htmlFor="gender">
              Gender
              <select
                id="gender"
                name="gender"
                type="select"
                value={formData.gender}
                onChange={handleFormChange}
              >
                {genderOptions.map((option) => (
                  <option value={option.value} key={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="birthDate">
              Birth Date
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                placeholder="Enter Your Birth Date"
                min="1900-01-01"
                max="2020-01-01"
                onChange={handleFormChange}
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
              />
            </label>

            <label htmlFor="gender">
              Role
              <select
                id="role"
                name="role"
                type="select"
                value={formData.role}
                onChange={handleFormChange}
              >
                {roleOptions.map((option) => (
                  <option value={option.value} key={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={handleSubmit} disabled={isSubmitting}>
              {buttonText}
            </button>
          </form>
          {error && <h3 className="userForm--container-error">{error}</h3>}
          <p>
            Already a Member? <Link to="/dass-coffee/login">Login</Link>
          </p>
        </main>
      )}
    </>
  );
}
