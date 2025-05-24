export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-32 bg-[#2F4F4F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              We are on a mission to empower seniors through technology
            </h1>
            <p className="text-lg sm:text-xl text-[#F5F5F5] mb-8">
              Bridging the digital divide by providing personalized technology education and support for seniors across
              communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeje610cikpjciQnokWOzILfsgo0-63diV5_NcGbZ8Zahj26g/viewform?usp=dialog"
                target="_blank" 
                className="bg-[#778899] text-white px-8 py-3 rounded-lg hover:bg-[#708090] transition-colors duration-300"
              >
                Start Your Own Chapter
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeje610cikpjciQnokWOzILfsgo0-63diV5_NcGbZ8Zahj26g/viewform"
                target="_blank"
                className="bg-transparent border-2 border-[#F5F5F5] text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="third.JPG"
              alt="Seniors learning technology illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

