// import React, { useState, useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { Select } from "antd";
// import { useNavigate, useParams } from "react-router-dom";
// const { Option } = Select;

// const UpdateProduct = () => {
//   const navigate = useNavigate();
//   const params = useParams();
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [shipping, setShipping] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [id, setId] = useState("");

//   //get single product
//   const getSingleProduct = async () => {
//     try {
//       const { data } = await axios.get(
//         `https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/get-product/${params.slug}`
//       );
//       setName(data.product.name);
//       setId(data.product._id);
//       setDescription(data.product.description);
//       setPrice(data.product.price);
//       setPrice(data.product.price);
//       setQuantity(data.product.quantity);
//       setShipping(data.product.shipping);
//       setCategory(data.product.category._id);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getSingleProduct();
//     //eslint-disable-next-line
//   }, []);
//   //get all category
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get("https://admin-dashboard-backend-tz1k.onrender.com/api/v1/category/get-category");
//       if (data?.success) {
//         setCategories(data?.category);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something wwent wrong in getting catgeory");
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   //create product function
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const productData = new FormData();
//       productData.append("name", name);
//       productData.append("description", description);
//       productData.append("price", price);
//       productData.append("quantity", quantity);
//       photo && productData.append("photo", photo);
//       productData.append("category", category);
//       const { data } = axios.put(
//         `https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/update-product/${id}`,
//         productData
//       );
//       if (data?.success) {
//         toast.error(data?.message);
//       } else {
//         toast.success("Product Updated Successfully");
//         navigate("/dashboard/admin/products");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("something went wrong");
//     }
//   };

//   //delete a product
//   const handleDelete = async () => {
//     try {
//       let answer = window.prompt("Are You Sure want to delete this product ? ");
//       if (!answer) return;
//       const { data } = await axios.delete(
//         `https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/delete-product/${id}`
//       );
//       toast.success("Product DEleted Succfully");
//       navigate("/dashboard/admin/products");
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <Layout title={"Dashboard - Create Product"}>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1 className="text-center mb-4">Update Product</h1>
//             <div className="m-1 w-75">
//               <Select
//                 bordered={false}
//                 placeholder="Select a category"
//                 size="large"
//                 showSearch
//                 className="form-select mb-3"
//                 onChange={(value) => {
//                   setCategory(value);
//                 }}
//                 value={category}
//               >
//                 {categories?.map((c) => (
//                   <Option key={c._id} value={c._id}>
//                     {c.name}
//                   </Option>
//                 ))}
//               </Select>
//               <div className="mb-3">
//                 <label className="btn btn-outline-secondary col-md-12">
//                   {photo ? photo.name : "Upload Photo"}
//                   <input
//                     type="file"
//                     name="photo"
//                     accept="image/*"
//                     onChange={(e) => setPhoto(e.target.files[0])}
//                     hidden
//                   />
//                 </label>
//               </div>
//               <div className="mb-3">
//                 {photo ? (
//                   <div className="text-center">
//                     <img
//                       src={URL.createObjectURL(photo)}
//                       alt="product_photo"
//                       height={"200px"}
//                       className="img img-responsive"
//                     />
//                   </div>
//                 ) : (
//                   <div className="text-center">
//                     <img
//                       src={`https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/product-photo/${id}`}
//                       alt="product_photo"
//                       height={"200px"}
//                       className="img img-responsive"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   value={name}
//                   placeholder="write a name"
//                   className="form-control"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   type="text"
//                   value={description}
//                   placeholder="write a description"
//                   className="form-control"
//                   onChange={(e) => setDescription(e.target.value)}
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="number"
//                   value={price}
//                   placeholder="write a Price"
//                   className="form-control"
//                   onChange={(e) => setPrice(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="number"
//                   value={quantity}
//                   placeholder="write a quantity"
//                   className="form-control"
//                   onChange={(e) => setQuantity(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <Select
//                   bordered={false}
//                   placeholder="Select Shipping "
//                   size="large"
//                   showSearch
//                   className="form-select mb-3"
//                   onChange={(value) => {
//                     setShipping(value);
//                   }}
//                   value={shipping ? "yes" : "No"}
//                 >
//                   <Option value="0">No</Option>
//                   <Option value="1">Yes</Option>
//                 </Select>
//               </div>
//               <div className="mb-3">
//                 <button className="btn btn-primary" onClick={handleUpdate}>
//                   UPDATE PRODUCT
//                 </button>
//               </div>
//               <div className="mb-3">
//                 <button className="btn btn-danger" onClick={handleDelete}>
//                   DELETE PRODUCT
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default UpdateProduct;


import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

  // Fetch single product details
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  // Fetch all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://admin-dashboard-backend-tz1k.onrender.com/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Update product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);

      const { data } = await axios.put(
        `https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/update-product/${id}`,
        productData
      );

      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Delete product function
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are you sure you want to delete this product?");
      if (!answer) return;

      const { data } = await axios.delete(
        `https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/delete-product/${id}`
      );
      toast.success("Product Deleted Successfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Update Product"}>
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
            <AdminMenu />
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <h1 className="text-center mb-4">Update Product</h1>
            <div className="m-1 w-98">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setCategory(value)}
                value={category}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary w-100">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      className="img-fluid"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={`https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/product-photo/${id}`}
                      alt="product_photo"
                      className="img-fluid"
                    />
                  </div>
                )}
              </div>
              <input
                type="text"
                value={name}
                placeholder="Enter product name"
                className="form-control mb-3"
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                value={description}
                placeholder="Enter product description"
                className="form-control mb-3"
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="number"
                value={price}
                placeholder="Enter product price"
                className="form-control mb-3"
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="number"
                value={quantity}
                placeholder="Enter product quantity"
                className="form-control mb-3"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Select
                bordered={false}
                placeholder="Select Shipping"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setShipping(value)}
                value={shipping ? "Yes" : "No"}
              >
                <Option value="0">No</Option>
                <Option value="1">Yes</Option>
              </Select>
              {/* <div className="d-flex justify-content-between">
                <button className="btn btn-primary w-48" onClick={handleUpdate}>
                  Update Product
                </button> */}
                {/* <button className="btn btn-danger w-48" onClick={handleDelete}>
                  Delete Product
                </button> */}
                <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpdate}>
                Update Product
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
