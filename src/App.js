import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Media } from "./pages/Media";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import NewsEvents from "./pages/NewsEvents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ordernow from "./pages/Ordernow";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/media" element={<Media />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/ordernow" element={<Ordernow />} />

          {/* <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<RecentActivity />} />
            <Route path="project/:id" element={<Project />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
