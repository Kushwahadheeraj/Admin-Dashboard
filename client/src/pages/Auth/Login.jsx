// import React, { useState } from "react";
// import Layout from "../../components/Layout/Layout";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
// import { useAuth } from "../../context/auth";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [auth, setAuth] = useAuth();

//   const navigate = useNavigate();
//   const location = useLocation();

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://admin-dashboard-backend-tz1k.onrender.com/api/v1/auth/login", {
//         email,
//         password,
//       });
//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         setAuth({
//           ...auth,
//           user: res.data.user,
//           token: res.data.token,
//         });
//         localStorage.setItem("auth", JSON.stringify(res.data));
//         navigate(location.state || "/");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <Layout title="Register - Ecommer App">
//       <div className="form-container " style={{ minHeight: "90vh" }}>
//         <form onSubmit={handleSubmit}>
//           <h4 className="title">LOGIN FORM</h4>

//           <div className="mb-3">
//             <input
//               type="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Email "
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Enter Your Password"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <button
//               type="button"
//               className="btn forgot-btn"
//               onClick={() => {
//                 navigate("/forgot-password");
//               }}
//             >
//               Forgot Password
//             </button>
//           </div>

//           <button type="submit" className="btn btn-primary">
//             LOGIN
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Login;


import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://admin-dashboard-backend-tz1k.onrender.com/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - Ecommer App">
      <div
        className="form-container"
        style={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "400px",
            width: "100%",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h4
            className="title"
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            LOGIN FORM
          </h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email"
              required
              style={{
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "1px solid #ced4da",
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
              style={{
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "1px solid #ced4da",
              }}
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "4px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
