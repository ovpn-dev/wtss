import { Button } from "./ui/button";
// Import your images properly
import welderHero2 from "../assets/welderHero2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          About Wisdom Tech & Safety Solutions Limited
        </h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={welderHero2}
              width={600}
              height={400}
              alt="About Wisdom Tech & Safety Solutions Limited"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <p className="text-lg mb-4">
              Wisdom Tech & Safety Solutions Limited is a leading provider of
              fire safety equipment procurement, installation, and maintenance
              services. We specialize in advanced fire protection systems,
              personal protective equipment (PPE), and large-scale safety
              projects across Nigeria. Our team of certified professionals is
              dedicated to protecting lives and property through innovative
              solutions and rigorous standards.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-600 w-6 h-6 rounded-full mr-2 flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </span>
                <span>Over a decade of expertise in fire safety solutions</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-600 w-6 h-6 rounded-full mr-2 flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </span>
                <span>
                  Serving major clients including FAAN, NCAA, and MTN Nigeria
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-600 w-6 h-6 rounded-full mr-2 flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </span>
                <span>100% NFPA and ISO safety standards compliance</span>
              </li>
            </ul>
            <div className="space-y-4">
              <p className="text-lg">
                Our mission is to protect lives and property by delivering
                world-class fire safety systems, PPE, and risk assessment
                services driven by innovation, precision, and outstanding
                service delivery.
              </p>
              <Button
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
