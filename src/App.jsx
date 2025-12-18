import About from "./components/About/About";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/HeroUI";
import MyWork from "./components/MyWork/Work";
import Navbar from "./components/Navbar/NavBar";
import Services from "./components/Services/ServiceUI";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;