import './App.css';
import Benifits from './Components/Benifits';
import Collaboration from './Components/Collaboration';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ButtonGradient from './assets/svg/ButtonGradient';

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />

        <Benifits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
