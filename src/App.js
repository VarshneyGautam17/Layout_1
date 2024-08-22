import './App.css';
import AboutUs from './Components/AboutUs';
import Blogs from './Components/Blogs';
import Carousel1 from './Components/Carousel1';
import Event from './Components/Event';
import Faqs from './Components/Faqs';
import Footer from './Components/Footer';
import Maincon1 from './Components/Maincon1';
import Navbar from './Components/Navbar'; 
import OurTeam from './Components/OurTeam';
import Testimonials from './Components/Testimonials';
import Videosec from './Components/Videosec';
import Volunter from './Components/Volunter';
import Whatwedo from './Components/Whatwedo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Maincon1 />
      <AboutUs />
      <Whatwedo />
      <Videosec/>
      <Carousel1/>
      <Event />
      <OurTeam />
      <Volunter />
      <Blogs />
      <Testimonials />
      <Faqs />
      <Footer />

    </div>
  );
}

export default App;
