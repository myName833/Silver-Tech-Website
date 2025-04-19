import { Smartphone, Monitor, Users, Mail } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Smartphone Basics",
      description: "Learn to navigate your smartphone, use essential apps, and stay connected with loved ones.",
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Computer Skills",
      description: "Master computer basics, internet browsing, and essential software applications.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Workshops",
      description: "Join our interactive group sessions to learn and share experiences with peers.",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Online Safety",
      description: "Stay safe online with our comprehensive internet security and privacy training.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F4F4F] mb-4">Our Services</h2>
          <p className="text-[#708090] max-w-2xl mx-auto">
            We offer personalized technology training and support services designed specifically for seniors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#2F4F4F] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">{service.title}</h3>
              <p className="text-[#708090]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

