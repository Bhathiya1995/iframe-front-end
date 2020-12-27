import "./App.css";
import { BrowserRouter } from "react-router-dom";

// Custom Imports
import Aux from "./hoc/Auxilary";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Aux>
        <Layout></Layout>
      </Aux>
    </BrowserRouter>
  );
}

export default App;
