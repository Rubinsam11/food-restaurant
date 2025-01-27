import React from 'react';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import About from './components/About';
import Food from './components/Food';
import FoodMenu from './components/FoodMenu';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import SmoothScroll from './components/SmoothScroll'; // Import the SmoothScroll component
import './style.css';

const App = () => {
  return (
    <div>
      <SmoothScroll />  {/* Add SmoothScroll component */}
      <Navbar />
      <Showcase />
      <About />
      <Food />
      <FoodMenu />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
