import Section from "./Section";
import Heading from "./Heading";
import { check, bitcoin, money, booking } from "../assets";
import Generating from "./Generating";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Proof of work"
          text="our website gallery"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden  xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none xl:w-auto">
              <img
                src={bitcoin}
                alt="Page"
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>

            <div className="relative z-1  ml-auto rounded-lg bg-gradient-to-b from-n-8/70 to-n-8/35  xl:p-10 md:p-10 p-10">
              <h4 className="h4 mb-4">Cryptocurrency tracker</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                first 100 market cap Cryptocurrency price movement tracker
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
              <Generating href="test" />
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={money}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/100 lg:p-15">
                <h4 className="h4 mb-4">Money tracker</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Track your income and expense in website make your money more
                  accountable
                </p>
                <Generating href="test" />
              </div>
            </div>
            {/* section2 */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={booking}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/100 lg:p-15">
                <h4 className="h4 mb-4">Time booking website</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  track all your customers reservation, let them make the deal
                </p>
                <Generating href="test" className="items-end" />
              </div>
            </div>
            {/* section3 */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
