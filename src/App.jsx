import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default App;
