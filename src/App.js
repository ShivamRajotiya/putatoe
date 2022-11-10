import "./App.css";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Banner/>
      <Products/>
      <Services/>
      <Footer/>
    </>
  );
  }

export default App;
