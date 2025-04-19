import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#2F4F4F] mb-4">Contact Us</h2>
    <p className="text-gray-600 mb-12 mx-auto max-w-2xl">
      Have questions or want to get involved? Reach out to us using the information below.
    </p>
    
    <div className="flex justify-center gap-8 flex-wrap">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-64">
        <div className="flex justify-center mb-4">
          <svg className="h-12 w-12 text-[#2F4F4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">Email</h3>
        <p className="text-[#708090] text-sm">silvertech.for.everyone@gmail.com</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-64">
        <div className="flex justify-center mb-4">
          <svg className="h-12 w-12 text-[#2F4F4F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">Instagram</h3>
        <p className="text-[#708090] text-sm">@_silvertech_</p>
      </div>
    </div>
    
    <div className="mt-16">
      <p className="text-gray-600 mb-4">Connect with us on social media:</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-[#2F4F4F] hover:text-[#708090]">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/_silvertech_/" className="text-[#2F4F4F] hover:text-[#708090]">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

