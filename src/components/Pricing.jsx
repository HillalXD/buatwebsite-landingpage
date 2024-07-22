import Section from "./Section";
import { smallSphere, stars, banner } from "../assets";
import Heading from "./Heading";
import { ScrollParallax } from "react-just-parallax";
import { LeftLine, RightLine } from "./design/Pricing";
import { Gradient } from "./design/Hero";

const Pricing = () => {
  return (
    <Section className="overflow-hidden lg:mt-[23rem]" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="maximize growth with top visual appearance and high performance website"
          title="boost up your digital presence"
        />

        <div className="relative">
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
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="#features"
          >
            I wanna boost up my digital presence
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
