import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Hero from './Components/Hero';
import Objectives from './Components/Objectives';
import ContactUs from './Components/Contact';
import StepsForParticipation from './Components/Steps';
import CalendarSection from './Components/Calendar';
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <CalendarSection/>
<About/>
<Objectives/>
<StepsForParticipation/>
<ContactUs/>
      <Footer />
    </div>
  );
}

export default App;

