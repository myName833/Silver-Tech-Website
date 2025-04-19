import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-[#778899]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Silver Tech</h2>
            <p className="text-[#F5F5F5] mb-6">
              SilverTech was established in June 2023, originally based in Taiwan and further expanded to have branches in Shanghai, Korea, Bahrain, Dubai, Hawaii, Canada, California, and New York.
            </p>
            <p className="text-[#F5F5F5] mb-6">
              SilverTech provides the elderly with useful tech skills, access to accurate information, and social interaction with the senior community. We hold tech courses for free in our community, teaching seniors how to use applications on their phones, how to recognize online scams, and more.
            </p>
            <p className="text-[#F5F5F5] mb-6">
              Our instructors are all experienced and passionate about technology and volunteering. We have lots of volunteers involved in every activity, ensuring that every elderly person has someone by their side to ask questions.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-3xl font-bold text-white mb-2">8+</h3>
                <p className="text-[#F5F5F5]">Global Branches</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-3xl font-bold text-white mb-2">190+</h3>
                <p className="text-[#F5F5F5]">Annual Courses</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-3xl font-bold text-white mb-2">4,800+</h3>
                <p className="text-[#F5F5F5]">Seniors Helped Yearly</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="text-3xl font-bold text-white mb-2">4</h3>
                <p className="text-[#F5F5F5]">Issues Targeted</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="SECOND.JPG"
              alt="Seniors learning technology"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#2F4F4F] p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">Join Us Today</h3>
              <p className="text-[#F5F5F5]">Issues we target: digital literacy for seniors, online scams and fraud, social isolation, and access to accurate information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;