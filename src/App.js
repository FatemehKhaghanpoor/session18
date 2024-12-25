import { Container } from "@mui/material";
// import { Toaster } from "react-hot-toast";

import "./App.css";

   import BasicTabs from "./components/HOC/basicTabs.jsx";
import HeaderComponent from "./components/header/index.jsx";

function App() {
  
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
     
      <BasicTabs>
       <HeaderComponent/> 
      </BasicTabs>
    </Container>
  );
}

export default App;
