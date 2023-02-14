import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
export default function EditProduct() {
  const { productId } = useParams();
  const findProduct = useStore((state) => state.findProduct);
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const editProduct = useStore((state) => state.editProduct);
  const products = useStore((state) => state.products);
  const buttonText = isSubmitting ? "editing" : "edit";
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const fetchProductToEdit = async () => {
    const product = await findProduct(productId);
    console.log(product);
    if (product) {
      setFormData(product);
    }
  };
  useEffect(() => {
    fetchProductToEdit();
  }, [products]);
  const handleEdit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const genericErrorMessage = "Something went wrong! Please try again later.";
    setError("");
    try {
      const res = await editProduct(productId, formData);
      setIsSubmitting(false);
      console.log("Product edited Successfully");
      //setFormData(initialState);
    } catch (e) {
      console.log("error editing: " + e.message);
      setIsSubmitting(false);
      const errMessage = e.message ? e.message : genericErrorMessage;
      setError(errMessage);
    }
  };

  return (
    <div className="contact--container">
      <h1>Edit Product {formData && formData.name}</h1>
      <form action="dass-coffee/edit" method="POST">
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
          Image Path
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
          Image Description
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

//   fetch("http://localhost:8000/products/editProduct", {
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
//         console.log("Product edited Successfully");
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
