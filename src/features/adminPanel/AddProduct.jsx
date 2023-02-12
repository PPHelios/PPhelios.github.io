import { useState } from "react";
const initialState = {
  name: "",
  shortDescription: "",
  description: "",
  price: 0,
  discountedPrice: 0,
  img: "",
  alt: "",
};
export default function AddProduct() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const buttonText = isSubmitting ? "Adding" : "Add";
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const genericErrorMessage = "Something went wrong! Please try again later.";
    setError("");

    fetch("http://localhost:8000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        setIsSubmitting(false);
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!");
          } else if (response.status === 401) {
            setError("Invalid email and password combination.");
          } else {
            setError(genericErrorMessage);
          }
        } else {
          const data = await response.json();
          console.log("data: " + data);
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        const stringError = JSON.stringify(error);
        setError(error);
        console.log("error: " + stringError);
      });
    // setFormData(initialState);
  };

  return (
    <div className="contact--container">
      <form action="dass-coffee/add" method="POST">
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </label>

        <label htmlFor="shortDescription">
          Short Description
          <input
            id="shortDescription"
            name="shortDescription"
            type="text"
            placeholder="Enter Short Description"
            value={formData.shortDescription}
            onChange={handleFormChange}
            required
          />
        </label>

        <label htmlFor="description">
          Description
          <input
            id="description"
            name="description"
            type="text"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleFormChange}
            required
          />
        </label>

        <label htmlFor="price">
          price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleFormChange}
            required
          />
        </label>

        <label htmlFor="discountedPrice">
          Discounted Price
          <input
            id="discountedPrice"
            name="discountedPrice"
            type="number"
            placeholder="Enter DiscountedPrice"
            value={formData.discountedPrice}
            onChange={handleFormChange}
            required
          />
        </label>

        <label htmlFor="img">
          img
          <input
            id="img"
            name="img"
            type="text"
            placeholder="Enter Your Img Name"
            value={formData.img}
            onChange={handleFormChange}
            required
          />
        </label>
        <label htmlFor="alt">
          img
          <input
            id="alt"
            name="alt"
            type="text"
            placeholder="Enter Your alt Name"
            value={formData.alt}
            onChange={handleFormChange}
            required
          />
        </label>
        <button onClick={handleSubmit} disabled={isSubmitting}>
          {buttonText}
        </button>
      </form>
      {/* {error && <h3>{error}</h3>} */}
    </div>
  );
}
