// import React from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
// import Layout from "../../components/Layout/Layout";
// import { useAuth } from "../../context/auth";
// const AdminDashboard = () => {
//   const [auth] = useAuth();
//   return (
//     <Layout>
//       <div className="container-fluid dashboard">
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <div className="card w-75 p-3">
//               <h3> Admin Name : {auth?.user?.name}</h3>
//               <h3> Admin Email : {auth?.user?.email}</h3>
//               <h3> Admin Contact : {auth?.user?.phone}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminDashboard;


import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-lg-3 col-md-4 mb-3">
            <AdminMenu />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="card p-3 shadow-sm">
              <h3 className="mb-3">
                <span className="fw-bold">Admin Name:</span> {auth?.user?.name}
              </h3>
              <h3 className="mb-3">
                <span className="fw-bold">Admin Email:</span> {auth?.user?.email}
              </h3>
              <h3>
                <span className="fw-bold">Admin Contact:</span> {auth?.user?.phone}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
