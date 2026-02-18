import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import Seo from '../components/Seo';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const faqs = [
    {
      question: 'What is EduManage Pro?',
      answer: 'EduManage Pro is a comprehensive school management software designed specifically for Nigerian schools. It handles everything from student admissions and fee payments to results, timetables, and parent portals.',
    },
    {
      question: 'What\'s the difference between Cloud Hosted and Self Hosted?',
      answer: 'Cloud Hosted means we host the software on our servers - you just pay monthly or annually with no setup fees. Self Hosted means we install it on your own domain - you pay a one-time setup fee plus monthly maintenance. With Self Hosted, you own your data completely and have full control.',
    },
    {
      question: 'How much does it cost?',
      answer: 'Cloud Hosted plans start from ₦25,000/month or ₦250,000/year for the Basic plan. Self Hosted plans start from ₦500,000 one-time setup + ₦15,000/month maintenance. All plans include a free professional school website worth over ₦500,000.',
    },
    {
      question: 'Do I really get a free website?',
      answer: 'Yes! Every school that signs up gets a professionally designed website at no extra cost. This includes custom design, hosting, and SEO optimization. The website is worth over ₦500,000 but is completely free when you sign up for any plan.',
    },
    {
      question: 'Is the system designed for Nigerian schools?',
      answer: 'Absolutely. EduManage Pro is built specifically for Nigerian schools. It uses JSS/SSS terminology, the 3-term system, Nigerian grading (A1-F9), PAYE tax calculations for payroll, and all pricing is in Naira.',
    },
    {
      question: 'Can parents and students access the system?',
      answer: 'Yes. We provide separate portals for parents and students (available in Standard and Premium plans). Parents can view results, pay fees, and communicate with teachers. Students can check results, view timetables, and access learning materials.',
    },
    {
      question: 'How long does setup take?',
      answer: 'Cloud Hosted setup is instant - you can start using the system within 24 hours of signing up. Self Hosted setup typically takes 3-5 business days depending on your domain and hosting configuration.',
    },
    {
      question: 'What about training and support?',
      answer: 'We provide comprehensive training for your staff during onboarding. All plans include email and phone support. Premium plans get priority support with faster response times.',
    },
    {
      question: 'Can I migrate from my current system?',
      answer: 'Yes. We can help you migrate your existing student data, fee records, and other information from spreadsheets or other systems. Data migration is included in all Self Hosted plans and available as an add-on for Cloud Hosted plans.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, card payments, and can set up direct debit for recurring payments. All transactions are in Nigerian Naira.',
    },
    {
      question: 'Is my school data secure?',
      answer: 'Yes. We use SSL encryption, regular backups, and role-based access controls. Cloud Hosted data is stored on secure Nigerian servers. Self Hosted gives you complete control over your data on your own servers.',
    },
    {
      question: 'Can I try before I buy?',
      answer: 'Yes! Request a demo and we\'ll show you the full system in action. We can even set up a trial account with your school\'s data so you can test all features before committing.',
    },
    {
      question: 'What if I need a feature that\'s not included?',
      answer: 'We regularly add new features based on customer feedback. If you need custom functionality, we can discuss development as an add-on service. Many features we\'ve built started as requests from schools like yours.',
    },
    {
      question: 'How many students can the system handle?',
      answer: 'Basic plans support up to 500 students, Standard up to 1,500 students, and Premium supports unlimited students. The system is built to scale with your school as it grows.',
    },
  ];

  return (
    <div>
      <Seo
        title="FAQ | EduManage Pro by SableBoxx"
        description="Answers to common questions about EduManage Pro: hosting options, pricing, setup time, support, and security." 
        canonicalPath="/faq"
      />
      {/* Hero */}
      <section className="px-6 lg:px-8 pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-black mb-6">FAQ</h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto">
          Common questions about EduManage Pro
        </p>
      </section>

      {/* FAQ List */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-black/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
                  aria-controls={`${baseId}-faq-${index}`}
                >
                  <span className="font-medium text-black pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`size-5 text-black/60 shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div 
                    id={`${baseId}-faq-${index}`} 
                    className="px-6 pb-5 text-black/60 leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="px-6 lg:px-8 py-24 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-white/60 mb-8">
            Contact us directly or request a demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/request-demo" 
              className="px-8 py-4 bg-[#2979FF] text-white hover:bg-[#2979FF]/90 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
