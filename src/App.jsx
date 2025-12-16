import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Sidebar selectedDay={selectedDay} onDaySelect={setSelectedDay} />
        <Routes>
          <Route path="*" element={<Notfoundpage />} />
          <Route path="/" element={<Body selectedDay={selectedDay} />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
