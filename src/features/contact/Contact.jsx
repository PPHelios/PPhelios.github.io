import { useState } from "react";
import "./contact.scss";

const initialState = {
  fullName: "",
  email: "",
  organization: "",
  topic: "",
};
export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialState);
  };
  console.log(formData);
  return (
    <main className="contact--container">
      <div className="reachToUs">
        <p>Need to reach out to us? Hit us up and will get back to you! </p>
        <address>Email: help@coupletcoffee.com</address>
      </div>
      <form action="">
        <label htmlFor="fullName">
          Full Name
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter Your Full Name"
            value={formData.fullName}
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
        <label htmlFor="organization">
          Organization / Buisness (Optional)
          <input
            id="organization"
            name="organization"
            type="email"
            placeholder="Enter Your Organization / Buisness"
            value={formData.organization}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="topic">
          What's On Your Mind?
          <input
            id="topic"
            name="topic"
            type="text"
            placeholder=" Tell Us What's On Your Mind"
            value={formData.topic}
            onChange={handleFormChange}
            required
          />
          <button onClick={handleSubmit}>SUBMIT</button>
        </label>
      </form>
    </main>
  );
}
