import { useState } from "react";
import { useStore } from "../../store/useStore";
const initialState = {
  name: "",
  shortDescription: "",
  description: "",
  price: "",
  discountedPrice: "",
  img: "",
  alt: "",
};
export default function AddProduct() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const addProduct = useStore((state) => state.addProduct);
  const buttonText = isSubmitting ? "Adding" : "Add";
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const genericErrorMessage = "Something went wrong! Please try again later.";
    setError("");
    try {
      const res = await addProduct(formData);
      setIsSubmitting(false);
      console.log("Product Added Successfully " + res);
      setFormData(initialState);
    } catch (e) {
      console.log("error adding: " + e.message);
      setIsSubmitting(false);
      const errMessage = e.message ? e.message : genericErrorMessage;
      setError(errMessage);
    }
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
            maxLength={20}
            required
          />
        </label>

        <label htmlFor="shortDescription">
          Short Description
          <textarea
            id="shortDescription"
            name="shortDescription"
            type="text"
            placeholder="Enter Short Description"
            value={formData.shortDescription}
            onChange={handleFormChange}
            rows={5}
            maxLength={200}
            required
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleFormChange}
            rows={3}
            maxLength={300}
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
          Image Path
          <input
            id="img"
            name="img"
            type="text"
            placeholder="Enter Your Img Name"
            value={formData.img}
            onChange={handleFormChange}
            maxLength={20}
            required
          />
        </label>
        <label htmlFor="alt">
          Image Description
          <input
            id="alt"
            name="alt"
            type="text"
            placeholder="Enter Your alt Name"
            value={formData.alt}
            onChange={handleFormChange}
            maxLength={50}
            required
          />
        </label>
        <button onClick={handleSubmit} disabled={isSubmitting}>
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

//   fetch("http://localhost:8000/products/addProduct", {
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
//         console.log("Product Added Successfully");
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
