import { curve, heroBackground, banner } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">build amazing website</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            We help you and your business maximize growth with top visual
            appearance and high performance website
          </p>
          <Button href="#features" white>
            boost your growth
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 border-n-11 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-11 rounded-t-[0.9rem]" />

              <div className="aspect-[1024/490] rounded-b-[0.9rem] overflow-hidden">
                {/* hero image */}
                <ScrollParallax isAbsolutelyPositioned></ScrollParallax>
                <img
                  src={banner}
                  className="w-full"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <ScrollParallax isAbsolutelyPositioned></ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
