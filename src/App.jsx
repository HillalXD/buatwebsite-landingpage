import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefit from "./components/Benefit";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefit />
        <Services />
        <Pricing />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
