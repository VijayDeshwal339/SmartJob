// // import React, { useState, useEffect } from "react";
// // import Searchbar from "./common/Searchbar";
// // import Sidebar from "./common/Sidebar";
// // import Table from "./common/table";
// // import Menu from "./common/menu";
// // import { Box, Typography, Container } from "@mui/material";
// // import { Search } from "@mui/icons-material";
// // import Axios from "../../../utils/Axios";
// // import Loader from "../../users/admin/common/Loader";

// // const Active = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [data, setData] = useState([]); // State to store the fetched data

// //   const fetchGetAllActive = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await Axios.get("/getallactiverecruiter");
// //       setData(response.data.data); // Update the state with fetched data
// //       console.log(response.data.data);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchGetAllActive();
// //   }, []);

// //   return (
// //     <Box
// //       display="flex"
// //       flexDirection="column"
// //       alignItems="center"
// //       justifyContent="center"
// //       className="wrapper"
// //     >
// //       <Sidebar />
// //       <Typography variant="h4" justifyContent="center" alignItems="center" marginBottom="20px">
// //         Active Recruiter
// //       </Typography>
// //       <Searchbar />
// //       <Menu />

// //       {/* Pass the fetched data to the Table component */}
// //       {loading ? (
// //         <h1>
// //           <Loader />
// //         </h1>
// //       ) : (
// //         <Table data={data} />
// //       )}
// //     </Box>
// //   );
// // };

// // export default Active;

// import React, { useState, useEffect } from "react";
// import Searchbar from "./common/Searchbar";
// import Sidebar from "./common/Sidebar";
// import Table from "./common/table";
// import Menu from "./common/menu";
// import { Box, Typography, Container } from "@mui/material";
// import { Search } from "@mui/icons-material";
// import Axios from "../../../utils/Axios";
// import Loader from "../../users/admin/common/Loader";

// const Active = () => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]); // State to store the fetched data

//   const fetchGetAllActive = async () => {
//     setLoading(true);
//     try {
//       const response = await Axios.get("/pagignationofrecruiterandcount", {params:{is_active:1, pages:10}});
//       setData(response.data.data); // Update the state with fetched data
//       console.log(response.data.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGetAllActive();
//   }, []);

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       className="wrapper"
//     >
//       <Sidebar />
//       <Typography variant="h4" justifyContent="center" alignItems="center" marginBottom="20px">
//         Active Recruiter
//       </Typography>
//       <Searchbar />
//       <Menu />

//       {/* Pass the fetched data to the Table component */}
//       {loading ? (
//         <h1>
//           <Loader />
//         </h1>
//       ) : (
//         <Table data={data} />
//       )}
//     </Box>
//   );
// };

// export default Active;


import React, { useState, useEffect } from "react";
import Searchbar from "./common/Searchbar";
import Sidebar from "./common/Sidebar";
import Table from "./common/table"; // Import the updated table component
import Menu from "./common/menu";
import { Box, Typography, Container } from "@mui/material";
import { Search } from "@mui/icons-material";
import Axios from "../../../utils/Axios";
import Loader from "../../users/admin/common/Loader";

const Active = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data

  const fetchGetAllActive = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("/pagignationofrecruiterandcount", { params: { is_active: 1 } });
      setData(response.data.data); // Update the state with fetched data
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGetAllActive();
  }, []);

  return (
    <Container>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="wrapper"
    >
      <Sidebar />
      <Typography variant="h4" justifyContent="center" alignItems="center" marginBottom="20px">
        Active Recruiter
      </Typography>
      <Searchbar />
      <Menu />

      {/* Pass the fetched data to the Table component */}
      
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : (
        <Table data={data} /> /* Pass data to the table component */
      )}

    </Box>
    </Container>
  );
};

export default Active;
