import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2F4F4F] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Silver Tech</h3>
            <p className="text-[#F5F5F5] mb-4">Empowering seniors through technology education and support.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#778899] transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/_silvertech_/" className="hover:text-[#778899] transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                silvertech.for.everyone@gmail.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#778899] transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#778899] transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#778899] transition-colors duration-300">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#778899] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#778899] mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Silver Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

