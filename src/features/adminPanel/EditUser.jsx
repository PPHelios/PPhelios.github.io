import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  //password: "",
  phoneNumber:"",
  gender:"",
  birthDate:"2000-01-01",
  addresses:[""],
};
export default function EditUser() {
  //will be used in admin
  //const { userId } = useParams();
  const fetchUserDetails = useStore((state) => state.fetchUserDetails);
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const editUser = useStore((state) => state.editUser);
 const allUsers = useStore((state) => state.allUsers);
  const navigate = useNavigate();
  const buttonText = isSubmitting ? "editing" : "edit";
  
  const handleFormChange = (e) => {
    const {name} = e.target
    if(name === "addresses"){
      setFormData({ ...formData, addresses: [e.target.value] });
    } else {
    //  console.log('else '+ name, e.target.value , e.target.name)
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } 
  };
  
  useEffect(() => {
const fetchUserToEdit = async () => {
    const user = await fetchUserDetails();
    if (user) {
      setFormData(user);
    } else {
      console.log("Couldn't Find User")
    }
  };
    fetchUserToEdit();
  }, [ fetchUserDetails]);

  console.log(allUsers)

  const handleEdit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const genericErrorMessage = "Something went wrong! Please try again later.";
    setError("");
    try {
      const res = await editUser(formData);
      setIsSubmitting(false);
      console.log("User edited Successfully ");
      navigate("/dass-coffee/adminpanel/allusers");
    } catch (e) {
      console.log("error editing User: " + e.message);
      setIsSubmitting(false);
      const errMessage = e.message ? e.message : genericErrorMessage;
      setError(errMessage);
    }
  };

  return (
    <div className="contact--container">
      <h1>Edit User {formData && formData.name}</h1>
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
        {/* <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleFormChange}
          />
        </label> */}
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
          <input
            id="gender"
            name="gender"
            type="text"
            placeholder="Enter Your Gender"
            value={formData.gender}
            onChange={handleFormChange}
          />
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
        <button onClick={handleEdit} disabled={isSubmitting}>
          {buttonText}
        </button>
      </form>
      {error && <h3>{error}</h3>}
    </div>
  );
}

// const handleSubmit = (e) => {
//   e.preventDefault();
//   setIsSubmitting(true);
//   const genericErrorMessage = "Something went wrong! Please try again later.";
//   setError("");

//   fetch("http://localhost:8000/Users/editUser", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(formData),
//   })
//     .then(async (res) => {
//       setIsSubmitting(false);
//       console.log(res);
//       if (!res.ok) {
//         if (res.status === 400) {
//           setError("Please fill all the fields correctly!");
//         } else if (res.status === 401) {
//           setError("Invalid email and password combination.");
//         } else {
//           setError(genericErrorMessage);
//         }
//       } else {
//         const data = await res.json();
//         console.log("User edited Successfully");
//       }
//     })
//     .catch((error) => {
//       setIsSubmitting(false);
//       const stringError = JSON.stringify(error);
//       setError(error);
//       console.log("error: " + stringError);
//     });
//   // setFormData(initialState);
// };
