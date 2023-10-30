import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import About from "./Pages/About/About/About";
import Footer from "./Pages/Home/Footer/Footer.jsx";
import Header from "./Pages/Home/Header/Header.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Claim from "./Pages/Claim/Claim.jsx";
import Voting from "./Pages/Voting/Voting.jsx";
import "antd/dist/reset.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="23e98646645b9cdab7efdb505f443fba"
    >
      <div className="App">
        <AuthProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/claim" element={<Claim />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      </div>
    </ThirdwebProvider>
  );
}

export default App;
