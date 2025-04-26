import { Button } from "./ui/button";

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
              src="/placeholder.svg?text=About+Us&width=600&height=400"
              alt="About Wisdom Tech & Safety Solutions Limited"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <p className="text-lg mb-4">
              Wisdom Tech & Safety Solutions Limited has been at the forefront
              of fire safety and prevention for over 25 years. Our team of
              certified professionals is dedicated to protecting lives and
              property through innovative solutions and rigorous standards.
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-600 w-6 h-6 rounded-full mr-2 flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </span>
                <span>25+ Years of Experience</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-600 w-6 h-6 rounded-full mr-2 flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </span>
                <span>10,000+ Satisfied Clients</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-600 w-6 h-6 rounded-full mr-2 flex-shrink-0">
                  <span className="text-sm font-bold">✓</span>
                </span>
                <span>100% Safety Compliance Rate</span>
              </li>
            </ul>
            <div className="space-y-4">
              <p className="text-lg">
                Our mission is to create safer environments through education,
                prevention, and state-of-the-art fire safety solutions.
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
