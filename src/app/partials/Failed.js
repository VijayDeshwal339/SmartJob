// import React from "react";

// import { Button } from "@mui/material";

// import { Close } from "@mui/icons-material";
// import img1 from "../assets/img/admin/Failed.png";
// import Colors from "../utils/colors";

// import Classes from "../partials/Failed.module.css";

// export default function PostAJob() {
//   return (
//     <>
//       <div className="container">
//         <div className={Classes['image-container']}>
//           <img src={img1} alt="No preview" className="centered-image" />
//           <div className= {Classes['text-container']}>
//             <h2>Falied</h2>
//             <div className={Classes['buttons']}>
//             <Button
//               variant="outlined"
//               color="primary"
//               className={Classes["action-button"]}
//               sx={{
//                 borderRadius:"50px",
//                 borderColor:Colors.palette.background.default,
//                 color:Colors.palette.primary.main,
//                 marginRight: "50px",
//               }}
//             >
//               Go Back
//             </Button>
//             <Button
//               variant="outlined"
//               color="primary"
//               className={Classes["action-button"]}
//               sx={{
//                 borderRadius:"50px",
//                 borderColor:Colors.palette.background.default,
//                 color:Colors.palette.primary.main,

//               }}
//             >
//               Cancel
//             </Button>
//             </div>
           
//           </div>
//         </div>

//         <div className={Classes["close-icon"]}>
//           <Close fontSize="large" />
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import img1 from "../assets/img/admin/Failed.png";

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "auto",
  position: "relative",
};

const imageContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const closeIcon = {
  position: "absolute",
  top: "5%",
  right: "20px",
  cursor: "pointer",
  padding: "5px",
  border: "1px solid #6973FE",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function PostAJob() {
  return (
    <>
      <Box sx={container}>
        <Box sx={imageContainer}>
          <img
            src={img1}
            alt="No preview"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Typography variant="h4">Failed</Typography>
            <Box sx={{ marginTop: "10px" }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: "50px",
                  borderColor: "#6973FE",
                  color: "black",
                  marginRight: "50px",
                  "&:hover": {
                    backgroundColor: "#6973FE",
                    color: "white",
                  },
                }}
              >
                Go Back
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: "50px",
                  borderColor: "#6973FE",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#6973FE",
                    color: "white",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>

        <Box sx={closeIcon}>
          <Close fontSize="large" />
        </Box>
      </Box>
    </>
  );
}