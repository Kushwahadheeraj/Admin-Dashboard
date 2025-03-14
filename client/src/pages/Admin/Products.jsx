// import React, { useState, useEffect } from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import Layout from "../../components/Layout/Layout";
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate,useParams } from "react-router-dom";


// const Products = () => {
//   const [products, setProducts] = useState([]);
//    const navigate = useNavigate();
// const [categories, setCategories] = useState([]);     
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

//   //getall products
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(`https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/get-product`);
//       setProducts(data.products);
//     } catch (error) {
//       console.log(error);
//       toast.error("Someething Went Wrong");
//     }
    
//   };
 
//   const deleteProduct = async (productId) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this product?");
//     if (!confirmDelete) return;
   
//     try {
//       await axios.delete(`https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/delete-product/${productId}`);
//       toast.success("Product deleted successfully.");
//       setProducts((prev) => prev.filter((product) => product._id !== productId)); // Update UI without refetching
//     } catch (error) {
//       console.error(error);
//       toast.error("Error deleting product.");
//     }

    
//   };
 
//   //lifecycle method
//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   return (
//     <Layout>
//       <div className="row dashboard">
//         <div className="col-md-3">
//           <AdminMenu />
//         </div>
//         <div className="col-md-9 ">
//           <h1 className="text-center">All Products List</h1>
//           <div className="">
            
//             <div className="w-75">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">Name</th>
//                     <th scope="col">Photo</th>
//                     {/* <th scope="col">Category</th> */}
//                     <th scope="col">Price</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products?.map((p) => (
//                     <>
//                       <tr>
//                         <td key={p._id}>{p.name}</td>
//                         <td className="">
//                      <div className="w-2 h-2">
//                      <img
//                       // src={p.photo}
//                       src={`https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/product-photo/${p._id}`}
//                       alt="product_image"
//                       className=""
//                       style={{ width: "100px", height: "50px" }}
//                     />
//                      </div>
//                   </td>
//                   {/* {categories?.map((c) => (
//                   <td key={c._id} value={c._id}>
//                     {c.name}
//                   </td>
//                 ))} */}
//                         <td key={p._id}>{p.price}</td>
//                         <td key={p._id}>{p.quantity}</td>
//                         <td>
//                           <button
//                             className="btn btn-primary ms-2"
//                             onClick={() =>
//                               navigate(`/dashboard/admin/product/${p.slug}`)
//                             }
//                             // onClick={handleUpdate}
//                           >
//                             Edit
//                           </button>
//                           <button
//                             className="btn btn-danger ms-2"
//                             // onClick={() => {
//                             //   handleDelete(p._id);
//                             // }}
//                             // onClick={handleDelete}
//                             onClick={() => deleteProduct(p._id)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     </>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
    
     
//       </Layout>
   
//   );
// };

// export default Products;



import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

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

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const deleteProduct = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/delete-product/${productId}`);
      toast.success("Product deleted successfully.");
      setProducts((prev) => prev.filter((product) => product._id !== productId));
    } catch (error) {
      console.error(error);
      toast.error("Error deleting product.");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
 <div className="container-fluid dashboard">
 <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center mb-4">All Products List</h1>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((p) => (
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>
                      <img
                        src={`https://admin-dashboard-backend-tz1k.onrender.com/api/v1/product/product-photo/${p._id}`}
                        alt="product_image"
                        className="img-fluid"
                        style={{ width: "100px", height: "50px", objectFit: "cover" }}
                      />
                    </td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm ms-2"
                        onClick={() => navigate(`/dashboard/admin/product/${p.slug}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => deleteProduct(p._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Products;
