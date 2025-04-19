export default function StartChapter() {
  return (
    <section id="start-chapter" className="py-20 bg-[#778899]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Start a Silver Tech Chapter</h2>
            <p className="text-[#F5F5F5] mb-8 text-lg">
              Help us expand our mission by starting a Silver Tech chapter in your community. Together, we can empower
              more seniors with digital literacy and technological confidence.
            </p>
            <p className="text-[#F5F5F5] mb-8">By starting a chapter, you'll receive:</p>
            <ul className="text-[#F5F5F5] mb-8 space-y-2 list-disc list-inside">
              <li>Complete training materials and resources</li>
              <li>Marketing and promotional support</li>
              <li>Access to our network of tech educators</li>
              <li>Ongoing guidance and mentorship</li>
            </ul>
            <a
              href=" https://docs.google.com/forms/d/e/1FAIpQLSeje610cikpjciQnokWOzILfsgo0-63diV5_NcGbZ8Zahj26g/viewform?usp=dialog" 
              target="_blank"
              className=" inline-block bg-[#2F4F4F] text-white px-8 py-4 rounded-lg hover:bg-[#708090] transition-colors duration-300 text-lg font-semibold"
            >
              Start Your Chapter Today
            </a>
          </div>
          <div className="hidden lg:block">
            <img src="hero.JPG" alt="Community leaders" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

