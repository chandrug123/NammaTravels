import '../i18n';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Vehicles from '../components/Vehicles';
import TravelGuide from '../components/TravelGuide';
import BookingForm from '../components/BookingForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Vehicles />
        <TravelGuide />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
