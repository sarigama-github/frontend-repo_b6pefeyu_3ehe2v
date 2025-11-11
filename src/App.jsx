import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resources from './components/Resources';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="[scroll-behavior:smooth]">
        <Hero />
        <About />
        <Resources />
        <Courses />
        <Testimonials />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
