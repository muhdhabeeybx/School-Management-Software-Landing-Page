import { ArrowRight, Check, BookOpen, CreditCard, FileText, Users, School, BarChart3, Calendar, MessageSquare, Shield } from 'lucide-react';
import { Link } from 'react-router';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <div>
      <Seo
        title="School Management Software for Nigerian Schools | SableBoxx"
        description="Manage students, fees, results, attendance, and portals for teachers, students, and parents. Built for Nigerian grading and term structures."
        canonicalPath="/"
      />
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold text-black mb-8 tracking-tight">
            School Management<br />Made Simple
          </h1>
          <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto">
            Complete solution for Nigerian schools. Student management, fee payments, results, and portals for teachers, students & parents.
          </p>
          <Link 
            to="/request-demo" 
            aria-label="Get started: request a demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2979FF] text-white hover:bg-[#2979FF]/90 transition-colors text-lg"
          >
            Get Started
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* Free Website Offer - Black BG */}
      <section className="bg-black bg-[#ffffff] px-[32px] py-[0px]">
        <div className="max-w-5xl mx-auto">
          <div className="p-12 text-center bg-[#000000]">
            <div className="inline-block px-4 py-1.5 bg-white text-black text-sm mb-6">
              LIMITED OFFER
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Get a Professional Website, Free
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Sign up for any plan and receive a custom school website at no extra cost. Includes design, hosting, and SEO optimization.
            </p>
            <p className="text-green-600 font-semibold">Worth ₦500,000+</p>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-16 text-center">
            Choose Your Setup
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cloud Hosted */}
            <div className="border border-black/10 p-10 hover:border-black/30 transition-colors">
              <h3 className="text-2xl font-semibold text-black mb-4">Cloud Hosted</h3>
              <p className="text-black/60 mb-8">
                We host and manage everything. Just pay monthly or annually.
              </p>
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-[#2979FF]" />
                  <span className="text-black/80">Instant setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-[#2979FF]" />
                  <span className="text-black/80">Automatic updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-[#2979FF]" />
                  <span className="text-black/80">99.9% uptime</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-[#2979FF]" />
                  <span className="text-black/80">No setup fees</span>
                </div>
              </div>
              <Link to="/pricing" className="inline-block px-6 py-3 bg-black text-white hover:bg-black/90 transition-colors w-full text-center">
                View Plans
              </Link>
            </div>

            {/* Self Hosted */}
            <div className="border border-black/10 p-10 hover:border-black/30 transition-colors">
              <h3 className="text-2xl font-semibold text-black mb-4">Self Hosted</h3>
              <p className="text-black/60 mb-8">
                Your own domain, complete control. One-time setup + monthly maintenance.
              </p>
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-[#2979FF]" />
                  <span className="text-black/80">Your domain</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-[#2979FF]" />
                  <span className="text-black/80">Full data ownership</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-[#2979FF]" />
                  <span className="text-black/80">Custom branding</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-[#2979FF]" />
                  <span className="text-black/80">Priority support</span>
                </div>
              </div>
              <Link to="/pricing" className="inline-block px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors w-full text-center">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 lg:px-8 py-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-16 text-left">
            Everything You Need
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <BookOpen className="size-8 text-[#2979FF] mb-4" />
              <h3 className="font-medium text-white mb-3 text-[20px]">Student Management</h3>
              <p className="text-white/60 text-[15px]">Admissions, attendance, discipline, and complete records</p>
            </div>
            <div>
              <CreditCard className="size-8 text-[#2979FF] mb-4" />
              <h3 className="font-medium text-white mb-3 text-[20px]">Online Payments</h3>
              <p className="text-white/60 text-sm">Fee collection, receipts, and payment tracking</p>
            </div>
            <div>
              <FileText className="size-8 text-[#2979FF] mb-4" />
              <h3 className="font-medium text-white mb-3 text-[20px]">Results & Reports</h3>
              <p className="text-white/60 text-sm">Nigerian grading (A1-F9), digital report cards</p>
            </div>
            <div>
              <School className="size-8 text-[#2979FF] mb-4" />
              <h3 className="font-medium text-white mb-3 text-[20px]">Teacher Portal</h3>
              <p className="text-white/60 text-[15px]">Mark attendance, enter scores, manage classes</p>
            </div>
            <div>
              <Users className="size-8 text-[#2979FF] mb-4" />
              <h3 className="font-medium text-white mb-3 text-[20px]">Parent Portal</h3>
              <p className="text-white/60 text-[15px]">View results, pay fees, track attendance</p>
            </div>
            <div>
              <Shield className="size-8 text-[#2979FF] mb-4" />
              <h3 className="font-medium text-white mb-3 text-[20px]">Staff Management</h3>
              <p className="text-white/60 text-sm">Payroll, leave, attendance, PAYE calculations</p>
            </div>
            <div>
              <Calendar className="size-8 text-[#2979FF] mb-4" />
              <h3 className="font-medium text-white mb-3">Timetables</h3>
              <p className="text-white/60 text-[15px]">Class schedules, exam timetables, room allocation</p>
            </div>
            <div>
              <MessageSquare className="size-8 text-[#2979FF] mb-4" />
              <h3 className="font-medium text-white mb-3">Communication</h3>
              <p className="text-white/60 text-[15px]">Announcements, messaging, notifications</p>
            </div>
            <div>
              <BarChart3 className="size-8 text-[#2979FF] mb-4" />
              <h3 className="font-medium text-white mb-3">Analytics</h3>
              <p className="text-white/60 text-[15px]">Performance reports, trends, visual dashboards</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/features" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              View all 95+ features
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nigerian Standards */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
            Built for Nigerian Schools
          </h2>
          <p className="text-black/60 mb-12">JSS/SSS Structure&nbsp;&nbsp;✦&nbsp;&nbsp;3-Term System&nbsp;&nbsp;✦&nbsp;&nbsp;Nigerian Grading (A1–F9)&nbsp;&nbsp;✦&nbsp;&nbsp;PAYE Calculations&nbsp;&nbsp;✦&nbsp;&nbsp;Naira Currency</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-4xl font-semibold text-black mb-2 text-center">500+</div>
              <div className="text-black/60 text-center">Schools</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-black mb-2 text-center">100K+</div>
              <div className="text-black/60 text-center">Students</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-black mb-2 text-center">95+</div>
              <div className="text-black/60 text-center">Features</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/60 mb-12">
            See EduManage Pro in action at your school.
          </p>
          <Link to="/request-demo" className="inline-block px-8 py-4 bg-[#2979FF] text-white hover:bg-[#2979FF]/90 transition-colors text-lg">
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
