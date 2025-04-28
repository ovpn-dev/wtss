import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Fire Extinguisher Maintenance",
    description:
      "Regular inspection and maintenance of fire extinguishers to ensure they work when needed most.",
    icon: "/src/assets/icons/fire-extinguisher.png?text=Extinguisher&width=100&height=100",
  },
  {
    title: "Alarm System Installation",
    description:
      "Professional installation of state-of-the-art fire alarm systems for early detection.",
    icon: "/src/assets/icons/alarm.png?text=Alarm&width=100&height=100",
  },
  {
    title: "Emergency Planning",
    description:
      "Comprehensive emergency response planning tailored to your specific needs.",
    icon: "/src/assets/icons/plan.png?text=Planning&width=100&height=100",
  },
  {
    title: "Safety Training",
    description:
      "Hands-on training for employees on fire safety protocols and emergency procedures.",
    icon: "/src/assets/icons/training.png?text=Planning&width=100&height=100",
  },
  {
    title: "Fire Risk Assessment",
    description:
      "Thorough evaluation of your property to identify and mitigate potential fire hazards.",
    icon: "/src/assets/icons/burndown.png?text=Planning&width=100&height=100",
  },
  {
    title: "Sprinkler System Service",
    description:
      "Installation and maintenance of sprinkler systems for automatic fire suppression.",
    icon: "/src/assets/icons/sprinkle.png?text=Planning&width=100&height=100",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of fire safety services to protect
            your home, business, and loved ones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              learnMoreUrl={`/services/${service.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
