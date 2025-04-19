"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      question: "How much does it cost to join a SilverTech course?",
      answer:
        "It's free! You don't need to pay anything to learn at SilverTech. All lessons and resources are provided at no cost to seniors."
    },
    {
      question: "How can I join a SilverTech course?",
      answer:
        "You can join by visiting the \"Our Chapters\" page on our website to check if there's a SilverTech branch in your area. From there, you can visit the branch's Instagram page to find event information. If SilverTech isn't available in your area, feel free to email us, and let us know why you believe there's a need for a new branch nearby."
    },
    {
      question: "Can I volunteer with SilverTech?",
      answer:
        "Yes! We are always looking for passionate volunteers to help teach tech skills and assist seniors. If you're interested, click on the \"Become a volunteer\" button on the website to get in touch with your local branch leader."
    },
    {
      question: "What kind of tech skills do the courses teach?",
      answer:
        "Our courses cover a variety of tech skills, including how to use mobile applications, how to recognize online scams, how to use social media, and how to navigate the internet safely."
    },
    {
      question: "Can I access past events or courses?",
      answer:
        "Yes, you can visit our \"Past Events\" page to view event records, including photos and videos from previous courses and activities."
    },
    {
      question: "Is SilverTech available in my area?",
      answer:
        "SilverTech is expanding rapidly! Please check the \"Our Chapters\" page to see if there's a branch near you. If not, reach out to us, and we'll consider expanding to your area."
    },
    {
      question: "Do I need to be tech-savvy to join as a learner or instructor?",
      answer:
        "Not at all! Our courses are designed for beginners, and our instructors are patient and experienced in helping seniors learn at their own pace. You don't need to be tech-savvy to join us as an instructor either. As long as you're willing to learn and present the concepts in a simple, easy-to-understand way, you're a great fit!"
    },
    {
      question: "Are the courses online or in-person?",
      answer:
        "SilverTech provides only in-person courses at this moment, but we're working toward making online courses available!"
    }
  ]
  
  const [openIndex, setOpenIndex] = useState(null)
  
  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}