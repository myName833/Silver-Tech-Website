import { Calendar, Clock, MapPin } from "lucide-react"

export default function PastEvents() {
  const events = [
    {
      title: "Smartphone Basics Workshop",
      date: "January 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      recording: "https://drive.google.com/drive/folders/1I-GoL2W3oMuRZLp1ZtbH6AVy5vIG9EXZ",
      thumbnail: "events.jpg",
    },
    {
      title: "Internet Safety Seminar",
      date: "February 1, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Virtual Event",
      recording: "https://drive.google.com/drive/folders/1I-GoL2W3oMuRZLp1ZtbH6AVy5vIG9EXZ",
      thumbnail: "events 2.jpg",
    },
    {
      title: "Digital Communication Tools",
      date: "February 20, 2024",
      time: "1:00 PM - 3:00 PM",
      location: "Senior Center",
      recording: "https://drive.google.com/drive/folders/1I-GoL2W3oMuRZLp1ZtbH6AVy5vIG9EXZ",
      thumbnail: "events 1.JPG",
    },
  ]

  return (
    <section id="past-events" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2F4F4F] mb-4">Past Events</h2>
          <p className="text-[#708090] max-w-2xl mx-auto">Watch recordings of our previous workshops and seminars</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img src={event.thumbnail} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2F4F4F] mb-4">{event.title}</h3>
                <div className="space-y-2 text-[#708090]">
                  <p className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    {event.date}
                  </p>
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {event.time}
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {event.location}
                  </p>
                </div>
                <a
                  href={event.recording}
                  target="_blank"
                  className="mt-6 inline-block bg-[#2F4F4F] text-white px-6 py-2 rounded-lg hover:bg-[#708090] transition-colors duration-300"
                >
                  Watch Event
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

