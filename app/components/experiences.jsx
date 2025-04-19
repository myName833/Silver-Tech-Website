import { Star } from "lucide-react"

export default function Experiences() {
  const experiences = [
    {
      name: "Margaret W.",
      age: "75",
      quote:
        "Thanks to Silver Tech, I can now video chat with my grandchildren every week. The patient instructors made learning easy and fun!",
      rating: 5,
    },
    {
      name: "Robert M.",
      age: "68",
      quote:
        "The smartphone workshop was exactly what I needed. Now I can confidently use apps and stay connected with my family.",
      rating: 5,
    },
    {
      name: "Patricia L.",
      age: "72",
      quote:
        "The online safety course helped me feel secure while using the internet. I highly recommend Silver Tech to all seniors.",
      rating: 5,
    },
  ]

  return (
    <section id="experiences" className="py-20 bg-[#778899]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-[#F5F5F5] max-w-2xl mx-auto">
            Hear from our community members who have transformed their digital lives with Silver Tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#2F4F4F]">{exp.name}</h3>
                  <p className="text-[#708090]">Age {exp.age}</p>
                </div>
                <div className="flex">
                  {[...Array(exp.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[#708090] italic">"{exp.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

