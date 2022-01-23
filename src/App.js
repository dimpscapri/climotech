import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import one from "../src/images/carousel/one.jpg"
import two from "../src/images/carousel/two.jpg"
import three from "../src/images/carousel/three.jpg"

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Carousel c_img1_src={one} c_img2_src={two} c_img3_src={three}></Carousel>
    </>
  );
}

export default App;
